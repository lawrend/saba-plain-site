function testMe() {
  const spSound=1130;
  const hertz = [110, 220, 440, 880, 1760, 3520, 7040];
  for(let i in hertz){
    console.log(spSound/hertz[i])
  }
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

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
