function ExpertsPage() {
    window.location.href = ("http://localhost:3000/ExpertPage.html");
}

function ToExperts(){
    window.location.href = ("http://localhost:3000/Doctors.html");

}
function toDoc(){
    window.location.href = ("https://hmc.co.il/doctor/%D7%92%D7%99%D7%9C-%D7%A8%D7%A6%D7%91%D7%A1%D7%A7%D7%99/")
}
function addReview(){
    window.location.href = ("http://localhost:3000/review.html")
}

function tohome(){
    window.location.href = ("http://localhost:3000/HomePage.html")
}
function active(){
const activepage = window.location.pathname;
const navbtns = document.querySelectorAll("btns").forEach( btn =>{
    if(btn.innerHTML == activepage){
        btn.classList.add('active');
     }
    });
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
        document.querySelector("#rating").value = currentStarLevel;
        console.log(document.querySelector("#rating").value);
    }
})

document.querySelector('.geoLocation').addEventListener('click', function() {
    console.log("sdsd");
    window.location.pathname = '/nearest';
  });
  
  document.querySelector('.reviews').addEventListener('click', function() {
    window.location.pathname = '/highest-rated';
  });
  




window.addEventListener("load", function() {
    var currentPage = window.location.pathname.split("/").pop();
    var navItems = document.querySelectorAll(".nav-item");
    for (var i = 0; i < navItems.length; i++) {
      var id = navItems[i].getAttribute("id");
      if (id + ".html" === currentPage) {
        navItems[i].classList.add("active");
      }
    }
  });
  