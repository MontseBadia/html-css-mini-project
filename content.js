var burger = document.getElementById("burger");



var activeBurger = function () {
  var ullist = document.getElementById("list-bm");
  var navText = document.getElementById("nav-links");
  ullist.classList.toggle("shrink");
  navText.classList.toggle("hidden");
  console.log("yes");
  deleteMiddle();
  rotateLines();
}

burger.addEventListener("click", activeBurger);


var middle = document.getElementById("middle-line");

var deleteMiddle = function () {
  middle.classList.toggle("menu-hidden");
};


var rotateLines = function () {
  var top = document.getElementById("top");
  var bottom = document.getElementById("bottom"); 
  top.classList.toggle("rotate-top");
  bottom.classList.toggle("rotate-bottom");
}