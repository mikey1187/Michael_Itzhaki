const sql = require("./db.js");
const addNewReview = function(req,res){
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }
    const newReview = {
        "email": req.body.email,
        "doctor_name": req.body.doctorName,
        "stars": req.body.rating

    };
    console.log(newReview.stars);
    sql.query("INSERT INTO reviews SET ?", newReview, (err, mysqlres) => {
        if (err) {
        console.log("error: ", err);
        res.status(400).send({message: "error in adding review: " + err});
        return;
    }
    console.log("created review: ", { id: mysqlres.insertId, ...newReview });
        res.render('reviewAdded');
        return;
        });
};
module.exports = {addNewReview};

