'use strict';
//////////////////////////////////////////////
// LECTURE: Values and Variables
//////////////////////////////////////////////

// 1. Declare variables called'country','continent'and'population'and assign their values according to your own country (population in millions)

// const country = 'United States';
// const continent = 'Northern America';
// const population = 328.2;

// 2. Log their values to the console

// console.log(country, continent, population);

//////////////////////////////////////////////
// LECTURE: Data Types
//////////////////////////////////////////////

// 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet

const isIsland = false;
let language;

// 2. Log the types of'isIsland','population','country'and'language' to the console

//////////////////////////////////////////////
// LECTURE: let, const and var
//////////////////////////////////////////////

// 1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
language = 'English';

// 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

const country = 'United States';
const continent = 'Northern America';
let population = 328.2;

// 3. Try to change one of the changed variables now, and observe what happens
// population = 400.2;
console.log(country, continent, population);
console.log(typeof isIsland, typeof population, typeof country, typeof language);

//////////////////////////////////////////////
// LECTURE: Basic Operators
//////////////////////////////////////////////

// 1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
const half = population / 2;
console.log(half);

// 2. Increase the population of your country by 1 and log the result to the console
const minus = population - 1;
console.log(minus);

// 3. Finland has a population of 6 million. Does your country have more people than Finland?
console.log(6 > population);

// 4. The average population of a country is 33 million people. Does your country have less people than the average country?
console.log(33 > population);

// 5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language + '.';
console.log(description1);

//////////////////////////////////////////////
// LECTURE: Strings and Template Literals
//////////////////////////////////////////////

// 1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax
const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description2);

//////////////////////////////////////////////
// LECTURE: Taking Decisions: if / else Statements
//////////////////////////////////////////////

// 1. If your country's population is greater than 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

// 2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original

//////////////////////////////////////////////
// LECTURE: Type Conversion and Coercion
//////////////////////////////////////////////

// 1. Predict the result of these 5 operations without executing them:
'9' - '5'; // 9
// Type converting to number then doing math === 4
'19' - '13' + '17'; // 1917
// Type converting to number to perform 19 - 13 === 6 then concatenating 17 === 617
'19' - '13' + 17; // 1917
// Type converting then performing math, 17 is a number therefore added (19 - 13 = 6 + 17 === 23)
'123' < 57; // false
// Is not type converting therefore a string is not comparable to number
5 + 6 + '4' + 9 - 4 - 2; // 1143
// Type conversion to perform math operations, then concatenating '4', then performing math operations

// 2. Execute the operations to check if you were right
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//////////////////////////////////////////////
// LECTURE: Equality Operators: == vs. ===
//////////////////////////////////////////////

// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country have?');
let numNeighbours = Number(prompt('How many neighbor countries does your country have?'));
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!'(use loose equality == for now)
if (numNeighbours === 1) {
  console.log('Only 1 border!');
}
// 3. Use an else-if block to log 'More than 1 border.' in case 'numNeighbours' is greater than 1
else if (numNeighbours > 1) {
  console.log('More than 1 border.');
}
// 4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
else {
  console.log('No borders.');
}
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this situation
