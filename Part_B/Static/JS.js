function ExpertsPage() {
    window.location.href = ("file:///C:/Users/user/OneDrive%20-%20post.bgu.ac.il/Documents/%D7%94%D7%A9%D7%9B%D7%9C%D7%94/%D7%A1%D7%9E%D7%A1%D7%98%D7%A8%20%D7%94/WEB/Michael_Itzhaki/Part_B/View/ExpertPage.html");
}

function ToExperts(){
    window.location.href = ("file:///C:/Users/user/OneDrive%20-%20post.bgu.ac.il/Documents/%D7%94%D7%A9%D7%9B%D7%9C%D7%94/%D7%A1%D7%9E%D7%A1%D7%98%D7%A8%20%D7%94/WEB/Michael_Itzhaki/Part_B/View/Doctors.html");

}
function toDoc(){
    window.location.href = ("https://hmc.co.il/doctor/%D7%92%D7%99%D7%9C-%D7%A8%D7%A6%D7%91%D7%A1%D7%A7%D7%99/")
}
function addReview(){
    window.location.href = ("file:///C:/Users/user/OneDrive%20-%20post.bgu.ac.il/Documents/%D7%94%D7%A9%D7%9B%D7%9C%D7%94/%D7%A1%D7%9E%D7%A1%D7%98%D7%A8%20%D7%94/WEB/Michael_Itzhaki/Part_B/View/review.html")
}
function validateForm() {
    let x = document.forms["addReview"]["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
    let b = document.forms["addReview"]["doctorName"].value;
    if (b == "") {
      alert("Doctor Name must be filled out");
      return false;
    }
    /* here will be a func that  match the user input for doctor name with the data base
        if it wount match it will alert that unfortunately we still dont have the doctor in our systems
        that will validate the database entigrity*/
  }

const allStars = document.querySelectorAll('.star');
allStars.forEach( (star, i) =>{
    star.onclick = function(){
        let currentStarLevel = i+1;

        allStars.forEach((star, j) =>{
            if(currentStarLevel >= j+1){
                star.innerHTML = '&#9733';
            } else{
                star.innerHTML = '&#9734;';
            }

        })
        
    }
})