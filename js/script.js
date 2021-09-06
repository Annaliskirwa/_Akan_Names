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