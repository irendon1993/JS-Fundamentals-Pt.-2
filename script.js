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
// // Function Declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1993);
// console.log(age1);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1993);
//
//
// Arrow function

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1993);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} retires is ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1993, "Isaac"));
// console.log(yearsUntilRetirement(1977, "Bill"));
//
//
// //
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProccessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProccessor(2, 3));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// let dolphinScore1 = 44;
// let dolphinScore2 = 23;
// let dolphinScore3 = 71;

// let koalaScore1 = 65;
// let koalaScore2 = 54;
// let koalaScore3 = 49;

// let dolphinScore1 = 85;
// let dolphinScore2 = 54;
// let dolphinScore3 = 41;

// let koalaScore1 = 23;
// let koalaScore2 = 34;
// let koalaScore3 = 27;

// const calcAverage = (score1, score2, score3) => {
//   let total = score1 + score2 + score3;
//   let average = total / 3;
//   return average;
// };

// Simplify algorithm
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let koalaScore = calcAverage(85, 54, 41);
// console.log(koalaScore);

// let dolphineScore = calcAverage(23, 34, 27);
// console.log(dolphineScore);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (koalaScore >= dolphineScore * 2) {
//     console.log("Koalas Win!");
//   } else {
//     if (dolphineScore >= koalaScore * 2) {
//       console.log("Dolphins win");
//     } else console.log("No one wins");
//   }
// };

// checkWinner(dolphineScore, koalaScore);

// checkWinner();

const friend1 = "Trey";
const friend2 = "Kevin";
const friend3 = "Jesus";

const friends = ["Trey", "Kevin", "Jesus"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
