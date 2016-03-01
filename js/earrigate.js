/* $( ".form-signin" ).submit(function() {
    $("#img-drop").animate({
        // bottom: '-500px'
        top: auto,
        bottom: '0px'
    }, 1000)
	$(".fadein").fadeIn(2000);
    $('.water').delay(800).animate({
        height: '100%'
    }, 2000)
});
*/

$( "#click-subscribe").click(function() {
    $("#img-drop").animate({
        // bottom: '-500px'
        top: '1000px'
    }, 2000)
    $(".fadein").delay(1000).fadeIn(2000);
    $('.water').delay(2000).animate({
        height: '100%'
    }, 2000)
});

$( ".water").click(function() {
    $("#img-drop").animate({
        // bottom: '-500px'
        top: '33%'
    },10)
    $(".fadein").fadeOut(2000);
    $('.water').delay(500).animate({
        height: '0%'
    }, 2000)
});