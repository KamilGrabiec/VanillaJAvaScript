//Variable - Most Basic Building Block
//Variables - Store, acces, Modify === Value
//Declare, assignmment Operator, Assign value
// assign value later, modify existing

//variables can contain digits, letters, underscore, $
// must start with letter, $ or _
// no keyword
// cannot start with number
// case sensitive - fullname vs Fullname
// camelCase or underscore

var firstName = 'John';
var name2 = "John Shrimp Taco the V'th";
var address, zip, state;

address = 'Osiedle Akademickie 6/10';
zip = '31-866';
state = 'małopolska';
firstName = 'Bob';

console.log(firstName);
console.log(name2);
console.log(address);
console.log(zip);
console.log(state);
console.log(address, zip, state);

// error example
//var 123random123 = "random";

//error example
//var fullname;
//console.log(FullName);

//let vs const vs var

//using var
var value1 = 'obsolete value';

//using let
let value2 = 'editable value';

//using const
const value3 = 'constant value';

//Quatation Marks (for this Prettier was turned off)
// "" or ''

const n = 'john';
const m = "john/'s";
const o = "John's";
const p = 'John said "world"';
