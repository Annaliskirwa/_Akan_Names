/*Add some jquery anim for page nav */
$(document).ready(function(){
    $(".nav-link").on("click", function(e){
        e.preventDefault();
        var hash = this.hash;
        $("html, body").animate({scrollTop:$(hash).offset().top}, 1000, function(){
            window.location.hash = hash
        })
    })
});
/*Here is the calculator javascript  */
function getAkanName(){
    let yearOfBirth = Number(document.getElementById("year-input").value);
    let monthOfBirth = Number(document.getElementById("month-input").value);
    let dayOfBirth =  Number(document.getElementById("day-input").value);
    let genders = getElementsByName("gender")
}

function getGender(){
    for (let gender of genders){
        if (gender.checked){
            return gender.value;
        }
    }
}

let myGenderValue = getGender();

function monthValidator(){
    if (monthOfBirth < 1 || monthOfBirth > 12){
        return false;}
        else{
            return true;
        }
}

function dayValidator(){
    if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0){
        if (dayOfBirth > 28 || dayOfBirth < 1){
            return false;
        } else if (monthOfBirth == 2 && dayOfBirth > 29){
            return false;
        }else if (monthOfBirth == 2 && dayOfBirth < 1){
            return false;
        }else{
            return true;
        }
    } else if (dayOfBirth < 1 || dayOfBirth > 31){
        return false;
    }else{
        return true;
    }
}

let monthValid = monthValidator();
let dayValid = dayValidator();

let daysOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

let daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  
