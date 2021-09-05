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