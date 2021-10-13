//Arrays, Functions and Objects
//Functions - declare, invoke

var friends2 = ['Bob', 'John', 'Susy'];
var friends3 = ['Anna', 'Attila', 'Koyel'];

function helloFriends(name) {
  name.forEach((element) => console.log('Hello There ' + element));
}

helloFriends(friends2);
helloFriends(friends3);

// return
// default undefined, shortcuts, ignores after
// 1 inch 2.54cm
const wallHeight = 80;

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);

function calculate(inches) {
  const valueInCentemeters = inches * 2.54;
  return valueInCentemeters;
  //everything after return would be ignored
}

//expressons - another way define a function
//create a variable, assigne to FUNCTION (not value)
//diff - hoisting, use - arrow function, libraries

//function declaration
function addValues(num1, num2) {
  return num1 + num2;
}

//Another way of function declaration. Funtion expresion
const add = function addValues(num1, num2) {
  return num1 + num2;
};
//How to call it?
const thirdValue = add(5, 6);

//Arrow functions, can be only used as function expresions, mean, be storage at variable
const multiply = (num1, num2) => num1 * num2;

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

const values = [firstValue, secondValue, add(5, 6)];
console.log(values);

//Objects - key/value pair methods
//dot notation

var person = {
  name: 'Kamil',
  lastName: 'Grabiec',
  age: 30,
  highEducation: true,
  married: false,
  siblings: ['Aga', 'Daniel'],
  greeting: function () {
    console.log(`Hello, my name is ${person.name}`);
  },
};

person.greeting();
console.log(person.siblings);
