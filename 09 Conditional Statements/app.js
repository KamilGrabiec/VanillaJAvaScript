//Conditional Statements
// >, <, >=, <=, ==, ===, !=, !===

const value1 = 2 > 1;
console.log(typeof value1);

if (value1) {
  console.log('If executed');
}

//Comparison Operators

const numb1 = 4;
const numb2 = 6;

if (numb1 > numb2) {
  console.log('first number is bigger than second');
} else if (numb2 > numb1) {
  console.log('second number is bigger than firs');
} else if (numb2 == numb1) {
  console.log('values are equal');
}

// else if and !
const value2 = false;

if (value2) {
  console.log('value is true');
} else if (!value2) {
  console.log('value is false');
}

// == check only value
// === check value and type
console.log('== and ===');
const numb3 = 6;
const numb4 = '6';

console.log(numb3);
console.log(numb4);
console.log(numb3 == numb4);
console.log(numb3 === numb4);

console.log(numb3 != numb4);
console.log(numb3 !== numb4);

//Logical Operators
// (|| -> or), (&& -> and), !

console.log('Logical operators || and &&');
const name1 = 'bob';
const age1 = 24;

if (name1 === 'bob' && age1 === 24) {
  console.log('Both conditions return true');
} else if (name1 === 'bob' || age1 === 24) {
  console.log('One of conditions return true');
}

//Switch
//dice values 1-6

const dice = 1;

switch (dice) {
  case 1:
    console.log('you got 1');
    break;

  case 2:
    console.log('you got 2');
    break;

  case 3:
    console.log('you got 3');
    break;

  case 4:
    console.log('you got 4');
    break;

  case 5:
    console.log('you got 5');
    break;

  case 6:
    console.log('you got 6');
    break;
  default:
    console.log('You did not roll the dice');
}

/*
if (dice === 1) {
  console.log('You got one');
}
else if (dice === 2) {
  console.log('You got two');
}
else if (dice === 3) {
  console.log('You got three');
} 
else if (dice === 4) {
  console.log('You got 4');
} 
else if (dice === 5) {
  console.log('You got 5');
} 
else if (dice === 6) {
  console.log('You got 6');
} 
else if (dice < 1 || dice > 6) {
  console.log('You did not roll the dice');
}
*/
