const express = require('express');
const app = express();
const pug = require('pug');
const path = require('path');
const bodyParser = require("body-parser");
const CRUD_operations = require("./CRUD.js");


// parse requests of contenttype: application/json
app.use(bodyParser.json());
// parse requests of contenttype: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true
}));

// Set views path
app.set('views', path.join(__dirname, 'View'));
// Set public path
app.use(express.static(path.join(__dirname, 'Static')));
// Set pug as view engine
app.set('view engine', 'pug');


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get('/HomePage.html', (req, res) => {
  //res.send("hello");
  res.render('HomePage');
});

app.get('/ExpertPage.html', (req, res) => {
  res.render('ExpertPage');
});


app.get('/review.html', (req, res) => {
  res.render('review');
});

const sql = require('./db');

app.get("/Doctors.html", (req, res) => {
  let sql1 = "SELECT name FROM doctors";
  sql.query(sql1, (err, result) => {
    if (err) throw err;
    let doctors = result.map((doctor) => doctor.name);
    res.render("Doctors", { doctors: doctors });
  });
});

app.get("/nearest", (req, res) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
  
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`);
      const data = await response.json();
  
      let city = '';
      data.results[0].address_components.forEach(function(component) {
        if (component.types.includes("locality")) {
          city = component.long_name;
        }
      });
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
  
  let sql2 = "SELECT name FROM doctors WHERE address" + city ;
  sql.query(sql2, (err, result) => {
    if (err) throw err;
    let doctors = result.map((doctor) => doctor.name);
    res.render("Doctors", { doctors: doctors });
  });
});

  app.get("/highest-rated", (req, res) => {
    let term = "SELECT name, stars as total_stars FROM reviews GROUP BY name"
    let sql3 = "SELECT name FROM doctors where name in" + term;
    sql.query(sql3, (err, result) => {
      if (err) throw err;
      let doctors = result.map((doctor) => doctor.name);
      res.render("Doctors", { doctors: doctors });
  });
});


// Create a route for getting all doctors
app.get("/getdoctors", function(req, res){
    let q = "SELECT * FROM doctors";
    sql.query(q , (err, mysqlres) => {
    if (err) {
    console.log("error: ", err);
    res.status(400).send({message: "error in getting all customers: " + err});
    return;
    }
    console.log("got all doctors...");
    res.send(mysqlres);
    return;
    });
});

app.post("/addReview", CRUD_operations.addNewReview);
