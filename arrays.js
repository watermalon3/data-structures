// ? Arrys

/* 
	? sttu od s lidy-likr objrct 
	? Prototype has methods to perform traversal and mutation operations 
		 denoted by []
		 hold multiuple data types 
		 conent can be accessed by tgheir index 
*/

let arr = [];

console.log(arr); // creates empty arry literal
console.log(Boolean(arr)); // ! empty arrays return true

// ? ho would you check that an arry is empty????

// !ary ? console.log("Empty") : console.log("Has contents"); // ! wrong

// ! check arry length against 0 if true then empty if false it has things in it

let carMake = ["BMW", "porsche", "Maserati", "Pagani"];

console.log(carMake); // shows everything
console.log(carMake[1]); // displays value at an index
console.log(carMake[7]); // it resturns undefined, not a reference error

// ? Nesting, Assignment, &resasignment

// assign
carMake[4] = "ferrari";
console.log(carMake);
carMake[carMake.length] = "Aston Martin";
console.log(carMake);

// assign to a diffrent varaible

let bmw = carMake[0];
console.log(bmw);

// reassigning values

carMake[2] = "Yugo";
console.log(carMake);

// Nesting
carMake[carMake.length] = ["Toyota", "Honda", "kia"];
console.log(carMake);

// ?  hwo to access a nested array
console.log(carMake[6]);
// ? how do i access honda then?
console.log(carMake[6][1]);

// Arrays can have many different data types

let manyDataTypes = [
  "string",
  [1, 5, 6, true],
  false,
  undefined,
  null,
  NaN,
  "some other string",
];
console.log(manyDataTypes);

// data type
console.log(typeof manyDataTypes); // returns object due to JS' OOP nature
// checking if data type is  an array
console.log(manyDataTypes instanceof Array);

let janCohort = ["Tyler", "Alex", "Ian", "Jose", "Micheal", "Rishi"];
janCohort[janCohort.length] = ["Pual", "Dave", "Matt Nolan"];
console.log(janCohort);
janCohort[5] = "Jennifer";
janCohort[6][0] = "Pablo";
console.log(janCohort);

janCohort.splice([6][2]);

console.log(janCohort);
