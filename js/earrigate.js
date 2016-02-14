$( ".form-signin" ).submit(function() {
    $('.logo').animate({
        bottom: '-500px'
    }, 1000)
    // $('.fadein').animate({
    // 	opacity: '0.1'
    // }, 2000)
	$(".fadein").fadeIn(2000);
    $('.water').delay(800).animate({
        height: '100%'
    }, 2000)
});
