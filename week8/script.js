const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseBtn = document.querySelector("#play-pause-btn");
console.log(playPauseBtn);

playPauseBtn.addEventListener("click", togglePlay);

const playPauseImg = document.querySelector("#play-pause-img");

function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

const muteUnmutebtn = document.querySelector("#mute-unmute-btn");
console.log(muteUnmutebtn);

// playPauseBtn.addEventListener("click", togglemute);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");

// function togglemute() {
//   if (myVideo.muted) {
//     myVideo.muted = false;
//     muteUnmuteImg.style.backgroundColor = blue;
//   } else {
//     myVideo.muted;
//     myVideo.muted = true;
//     muteUnmuteImg.style.backgroundColor = red;
//   }
// }

myVideo.addEventListener("timeupdate", ShowProgress);

const progressBar = document.querySelector("#progress-bar-fill");
const VideoTime = document.querySelector("#video-time");

function ShowProgress() {
  const currentTime = myVideo.currentTime;

  const textContent = myVideo.currentTime;
  console.log("current time", currentTime.toFixed(2));
  const progress = (currentTime / myVideo.duration) * 100;
  console.log("current time", currentTime.toFixed(2));
  console.log("progress", progress.toFixed(2));
  progressBar.style.width = progress + "%";
}

const step1Btn = document.querySelector("#step-1-btn");
console.log(step1Btn);
step1Btn.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 19.32;
}

const likes = document.querySelector("#likes");
console.log(likes);

let likeCount = 0;

const likesBtn = document.querySelector("#like-btn");
likesBtn.addEventListener("click", toggleFullScreen);

function addLikes() {
  likeCount++;
  likes.textContent = likeCount;
}

myVideo.addEventListener("dblclick", toggleFullScreen);
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

const videos = [
  {
    name: "zenscape",
    src: "zenscape.mp4",
  },
  {
    name: "stardust",
    src: "stardust.mp4",
  },
];

const firstVideoBtn = document.querySelector("#first-video-btn");
console.log(firstVideoBtn);

const secondVideoBtn = document.querySelector("#second-video-btn");
console.log(secondVideoBtn);

firstVideoBtn.addEventListener("click", function () {
  chooseVideo(0);
});

secondVideoBtn.addEventListener("click", function () {
  chooseVideo(1);
});

const videoName = document.querySelector("#video-name");

function chooseVideo(no) {
  myVideo.src = videos[no].src;
  videoName.textContent = videos[no].name;
  console.log(myVideo.src);
  myVideo.load();
  myVideo.play();
}
