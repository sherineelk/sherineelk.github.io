function checkWeather() {
  let temp = document.querySelector("#temp");
  let body = document.querySelector("body");
  console.log(temp.value);
  if (temp.value >= 40) {
    console.log("oh god");
    body.style.backgroundColor = "crimson";
  }
}
