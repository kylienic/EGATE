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

function animate(opts) {
  
  var start = new Date   

  var id = setInterval(function() {
    var timePassed = new Date - start
    var progress = timePassed / opts.duration

    if (progress > 1) progress = 1
    
    var delta = opts.delta(progress)
    opts.step(delta)
    
    if (progress == 1) {
      clearInterval(id)
    }
  }, opts.delay || 10)
  
}

function move(element, delta, duration) {
  var to = 1000
  
  animate({
    delay: 10,
    duration: duration || 1000, // 1 sec by default
    delta: function quad(progress) {
  return Math.pow(progress, 5)
}
,
    step: function(delta) {
      element.style.top = to*delta+32 + "px"    
    }
  })

    $('.water').delay(1000).animate({
        height: '100%'
     }, 2000)  
  
};



// $( "#click-subscribe").click(function() {
//     $("#img-drop").animate({
//         // bottom: '-500px'
//         top: '1000px'
//     }, 2000)
//     // $(".fadein").delay(1000).fadeIn(2000);
//     $('.water').delay(2000).animate({
//         height: '100%'
//     }, 2000)
// });
// if(document.getElementById('water').click()){
//     console.log('water should fade');
//     fadeback();
//  }

function fadeback() {
     $("#img-drop").animate({
         // bottom: '-500px'
         top: '33%'
     },10)
//     // $(".fadein").fadeOut(2000);
     $('.water').delay(500).animate({
         height: '32px'
     }, 2000, function(){
         location.reload();
     })
 };

$('.water').click(function(){    
    var id = event.target.id;
    console.log('id = ' + id); 
});


$(document.getElementById('water')).click(function(event) { 
    if(!$(event.target).closest('#logo-line').length &&
       !$(event.target).is('#logo-line')) {
        fadeback();
    }        
});



 $( "#water").click(function() {
     var logoclicked = false;
     $("#logo-line").click(function(){
        logoclicked = true;
        console.log('logo clicked.');
     });
     if(logoclicked == false){
        console.log('water should fade');
        //fadeback();
        }
     });
     /* if(document.getElementById('logo-line').click()){
        console.log('water should fade');
        fadeback();
 }
     $("#img-drop").animate({
         // bottom: '-500px'
         top: '33%'
     },10)
     // $(".fadein").fadeOut(2000);
     $('.water').delay(500).animate({
         height: '0%'
     }, 2000, function(){
         location.reload();
     })*/
 //});