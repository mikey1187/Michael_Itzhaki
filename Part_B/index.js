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

app.get('/Doctors.html', (req, res) => {
  res.render('Doctors');
  connection.query('SELECT name FROM doctors', function (error, results, fields) {
    if (error) throw error;
    res.render('doctors', { doctors: results });})
});

app.get('/review.html', (req, res) => {
  res.render('review');
});
var sql = require('./db')

// Create a route for getting all customers
app.get("/getdoctors", function(req, res){
    sql.query("SELECT * FROM doctors", (err, mysqlres) => {
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

app.post("/addReview1", CRUD_operations.addNewReview);

