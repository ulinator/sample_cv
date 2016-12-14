$( ".toggler" ).click(function() {
  $(this).children("aside").slideToggle( "fast", function() {
    $(this).parent().children(".toggle-arrow").toggleClass("reversed");
  });
});

// $(document).on('click', 'a.nav-link', function(event){
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
// });

$(document).ready( function() {
	$('.contact-info').delay(1000).fadeIn();
});

$(document).ready( function() {
    $('.subMenu').smint();
});