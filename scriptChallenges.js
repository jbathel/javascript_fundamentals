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
