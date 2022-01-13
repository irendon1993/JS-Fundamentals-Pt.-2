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

// const friend1 = "Trey";
// const friend2 = "Kevin";
// const friend3 = "Jesus";

// const friends = ["Trey", "Kevin", "Jesus"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Isaac";
// const isaac = [firstName, "Rendon", 2037 - 1993, "student", friends];
// console.log(isaac);

// // Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

// const friends = ["Trey", "Kevin", "Jesus"];

// // Add eleements
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// // Remove Elements
// friends.pop(); //Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //First
// console.log(friends);

// console.log(friends.indexOf("Kevin"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Kevin"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes("23"));
// console.log(friends.includes(23));

// if (friends.includes("Kevin")) {
//   console.log("You have a friend named Kevin");
// }

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300,
 and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
// let bills = [125, 555, 44];

// const calcTip = function (billValue) {
//   if (billValue >= 50 && billValue <= 300) {
//     return billValue * 0.15;
//   } else {
//     return billValue * 0.2;
//   }
// };

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [
//   bills[0] + calcTip(bills[0]),
//   bills[1] + calcTip(bills[1]),
//   bills[2] + calcTip(bills[2]),
// ];
// console.log(total);

// const isaacArray = [
//   "Isaac",
//   "Rendon",
//   2037 - 1993,
//   "student",
//   ["trey", "kevin,", "jesus"],
// ];

const isaac = {
  firstName: "Isaac",
  lastName: "Rendon",
  age: 2037 - 1993,
  job: "student",
  friends: ["Trey", "Kevin,", "Jesus"],
};
console.log(isaac);

console.log(isaac.lastName);
console.log(isaac["lastName"]);

const nameKey = "Name";
console.log(isaac["first" + nameKey]);
console.log(isaac["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Isaac? Choose between firstName, lastName, age, job, or friends"
);

if (isaac[interestedIn]) {
  console.log(isaac[interestedIn]);
} else {
  console.log(
    "Wrong Request! Choose between firstName, lastName, age, job, or friends"
  );
}

isaac.location = "Florida";
isaac["twitter"] = "@bigdickguy";
console.log(isaac);

// Challange
// "Isaac has 3 friends and his best friend is called Trey"
console.log(
  `${isaac.firstName} has ${isaac.friends.length} friends and his best friend is ${isaac.friends[0]}`
);
