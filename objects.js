// ? objects

/* 
    A container for values in JavaScript Object Notation format (JSON)
    * exists as a string
    * denoted by { }
    * not indexable
    * has properties and methods
        * .property (ex .length)
        * .method() (ex. toUpperCase())
    * has .this keyword
*/

// objct literal creation

let bentley = {
  // propterty: value
  // key: value pairs
  species: "dog",
  color: "cow",
  spayedNeutered: true,
  breed: "old english bulldogee",
  weight: 78,
  favroiteActivity: ["farting", "fetching", "sleeping"],
};
//  returns data type of object and our object literal
console.log(typeof bentley, bentley);
// returns undefined becasue objects are Not Indexable
console.log(bentley[0]);

// ? Accessing properites and values

// done using dot notation
console.log(bentley.species);

// done using keys

console.log(bentley["weight"]);

//  ? Viewing object keys and values

console.log(Object.keys(bentley));
console.log(Object.values(bentley));
// they return arrays so can be used with array methods

bentley.favroiteActivity.forEach((activity) => {
  console.log(activity);
});

// ? Adding properties and values

let car = {
  make: "BMW",
  model: "M5",
  mileage: 27344,
};

car.chassis = "F10";
car["transmissions"] = "DCT";

// ? Modifying properties and values

car.mileage = 34100;
// 1. reassign property
car["make"] = car["carMake"];
// 2. assign new value to nwe property
car.carMake = "BMW";
//3. delete old property
delete car.make;

console.log(car);

/* 
	makeshift example of a database and income object 
	matching passwords between db and incoming object

*/

let incoming = {
  username: "mrpndev",
  password: "dblocal",
};

let db = [
  { username: "mrpndev", password: "dbLocal" },
  { username: "kardashianFan123", password: "passsword123" },
  { username: "watermalon3", password: "iLikeTuhtles123" },
];

db.forEach((value) => {
  if (value.username.includes(incoming.username)) {
    console.log("You got in");
  }
  if (
    value.username !== incoming.username &&
    value.password !== incoming.password
  ) {
    console.log("user not found");
    console.log("password is incorrect");
  }
});

let loginForLoop = () => {
  // 1. Find the user by looping over our db, and if found, store in a variable
  let foundUser;
  for (i of db) {
    i.username == incoming.username ? (foundUser = i) : null;
  }
  console.log(foundUser);

  // 2. is foundUser true or false?
  if (!foundUser) {
    console.log("User not found");
  } else {
    // 3. if userFound, compare passwords
    foundUser.password == incoming.password
      ? console.log("User logged in")
      : console.log("Incorrect password");
  }
};

// Solution using filter

let login = () => {
  let foundUser = db.filter((u) => u.username == incoming.username);
  console.log(foundUser);
  if (foundUser.length == 0) {
    console.log("User not found");
  } else {
    foundUser[0].password == incoming.password
      ? console.log("User logged in")
      : console.log("Incorrect password");
  }
};

login();

let netflix = {
  id: 9,
  likes: 932,
  name: "The Good Place",
  seasonInfo: {
    season1: {
      numberOfEpisodes: 5,
      episodeInfo: [
        { episode: 1, episodeName: "Pilot" },
        { episode: 2, episodeName: "Flying" },
        { episode: 3, episodeName: "Tahani Al-Jamil" },
        { episode: 4, episodeName: "Jason Mendoza" },
        { episode: 5, episodeName: "Category 55 Emergency" },
      ],
    },
    season2: {
      numberOfEpisodes: 6,
      episodeInfo: [
        { episode: 1, episodeName: "Everything is Great" },
        { episode: 2, episodeName: "Dance Dance Resolution" },
        { episode: 3, episodeName: "Team Cockroach" },
        { episode: 4, episodeName: "Existential Crisis" },
        { episode: 5, episodeName: "The Trolley Problem" },
      ],
    },
    season3: {
      numberOfEpisodes: 2,
      episodeInfo: [
        { episode: 1, episodeName: "Restart 5000" },
        { episode: 1, episodeName: "The inbetween place?" },
      ],
    },
  },
  isAvailable: true,
};

console.log(netflix.seasonInfo.season3.episodeInfo[0].episodeName);

netflix.seasonInfo.totalSeasons = Object.keys(netflix.seasonInfo).length;
console.log(netflix.seasonInfo);
1;
