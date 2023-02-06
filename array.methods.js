let superNested = [1, [2, [3, [4, [5, "some value", "jackpot!"]]]]];

console.log(superNested[1][1][1][1][2]);

// ? Array Methods

/*
 * Methods are fuctions that live inside of an object prototype
 * Denoted by the . at the end of an object we're working on
 * Ex: someVariable.toLowerCase()
 */

let educationTeam = [
  ["Paul Niemczyk", "Rob VanArsdall", "Eric Winebrenner"],
  ["Ben Villa", "Dave Landey", "Ben Ragland"],
  ["Lulu Browne", "Julie Assur"],
];

/* 
    .push()

    * adds an element to the end of an array
    * returns new length of an array
*/

console.log(educationTeam);
let pushReturn = educationTeam.push(["Benny Boas", "Kate Sweeney"]);
console.log("Value", educationTeam, "Return of .push()", pushReturn);

/* 
    .pop()

    * removes last array element & returns it
*/

let lastElement = educationTeam.pop();
console.log("Value", educationTeam, "Return of .pop()", lastElement);

/* 
    .unshift()

    * adds an element to the beginning of an array
    * returns the length of the new array
*/

let unshiftReturn = educationTeam.unshift("Michael Morris");
console.log("Value", educationTeam, "Return of .unshift()", unshiftReturn);

/* 
    .shift()

    * removes the first element from an array
    * returns the length of the new array
*/

let shiftReturn = educationTeam.shift();
console.log("Value", educationTeam, "Return of .shift()", shiftReturn);

// ? Advanced Array Method

// arrays are iterable

let states = [
  "Illinois",
  "Wisconsin",
  "Alabama",
  "New York",
  "Vermont",
  "Indiana",
  "Massachussets",
  "Ohio",
  "Virginia",
  "West Virginia",
  "Pennsylvania",
  "North Dakota",
  "South Dakota",
  "Oregon",
  "California",
  "Nevada",
  "Arizona",
  "New Mexico",
  "Florida",
  "Louisiana",
  "Texas",
  "New Hampshire",
  "Maine",
  "Rhode Island",
  "Alaska",
  "Connecticut",
  "Montana",
  "Nebraska",
  "Delaware",
  "Washington",
  "Iowa",
  "Kansas",
  "Oklahoma",
  "Michigan",
  "Minnesotta",
  "Kentucky",
  "Tennessee",
  "Idaho",
  "Utah",
  "Georgia",
  "Mississippi",
  "Missouri",
  "Colorado",
  "Delaware",
  "Hawaii",
  "Maryland",
  "North Carolina",
  "South Carolina",
  "New Jersey",
  "Wyoming",
];

for (state of states) {
  console.log(state);
}

/* 
	.forEach()

	fires a callback fx on each element of your array
	callback has three parameters
		value - the iterable 
		index - of the iterable 
		array - the entire array.  foreach was called upon
*/

states.forEach((state, index, array) => {
  console.log(`${state} ${index}`);
});
newArray = [];
states.forEach((state, index, array) => {
  console.log(state, state.startsWith("A"));
  if (state.startsWith("A")) {
    newArray.push(state);
  }
  console.log(newArray);
});

/* 

	.map()

	creates an array with elements resulting from the vallback fx 
*/

let statesLowerCase = states.map((state) => state.toLowerCase());

console.log(statesLowerCase);

/* 
	.filter()

	creates a new array based on a filter function
	only the filtered iteam can be addded to an array
	cannot have 
*/

let statesC = states.filter((state) => state.startsWith("C"));

console.log(statesC);

let grades = [56, 78, 96, 41, 7, 22, 15, 10, 89];
// uses new array for the new grades
let pumpSomeGrades = grades.map((grade) => (grade < 90 ? grade + 15 : grade));
console.log(pumpSomeGrades);

// Rewrites the values of original array to new grades
grades.forEach((_, index, originalArr) => {
  //          _ - placeholder if we don't use the param
  // originalArr[index] == grade
  //             grade  == iterator representation of grade
  //             think of counting on your fingers ^^^
  console.log("This is the", originalArr[index]);
  if (originalArr[index] > 90) {
    null;
  } else {
    originalArr[index] = originalArr[index] + 15;
  }
});
console.log(grades);
