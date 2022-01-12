"use strict";

// let hasDriversLiscenese = false;
// const passtest = true;

// if (passtest) hasDriversLiscenese = true;
// if (hasDriversLiscenese) console.log("I can drive");
//
//
//
//
//
//
// //
// //
// function logger() {
//   console.log("My name is Isaac");
// }

// // Calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProccessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProccessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProccessor(2, 4);
// console.log(appleOrangeJuice);
//
//
//
//
//
//
// Function Declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1993);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1993);

console.log(age1, age2);
