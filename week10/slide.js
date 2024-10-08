const slide = document.querySelectorAll(".slide");
console.log(slide);

const slidesContainer = document.querySelector(".slides-container");
console.log(slidesContainer);

const prevButton = document.querySelector("#prev-button");
console.log(prevButton);
prevButton.addEventListener("click", gotoPrevious);
function gotoPrevious() {}

const topButton = document.querySelector("#top-button");
console.log(topButton);
topButton.addEventListener("click", gotoTop);
function gotoTop() {
  window.location.href = "#top";
}
