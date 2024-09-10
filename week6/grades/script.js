function checkGrade() {
  const a1 = document.querySelector("#answer1");
  console.log(a1.value);
  const a2 = document.querySelector("#answer2");
  console.log(a2.value);
  // let total = parseFloat(a1.value) + parseFloat(a2.value;)
  let a1Value = parseFloat(a1.value);
  let a2Value = parseFloat(a2.value);
  let sum = calculateTotal(a1Value, a2Value);
  console.log("sum is", sum);
  sendReport(sum);
}

function calculateTotal(a, b) {
  let total = a + b;
  return total;
}

function sendReport(score) {
  const report = document.querySelector("#report");
  console.log(report);
  if (score > 30) {
    console.log("you got HD");
    report.textContent = "you got HD";
  } else if (score > 20 && score <= 30) {
    console.log("you got a D");
    report.textContent = "you got D";
  }
}

// const para = document.querySelector("p");
// console.log(para);

// const allPara = document.querySelectorAll("p");
// console.log(allPara);

const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.textContent);
h1.classList.add("red-style");

// const question2 = document.querySelector("#question2");
// console.log(question2.textContent);
// question2.textContent = "what is as2 score?";

// const abcd = document.querySelector(".abcd");
// console.log(abcd);

// const allabcd = document.querySelectorAll(".abcd");
// console.log(allabcd);

// const a1= document.querySelector("#answer1");
// console.log (a1);

const myCat = document.querySelector("#my-cat");
console.log(myCat);
myCat.classList.add("round");

function toggleMe() {
  myCat.classList.toggle("round");
}

const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);
let personality = "smallest";
header.innerHTML += `<p class="blue-style"> is the ${personality}! </p>
<p class= "red-style"> any questions? </p>`;
