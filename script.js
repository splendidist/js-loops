//for loops

for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

//Output:
//Iteration 0
//script.js:4 Iteration 1
//script.js:4 Iteration 2
//script.js:4 Iteration 3
//script.js:4 Iteration 4

//while loops

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++; //without this, the while loop would go on forever
}

//Output: 1,2,3,4,5

let keepLooping = true;
let i = 0;

while (keepLooping === true) {
  console.log("Iteration", i);
  keepLooping = Math.random() < 0.5; //set keepLooping to false with 50% chance: Math.random() returns a random value between 0 and 1
  console.log(keepLooping);
  i++;
}

//Looping over arrays

const faveFoods = ["pasta", "pizza", "pancakes"];
//let i = 0;

for (let i = 0; i < faveFoods.length; i++) {
  console.log(faveFoods[i]);
}

//Alternative syntax for loops for arrays

//for of loop

for (let food of faveFoods) {
  console.log(food);
}

const faveNumbers = [7, 13, 100];

for (let number of faveNumbers) {
  console.log(number);
}

//forEach loops

faveFoods.forEach(function (food) {
  console.log(food);
});

faveFoods.forEach(function (food, index) {
  console.log(index, food);
});

//Output:
//0 'pasta'
//1 'pizza'
//2 'pancakes'

//Loop over arrays

const faveAnimals = ["cat", "sheep", "bunny", "dolphin", "pigeon"];
//let i = 0;

for (let i = 0; i < faveAnimals.length; i++) {
  console.log(faveAnimals[i]);
}

const faveColours = ["pink", "purple", "blue"];
//let i = 0;

for (let i = 0; i < faveColours.length; i++) {
  console.log(faveColours[i]);
}

//const faveNumbers = [7, 13, 100];
//let i = 0;

for (let i = 0; i < faveNumbers.length; i++) {
  console.log(faveNumbers[i]);
}
