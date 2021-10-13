//Data Types - 7 total
//Primirive - String, Number, Boolean, Null, Undefined, symbol
//Object - Arrays, Functions, Objects

//typeof - operator (typeof variable) (typeof value)

//String
const text = 'some text';
//Number
const number = 45;
//Boolean
var value1 = true;
var value2 = false;
//Null
const result = null;
//Undefined
var name3;
//Symbol(ES6)

//typeof variable
console.log(typeof text);
console.log(typeof null); //this returns 'object' which is bug in JavaScript
console.log(typeof name3);

//typeof value
console.log(typeof 'hello world');
console.log(typeof true);

//Arrays, Functions and Objects
//Arrays - [], 0 index based

const friend1 = 'Anna';
const friend2 = 'Koyel';
const friend3 = 'Attila';

const friends = ['Anna', 'Koyel', 'Attila', null, undefined, 15];

console.log(friends);
console.log(friends[0]);
console.log(friends[4]);
console.log(friends[6]);

var bestFriend = friends[5];
console.log(bestFriend);

friends[5] = 'Wiktor';
bestFriend = friends[5];
console.log(bestFriend);
