function testMe() {
  console.log("the test works")
}

var items = document.querySelectorAll(".card");
console.log(items)

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    }
    // commented out below so animations fire only on first view
    // else if(items[i].classList.contains("in-view")) {
    //     items[i].classList.remove("in-view");
    // }
  }
}


// fade in out
//
//
//
////
//$(window).on("load",function() {
//    function fade() {
//        var animation_height = $(window).innerHeight() * 0.25;
//        var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

//        $('.fade').each(function() {

//            var objectTop = $(this).offset().top;
//            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

//            if ( objectTop < windowBottom ) {
//                if ( objectTop < windowBottom - animation_height ) {
//                    $(this).html( 'fully visible' );
//                    $(this).css( {
//                        transition: 'opacity 0.1s linear',
//                        opacity: 1
//                    } );

//                } else {
//                    $(this).html( 'fading in/out' );
//                    $(this).css( {
//                        transition: 'opacity 0.25s linear',
//                        opacity: (windowBottom - objectTop) * ratio
//                    } );
//                }
//            } else {
//                $(this).html( 'not visible' );
//                $(this).css( 'opacity', 0 );
//            }
//        });
//    }
//    $('.fade').css( 'opacity', 0 );
//    fade();
//    $(window).scroll(function() {fade();});

// $(document).ready(function() {

// /* Every time the window is scrolled ... */
// $(window).scroll( function(){

//     /* Check the location of each desired element */
//     $('.hideme').each( function(i){

//         var bottom_of_object = $(this).position().top + $(this).outerHeight();
//         var bottom_of_window = $(window).scrollTop() + $(window).height();

//         /* If the object is completely visible in the window, fade it it */
//         if( bottom_of_window > bottom_of_object ){

//             $(this).animate({'opacity':'1'},500);

//         }
//     });
// });
// });


window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
