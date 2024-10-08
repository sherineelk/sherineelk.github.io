const myCat = document.querySelector("#my-cat");
console.log(myCat);
const moreInfo = document.querySelector("#more-info");
myCat.addEventListener("mouseover", showMoreInfo);
myCat.addEventListener("mouseout", hideMoreInfo);

function showMoreInfo() {
  moreInfo.classList.add("show");
}

function hideMoreInfo() {
  moreInfo.classList.remove("show");
}

const profileButton = document.querySelector("#profile-button");
console.log(profileButton);

const profileContent = document.querySelector("#profile-content");
console.log(profileContent);

profileButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  profileContent.classList.toggle("show");
}

const BottomButton = document.querySelector("#bottom-button");
console.log(BottomButton);
BottomButton.addEventListener("click", gotoBottom);
function gotoBottom() {
  window.location.href = "#bottom";
}

const topButton = document.querySelector("#top-button");
console.log(topButton);
topButton.addEventListener("click", gotoTop);
function gotoTop() {
  window.location.href = "#top";
}

const scrollContent = document.querySelector("#scroll-content");

const hscrollButton = document.querySelector("#hscroll-button");
console.log(hscrollButton);

hscrollButton.addEventListener("click", getHScroll);

const hscroll = document.querySelector("#hscroll");

function getHScroll() {
  hscroll.textContent = scrollContent.scrollLeft;
}

const vscrollButton = document.querySelector("#vscroll-button");
console.log(vscrollButton);

vscrollButton.addEventListener("click", getVScroll);

const vscroll = document.querySelector("#vscroll");

function getVScroll() {
  vscroll.textContent = scrollContent.scrollTop;
}

const hscroll150Button = document.querySelector("#hscroll150-button");
console.log(hscroll150Button);

hscroll150Button.addEventListener("click", gotoHScroll150);

function gotoHScroll150() {
  scrollContent.scrollTo({ left: 150, behavior: "smooth" });
}

const vscroll300Button = document.querySelector("#vscroll300-button");
console.log(vscroll300Button);

vscroll300Button.addEventListener("click", gotoVScroll300);

function gotoVScroll300() {
  scrollContent.scrollTo({ top: 300, behavior: "smooth" });
}

const wvscrollButton = document.querySelector("#wvscroll-button");
console.log(wvscrollButton);

wvscrollButton.addEventListener("click", getWVScroll);

const wvscroll = document.querySelector("#wvscroll");

function getWVScroll() {
  wvscroll.textContent = window.scrollY;
}

const purpleBox = document.querySelector("#purple-box");
console.log(purpleBox);
const dropBox = document.querySelector("#drop-box");
console.log(dropBox);

let DraggedElement = null;
purpleBox.addEventListener("dragstart", startDrag);
function startDrag() {
  console.log("dragging started");
  draggedElement = purpleBox;
}

purpleBox.addEventListener("drop", handleDrop);
function handleDrop() {
  if (draggedElement) {
    let colour = window;
    getComputedStyle(draggedElement);
    getComputedStyle("background-color");
    console.log(color);
    dropBox.style.backgroundColor = color;
    dropBox.textContent = "content is dropped";
  }
}
