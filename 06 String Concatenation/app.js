// String Concatenation - combine string values
// !! - backticks (template strings) easier option.

const firstName = 'Kamil';
const lastName = 'Grabiec';
let fullName;

console.log(
  'Hello there your full name is: ' + firstName + ' ' + lastName + '.'
);

fullName = firstName + ' ' + lastName;
console.log('Hello there is your full name is: ' + fullName + '.');

//Numbers
//Loosely Typed => don't declare type

var number = 34;
number = 'four';
console.log(number); //output: four

var decimal = 3.666;
console.log(decimal);
var decimalString = '5.432';
var decimalString2 = '9.23';
console.log(decimalString);

//modulus %
const slices = 10;
const children = 3;
const amount = slices % children;
console.log(amount);

console.log(firstName - lastName);
console.log(decimalString - decimalString2);

var doubleA = 'aa';
var tripleA = 'aaa';
console.log(doubleA + tripleA);

console.log(number * doubleA);
console.log(decimalString * tripleA);
