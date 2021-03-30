'use strict';

//////////////////////////////////////////////
// Coding Challenge #1
//////////////////////////////////////////////
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
const heightJohn = 1.95;
const massJohn = 92;

const heightMark = 1.69;
const massMark = 78;

// 2. Calculate both their BMIs using the formula (you can even implement both versions)
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

//////////////////////////////////////////////
// Coding Challenge #2
//////////////////////////////////////////////

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Hint: Use an if/else statement
*/

// Your tasks:
// 1. Print a nice output to the console, saying who has the higherBMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
if (markHigherBMI) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`John's BMI is higher than Mark's!`);
}
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
if (markHigherBMI) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

//////////////////////////////////////////////
// Coding Challenge #3
//////////////////////////////////////////////

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 80) / 3;

console.log(dolphinsAverage, koalasAverage);

// 2. Compare the team's average scores to determine the winner of the competition,and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
if (dolphinsAverage > koalasAverage) {
  console.log('Dolphins win!');
} else if (dolphinsAverage < koalasAverage) {
  console.log('Koalas win!');
} else if (dolphinsAverage === koalasAverage) {
  console.log('Both teams win.');
} else {
  console.log('No one wins.');
}
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and at the same time a score of at least 100 points.
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log('Dolphins win!');
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
  console.log('Koalas win!');
} else if (dolphinsAverage === koalasAverage) {
  console.log('Both teams win.');
} else {
  console.log('It is a draw.');
}
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log('Dolphins win!');
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
  console.log('Koalas win!');
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100) {
  console.log('It is a draw.');
} else {
  console.log('No one wins.');
}
