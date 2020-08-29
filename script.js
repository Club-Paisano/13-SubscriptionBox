//jshint esversion: 6

/*
Author: Ti Tonito

This page has a subscription box that slides out on scroll.

*/





const subscriptionBox = document.querySelector("section");
console.log( );



function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const boxStatus = () => {
  //Slide positioning for the first third of the box position
  const slideInAt = (window.scrollY+window.innerHeight) - subscriptionBox.offsetHeight/3;

  //Slide positioning for the bottom of the box position
  const boxBottom = (subscriptionBox.offsetTop+subscriptionBox.offsetHeight);


  const isThirdShown = slideInAt > subscriptionBox.offsetTop;
  const notPast = window.scrollY < boxBottom;

  (isThirdShown && notPast) ? subscriptionBox.classList.add("active") : subscriptionBox.classList.remove("active");

};



const initPage = () => {
  //Add an event listener that checks for location of page in relation to the subscriptionbox
  window.addEventListener("scroll", debounce(boxStatus));


};

initPage();
