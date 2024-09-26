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

const FirstStepBtn = document.querySelector("#first-step-btn");
const SecondStepBtn = document.querySelector("#second-step-btn");
const ThirdStepBtn = document.querySelector("#third-step-btn");
const FourthStepBtn = document.querySelector("#fourth-step-btn");
const FifthStepBtn = document.querySelector("#fifth-step-btn");
const sixthStepBtn = document.querySelector("#sixth-step-btn");

console.log(FirstStepBtn);
FirstStepBtn.addEventListener("click", goToFirstStep);

function goToFirstStep() {
  video.currentTime = 13;
}

console.log(SecondStepBtn);
SecondStepBtn.addEventListener("click", goToSecondStep);

function goToSecondStep() {
  video.currentTime = 76.8;
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
