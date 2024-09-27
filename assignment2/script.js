const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src =
      "https://img.icons8.com/?size=100&id=61012&format=png&color=05322f";
  } else {
    video.pause();
    playPauseImg.src =
      "https://img.icons8.com/?size=100&id=59862&format=png&color=05322f";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

const firstStepBtn = document.querySelector("#first-step-btn");
const secondStepBtn = document.querySelector("#second-step-btn");
const thirdStepBtn = document.querySelector("#third-step-btn");
const fourthStepBtn = document.querySelector("#fourth-step-btn");
const fifthStepBtn = document.querySelector("#fifth-step-btn");
const sixthStepBtn = document.querySelector("#sixth-step-btn");

console.log(firstStepBtn);
firstStepBtn.addEventListener("click", goToFirstStep);

function goToFirstStep() {
  video.currentTime = 13;
}

console.log(secondStepBtn);
secondStepBtn.addEventListener("click", goToSecondStep);

function goToSecondStep() {
  video.currentTime = 29;
}

console.log(thirdStepBtn);
thirdStepBtn.addEventListener("click", goToThirdStep);

function goToThirdStep() {
  video.currentTime = 94;
}

console.log(fourthStepBtn);
fourthStepBtn.addEventListener("click", goToFourthstep);

function goToFourthstep() {
  video.currentTime = 127;
}

console.log(fifthStepBtn);
fifthStepBtn.addEventListener("click", goToFifthStep);

function goToFifthStep() {
  video.currentTime = 150;
}

console.log(sixthStepBtn);
sixthStepBtn.addEventListener("click", goToSixthStep);

function goToSixthStep() {
  video.currentTime = 230;
}

const forward5 = document.querySelector("#forward-5");
console.log(forward5);
forward5.addEventListener("click", goForward5);

function goForward5() {
  video.currentTime = video.currentTime + 10;
}

const back5 = document.querySelector("#back-5");
console.log(back5);
back5.addEventListener("click", goBack5);

function goBack5() {
  video.currentTime = video.currentTime - 10;
}

video.addEventListener("dblclick", toggleFullScreen);
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
const fullscreen = document.querySelector("#fullscreen");
console.log(fullscreen);
fullscreen.addEventListener("click", toggleFullScreen);

// i decided to give user two options to enter fullscreen either by double clicking, which is a common action across different websites, or to click on the full screen button//
