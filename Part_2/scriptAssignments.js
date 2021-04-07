'use strict';
//////////////////////////////////////////////
// LECTURE: Functions
//////////////////////////////////////////////

// 1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return description;
}
// 2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console
const describeUnitedStates = describeCountry('United States', 328.2, 'Washington DC');
const describeVietnam = describeCountry('Vietnam', 96.46, 'Hanoi');
const describeGermany = describeCountry('Germany', 83.02, 'Berlin');

console.log(describeUnitedStates, describeVietnam, describeGermany);

//////////////////////////////////////////////
// LECTURE: Function Declarations vs. Expressions
//////////////////////////////////////////////

// 1. The world population is 7900 million people Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
function percentageOfWorld1(population) {
  // 2. To calculate the percentage,divide the given 'population' value by 7900 and then multiply by 100
  const percent = (population / 7900) * 100;
  // console.log(percent);
  return percent;
}
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
const percentUnitedStates1 = percentageOfWorld1(328.2);
const percentVietnam1 = percentageOfWorld1(96.46);
const percentGermany1 = percentageOfWorld1(83.02);

console.log(percentUnitedStates1, percentVietnam1, percentGermany1);

// 4. Create a function expression which does the exact same thing,called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)

const percentageOfWorld2 = function (population) {
  const percent = (population / 7900) * 100;
  return percent;
};

const percentUnitedStates2 = percentageOfWorld2(328.2);
const percentVietnam2 = percentageOfWorld2(96.46);
const percentGermany2 = percentageOfWorld2(83.02);

console.log(percentUnitedStates2, percentVietnam2, percentGermany2);

//////////////////////////////////////////////
// LECTURE: Arrow Functions
//////////////////////////////////////////////

// 1. Recreate the last assignment,but this time create an arrow function called 'percentageOfWorld3'
const percentageOfWorld3 = (population) => {
  const percent = (population / 7900) * 100;
  return percent;
};

const percentUnitedStates3 = percentageOfWorld3(328.2);
const percentVietnam3 = percentageOfWorld3(96.46);
const percentGermany3 = percentageOfWorld3(83.02);

console.log(percentUnitedStates3, percentVietnam3, percentGermany3);

//////////////////////////////////////////////
// LECTURE: Functions Calling Other Functions
//////////////////////////////////////////////

// 1. Create a function called 'describePopulation'.Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
function describePopulation(country, population) {
  // 2. To calculate the percentage,'describePopulation' call the 'percentageOfWorld1' you created earlier
  const percent = percentageOfWorld1(population);

  const description1 = `${country} has ${population} million people, which is about ${percent} of the world.`;
  return description1;
}
// 3. Call 'describePopulation' with data for 3 countries of your choice
console.log(describePopulation('United States', 328.2));
console.log(describePopulation('Veitnam', 96.46));
console.log(describePopulation('Germany', 83.02));

//////////////////////////////////////////////
// LECTURE: Introduction to Arrays
//////////////////////////////////////////////

// 1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'
const populations = [328.2, 96.46, 83.02, 4.92];
// 2. Log to the console whether the array has 4 elements or not(true or false)
console.log(populations.length === 4);
// 3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values
const percentages = [percentageOfWorld1(328.2), percentageOfWorld1(96.46), percentageOfWorld1(83.02), percentageOfWorld1(4.92)];
console.log(percentages);

//////////////////////////////////////////////
// LECTURE: Basic Array Operations (Methods)
//////////////////////////////////////////////

// 1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
const neighbours = ['Netherlands', 'Belgium', 'Denmark', 'Switzerland', 'Austria', 'Czechia', 'Poland'];
console.log(neighbours);
// 2. At some point,a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array
neighbours.push('Utopia');
console.log(neighbours);
// 3. Unfortunately, after sometime, the new country is dissolved.So remove it from the end of the array
neighbours.pop('Utopia');
console.log(neighbours);
// 4. If the 'neighbours' array does not include the country‘Germany’, log to the console: 'Probably not a central European country :D'
if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
} else {
  console.log('Is your country Germany?');
}
// 5. Change the name of one of your neighbouring countries.To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

//////////////////////////////////////////////
// LECTURE: Introduction to Objects
//////////////////////////////////////////////

// 1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)
const myCountry = {
  country: 'United States',
  capital: 'Washington DC',
  language: 'English',
  population: 328.2,
  neighbors: ['Canada', 'Mexico'],
};

console.log(myCountry);

//////////////////////////////////////////////
// LECTURE: Dot vs. Bracket Notation
//////////////////////////////////////////////

// 1. Using the object from the previous assignment log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}.`);
// 2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.
// myCountry.population = myCountry.population + 2;
myCountry.population += 2;
console.log(myCountry.population);
// myCountry['population'] = myCountry['population'] - 2;
myCountry['population'] -= 2;
console.log(myCountry['population']);

//////////////////////////////////////////////
// LECTURE: Object Methods
//////////////////////////////////////////////

// 1. Add a method called 'describe' to the 'myCountry' object This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
const myCountry2 = {
  country: 'United States',
  capital: 'Washington DC',
  language: 'English',
  population: 328.2,
  neighbors: ['Canada', 'Mexico'],

  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighbouring countries and a capital called ${this.capital}.`);
  },
  // 3. Add a method called 'checkIsland' to the 'myCountry' object.This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
  checkIsIsland: function () {
    if (this.neighbors.lenght !== 0) {
      this.isIsland = 'false';
    } else {
      this.isIsland = 'true';
    }
  },
};
// 2. Call the 'describe' method
myCountry2.describe();
console.log(myCountry2.checkIsIsland());

//////////////////////////////////////////////
// LECTURE: Iteration: The for Loop
//////////////////////////////////////////////

// 1. There are elections in your country! In a small town,there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

//////////////////////////////////////////////
// LECTURE: Looping Arrays, Breaking and Continuing
//////////////////////////////////////////////

// 1. Let's bring back the 'populations' array from a previous assignment
const populationsLoops = [328.2, 96.46, 83.02, 4.92];
// 2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier
const percentages2 = [];

for (let i = 0; i <= populationsLoops.length - 1; i++) {
  percentages2.push(percentageOfWorld1(populationsLoops[i]));
}
// 3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is
console.log(percentages2);
console.log(percentages);

//////////////////////////////////////////////
// LECTURE: Looping Backwards and Loops in Loops
//////////////////////////////////////////////

// 1. Store this array of arrays into avariable called 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one,not the entire arrays. Log a string like 'Neighbour: Canada' for each country
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(listOfNeighbours[i][j]);
  }
}
// 3. You will need a loop inside a loop for this.This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉
