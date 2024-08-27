// console.log("welp");
// //huh
// let count = 10;
// console.log(count);
// //const name = prompt("What is your name");
// const myName = "Sarah";
// const myCity = "melbourne";
// console.log(myName, "lives in", myCity);

// {
//   let b = 30;
//   console.log(b);
// }

// let isItRaining = true;
// console.log(isItRaining);
// if (isItRaining === true) {
//   console.log("please bring umbrella");
// } else {
//   console.log("enjoy sunny skies");
// }

// let isitOARTClass = true;
// console.log(isitOARTClass);

// const studentRecord = {
//   name: "him",
//   id: 1234,
//   amIDesignStudent: false,
//   amIScienceStudent: true,
// };

// let myGrade = 60;
// if (myGrade >= 80) {
//   console.log("you got HD");
// } else if (myGrade < 90 && myGrade >= 70) {
//   console.log("you got D");
// } else if (myGrade < 70 && myGrade >= 50) {
//   console.log("you got C");
// } else if (myGrade < 90 && myGrade >= 30) {
//   console.log("you missed HD");
// }

// // console.log(studentRecord.name);
// // console.log(studentRecord.name, "is a", studentRecord.id);

// let studentNames = ["rob", "Alice", "frank"];
// console.log(studentNames[1]);

// let numArray = [2, 5, 72, 68];
// console.log(numArray);

let names = ["sarah", "rob", "franklin", "peter"];
console.log(names.length);
for (let i = 0; i < names.length; i++) {
  console.log("Hello", names[i]);
}

let shoppingCart = [
  { name: "shirt", price: 20 },
  { name: "shirt", price: 20 },
  { name: "shirt", price: 20 },
  { name: "shirt", price: 20 },
  { name: "shirt", price: 20 },
];

let total =
  shoppingCart[0].price +
  shoppingCart[1].price +
  shoppingCart[2].price +
  shoppingCart[3].price +
  shoppingCart[4].price;

console.log("shopping total", total);

let sum = 0;
for (let i = 0; i < 5; i++) {
  sum = sum + shoppingCart[i].price;
  console.log("intermediate sum", sum);
}
