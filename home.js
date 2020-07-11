// *** 1. Console log ***

//we want a log a message on a console.
console.log(`Console log example: hello`);
console.warn(`This is a warning message`);
console.error(`This is a error message`);
var text = 'JavaScript Tutorial';
console.log(typeof text); //this will print type of text variable.

//_____________________________________________

//*** 2. Variable ***

//example 1:
let firstName = 'Norvik';
let lastName = 'Alexian';
console.log(`variable example 1: ${firstName} ${lastName}`);

//example 2:
var userName; //declaring variable.
userName = 'Sam Smith'; //assigning value.
console.log(`variable example 2: ${userName}`);

//example 3 (declaring multiple variables)
var name1 = 'John',
	age1 = 21,
	married1 = false;
console.log(`variable example 3: ${name1} ${age1} ${married1}`);

//____________________________________________

//*** 3.Constant ***
//value of constant cannot change

//example:
const interestRate = 0.3;
//interestRate = 1; //it will be error here.
console.log(`constant example: ${interestRate}`);
//___________________________________________

//*** 4. Alert, prompt, Confirm ***

alert(`This is alert window`);
var conf = confirm('Are you sure??');
console.log(`confirm example: ${conf}`); //this example will show one window with 2 buttons, if we press ok it will show us true in console and if we press cancel it will show false.

var promptValue = prompt('this is a prompt example:');
console.log(`prompt example: ${promptValue}`); //this will show what our user input.
console.log(`type of prompt example: ${typeof promptValue}`); //default type for prompt is string and it will show user's inputted text type.

//_________________________________________

//*** 5. Math operations ***

//+, -, /, *, ++, --, +=, -=, *=, /=, **, %
//Logical operations:
//&&, ||, !

//example 1:
let x = 10;
let y = 3;
console.log(`arithmetic operators: ${x + y}`); //summation
console.log('arithmetical operators:', x - y); //subtraction
console.log('arithmetical operators:', x * y); //multiplication
console.log('arithmetical operators:', x / y); //division
console.log('arithmetical operators:', x % y); //reminder of division
console.log('arithmetical operators:', x ** y); //x to the power of y
//increment (++)
console.log('increment arithmetical operator:', ++x);
//decrement (--)
console.log('decrement arithmetical operator:', --x);

//assignment operators
x += 5;
console.log('assignment operator:', x);
y *= 3;
console.log('assignment operator:', y);

//comparison and relational operator
let z = 1;
console.log(`relational operator: ${z > 0}`);
console.log('relational operator:', z >= 1);
console.log('relational operator:', z < 1);
console.log('relational operator:', z <= 1);

//equality operator
console.log('equality operator:', z === x); //strict equality operators (same Type + same Value)
console.log('lose equality operators:', 1 == 1); //lose equality operator (only same Value)
console.log('lose equality operators:', '1' == 1); //lose equality operator (only same Value)
console.log('lose equality operators:', true == 1); //lose equality operator (only same Value)

//________________________________________

//*** 6.Primitive and special data type ***

let name = 'JavaScript'; //String Literal
let age = 22; //number Literal
let isApproved = true; //boolean Literal
let middleName; //undefined
let middleName2 = undefined; //this is also undefined type value.
let selectOptions = null; //the value of this variable is null and the type is object.

//_____________________________________

//*** 7.Object ***

//example:
let person = {
	name: 'Norvik', //name is key and Norvik is the value of the key
	age: 22,
}; //because it is variable we put ';' after {}.
console.log('object example 1:', person);
console.log('object example: ', person.name);
console.log('type of object example: ', typeof person);

person.name = 'John'; //Dot notation.

person['name'] = 'Sam'; //Bracket notation.

//______________________________________

// *** 8.Arrays ***

//example 1:
let selectedColors = ['blue', 'yellow', 'green', 'red'];
selectedColors[4] = 'black'; //add new element to the array
console.log('array example 1: ', selectedColors); //full array can be accessed by referring to the array name.
selectedColors[1] = 'brown'; //change one of the elements.
console.log('array first index example: ', selectedColors[0]); //accessing to the first index of the array.
console.log(
	'array last index example: ',
	selectedColors[selectedColors.length - 1]
); //accessing to the last index of the array.

//___________________________________

//*** 9. Arrays and Array Methods ***

// ** Adding new elements in array: **

const arrayNumbers = [3, 4];

// End
arrayNumbers.push(5, 2);

console.log('Push method of an array:', arrayNumbers);

// Beginning
arrayNumbers.unshift(6, 7);

console.log('Unshift method of an array:', arrayNumbers);

// Middle
arrayNumbers.splice(2, 0, 'a', 'b');

console.log(arrayNumbers);

//-------------------------

// ** Finding elements in array (Primitive) **

const arrayNumbers2 = [1, 2, 3, 4, 1];

console.log('IndexOf method in an array:', arrayNumbers2.indexOf('a')); // expected -1
console.log('IndexOf method in an array:', arrayNumbers2.indexOf(1, 2)); // expected 4
console.log('IndexOf method in an array:', arrayNumbers2.indexOf(1)); // expected 0

console.log('lastIndexOf method in an array:', arrayNumbers2.lastIndexOf(1)); // expected 4

console.log('includes method in an array:', arrayNumbers2.includes(1)); // expected true

//-------------------------

// ** Finding elements in array (Reference type): **

const courses = [
	{ id: 1, name: 'a' },
	{ id: 2, name: 'b' },
];

const course = courses.find(function (courses) {
	return courses.name === 'a';
});

console.log(course);

const course2 = courses.findIndex(function (courses) {
	return courses.name === 'a';
});

console.log(course2);

// * Arrow function
const course3 = courses.findIndex((courses) => courses.name === 'b');

console.log(course3);

//-------------------------

// ** Removing elements from an array:

const arrayNumbers3 = [1, 2, 3, 4, 5];

console.log(arrayNumbers3);

// End:
arrayNumbers3.pop();

console.log('pop method of array:', arrayNumbers3);

// Beginning:
arrayNumbers3.shift();

console.log('shift method of array:', arrayNumbers3);

// Middle:
arrayNumbers3.splice(2, 1);

console.log('splice method of array:', arrayNumbers3);

//-------------------------

// ** Emptying an array:

let arrayNumbers4 = [1, 2, 3, 4];
let anotherNumber = arrayNumbers4;

// Solution one:
// arrayNumbers4 = [];

// console.log('solution one:');
// console.log('Emptying an array:', arrayNumbers4); // expected []
// console.log('Emptying an array:', anotherNumber); // expected [1, 2, 3, 4]

// Solution two:
arrayNumbers4.length = 0;

console.log('solution two:');
console.log('Emptying an array:', arrayNumbers4); // expected []
console.log('Emptying an array:', anotherNumber); // expected []

// Solution three:
arrayNumbers4.splice(0, arrayNumbers4.length);

console.log('solution three:');
console.log('Emptying an array:', arrayNumbers4); // expected []
console.log('Emptying an array:', anotherNumber); // expected []

// Solution four:
while (arrayNumbers4.length > 0) arrayNumbers4.pop();

console.log('solution four:');
console.log('Emptying an array:', arrayNumbers4); // expected []
console.log('Emptying an array:', anotherNumber); // expected []

//-------------------------

// ** Combining and Slicing an array:

const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [{ id: 1 }];

const combined = first.concat(second);
const anotherCombined = first.concat(third);
third[0].id = 10;

// the spread operator:
const yetAnotherCombined = [...first, 'a', ...second];

console.log(yetAnotherCombined);
console.log(combined);
console.log(anotherCombined);

const sliced = combined.slice(2, 4);

console.log(sliced); // expected [3, 4]

//-------------------------

// ** Iterating an array:

const iterateNumbers = [1, 2, 3, 4];

// Solution one:
console.log('For-of loop:');
for (let number of iterateNumbers) console.log(number);

// Solution two:
console.log('forEach:');
iterateNumbers.forEach((number, index) => console.log(index, number));

//-------------------------

// ** Joining Arrays:

const arrayNumbers5 = [1, 2, 3];
arrayNumbers5.join(',');
console.log(arrayNumbers5);

const firstMessage = 'this is my first message';
const parts = firstMessage.split(' ');
console.log(parts);

const joined = parts.join('-');
console.log(joined);

//-------------------------

// ** Sorting Arrays:

const arrayNumbers6 = [2, 3, 1];
arrayNumbers6.sort();

console.log(arrayNumbers6);

arrayNumbers6.reverse();

console.log(arrayNumbers6);

const courses2 = [
	{ id: 1, name: 'Node.js' },
	{ id: 2, name: 'JavaScript' },
];

courses2.sort((a, b) => {
	const nameA = a.name.toUpperCase();
	const nameB = b.name.toUpperCase();
	if (nameA < nameB) return -1;
	if (nameA > nameB) return 1;
	return 0;
});

console.log(courses2);

//-------------------------

// ** Testing the elements of an array:

const testingNumbers = [1, 2, 3];

// check and see if all the numbers in the array are positive:
const allPositive = testingNumbers.every((value) => {
	return value >= 0;
});

console.log(allPositive); // expected true

const testingNumbers2 = [1, -1, 2, 3];

// check and see if some of the numbers in the array are positive
const somePositive = testingNumbers2.some((value) => {
	return value >= 0;
});

console.log(somePositive); // expected true

//___________________________________________

//*** 10. Functions ***

//example 1:
//greet is our function name, 'name' is an input (parameter) for this function
function greet(name, lName) {
	console.log(`hello ${name} ${lName}`);
}
greet('Norvik', 'Alexian'); //Norvik is an argument to the greet function

//example 2:
function square(squareNumber) {
	return squareNumber * squareNumber;
}
let selectedNumber2 = square(2);
console.log('function second example: ', selectedNumber2);

//example 3:
function fn(argv1, argv2) {
	if (argv1 > argv2) {
		console.log(
			'in this function first argument is bigger than the second one'
		);
	} else {
		console.log(
			'in this function the second argument is bigger than the first one'
		);
	}
}
fn(6, 5);

//example 4:
function percentage(x, y) {
	let result = (x * y) / 100;
	return result;
}
let result = percentage(100, 50);
console.log('the result of our function example is:', result);

//______________________________________

//*** 11. Ternary or conditional operators ***

//if a customer has more than 100 points they are a 'gold' customer, otherwise they are 'silver' customer.
let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log('ternary operator:', type);

//____________________________________

//*** 12. Logical operators ***

//Logical AND (&&)
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log('Logical AND:', eligibleForLoan);

//logical OR (||)
let highIncome2 = false;
let goodCreditScore2 = false;
let eligibleForLoan2 = highIncome2 || goodCreditScore2;
console.log('Eligible', eligibleForLoan2);

// NOT (!)
let applicationRefused = !eligibleForLoan2; //if eligibleForLoan is true this not operator will convert that to false
console.log('Application Refused', applicationRefused);

//_____________________________________

//*** 13. non-boolean logical operators ***

console.log('non-boolean logical operators:', false || 'Norvik');
console.log('non-boolean logical operators:', false || 1);
console.log('non-boolean logical operators:', false || 1 || 2); //short-circuiting

//example:
//let userColor = 'red';
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log('non-boolean logical operators example:', currentColor);

//_____________________________________

// *** 14. Bitwise Operators: ***

/*
    Bitwise operators in JavaScript work on individual bits of number
    1 = 00000001 -> 8 bit or 1 byte of information 
    2 = 00000010
    Bitwise 'OR' = 00000011 = 3
    Bitwise 'AND' = 00000000 = 0
*/

console.log('Bitwise "OR":', 1 | 2); // expected 3
console.log('Bitwise "AND":', 1 & 2); // expected 0

/*
    example:
        we will use one byte of information to determine what kind of permission user can have:
        Read, Write and Execute
*/

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

console.log('Bitwise example:', myPermission);

// create one variable that check if we have read permission type yes otherwise type no
let myMessage = myPermission & readPermission ? 'yes' : 'no';

console.log('Do we have read permission?', myMessage);

//_____________________________________

// *** 15.Precedence Operators: ***

let s = 2 + 3 * 4;
console.log('Precedence Operator:', s); // expected 14

let r = (2 + 3) * 4;
console.log('Precedence Operator:', r); // expected 20

//_____________________________________

// *** 16.If...else: ***

/*
	example:
		if hour is between 6am and 12pm: Good morning
		if hour is between 12pm and 6pm: Good afternoon
		otherwise: Good evening
*/

let hour = 10;

if (hour > 6 && hour < 12) console.log('Good morning');
else if (hour >= 12 && hour < 18) console.log('Good afternoon');
else console.log('Good evening');

//_____________________________________

// *** 17.Switch...case: ***

let role = 'guest';

switch (role) {
	case 'guest':
		console.log('Guest user');
		break;
	case 'moderator':
		console.log('Moderator user');
		break;
	default:
		console.log('Unknown user');
}

// example in above means:
if (role === 'guest') console.log('Guest user');
else if (role === 'moderator') console.log('Moderator user');
else console.log('Unknown user');

//_____________________________________

// *** 18.For loop: ***

console.log('for loop example:');

// example 1:
for (let i = 0; i < 5; i++) {
	console.log('hello world', i);
}

// example 2:
for (let i = 1; i <= 5; i++) {
	if (i % 2 !== 0) console.log(i);
}

//_____________________________________

// *** 19.While loop: ***

let i = 0;
console.log('while loop example:');

while (i <= 5) {
	if (i % 2 !== 0) console.log(i);
	i++;
}

//_____________________________________

// *** 20.Do-While loop: ***

console.log('Do-while loop example:');

let j = 9;
do {
	if (j % 2 !== 0) {
		console.log(j); // expected 9
		j++;
	}
} while (j <= 5);

//_____________________________________

// *** 21.Infinite loop: ***

console.log('Infinite loop example:');
let q = 0;

while (q < 10) {
	console.log(q);
	q++; // if we forgot this step in while loop we are gonna create infinite loop to crash the browser.
}

for (let q = 0; q < 10; q++); // if we forgot q++ in for loop we are gonna create infinite.

do {
	console.log(q);
	q++; // if we forgot this step in do-while loop we are gonna create infinite loop.
} while (q < 10);

//_____________________________________

// *** 22.For-in loop: ***

const person2 = {
	name: 'Norvik',
	age: 22,
};

for (let key in person2) {
	console.log(key, person2[key]);
}

//_____________________________________

// *** 23.For-of loop: ***

const colors3 = ['red', 'black', 'white'];

console.log('For of loop example:');

for (let color of colors3) {
	console.log(color);
}

//_____________________________________

// *** 24.Break and Continue

let k = 0;
console.log('Break and Continue example:');

while (k <= 10) {
	// if (k === 5) break; -> it will print from 0-4.
	if (k % 2 === 0) {
		k++;
		continue; // it will print odd numbers
	}
	console.log(k);
	k++;
}

//_____________________________________

// *** 25.Object basics: ***

// Object-oriented Programming (OOP)
const circle = {
	radius: 1, // the value of an object can be anything ex. string, number, boolean and ...
	location: {
		// another object in an object
		x: 1,
		y: 1,
	},
	isVisible: true, // boolean
	draw: function () {
		console.log('draw');
	},
};

circle.draw(); // draw method

//_____________________________________

// *** 26.Factory Functions: ***

function createCircle(radius) {
	return {
		radius, // radius: radius
		draw() {
			// draw: function() {}
			console.log('draw');
		},
	};
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

//_____________________________________

// *** 27.Constructor Functions: ***

function Circle(radius) {
	this.radius = radius;
	this.draw = function () {
		console.log('draw');
	};
}

const circle3 = new Circle(1);

//_____________________________________

// *** 28. Dynamic Nature of Objects: ***

const dynamicCircle = {
	radius: 1,
};

dynamicCircle.color = 'Yellow'; // we add color property to our object
dynamicCircle.draw = function () {}; // we add method to our object

delete dynamicCircle.color; // we delete color property from our object
delete dynamicCircle.draw; // we delete method from our object

console.log(dynamicCircle);

//_____________________________________

// *** 30. Functions are objects: ***

// example:
const Circle1 = new Function(
	'radius',
	`
	this.radius = radius;
	this.draw = function () {
	console.log('draw');
	};
`
);

const circle4 = new Circle1(1);

// example:
function Circle3(radius) {
	this.radius = radius;
	this.draw = function () {
		console.log('draw');
	};
}

Circle3.call({}, 1);
// Circle3.apply({}, [1, 2, 3]);

const circle5 = new Circle3(1);

//_____________________________________

// *** 31.Value vs Reference: ***

// example:
let f = 10;
let h = f;

f = 20;

console.log(f); // expected 20
console.log(h); // expected 10

// example:
let q2 = { value: 20 };
let u = q2;

q2.value = 25;

console.log(q2); // { value: 25 }
console.log(u); // { value: 25 }

// example:
let number2 = 10;

function increase(number) {
	number++;
}

increase(number2);
console.log(number2); // expected 10

//example:
let obj = { value: 20 };

function increase2(obj) {
	obj.value++;
}

increase2(obj);
console.log(obj); // expected 21

//_____________________________________

// *** 32.Enumerating Properties of an Object: ***

const enumeratingCircle = {
	radius: 1,
	draw() {
		console.log('draw method of enumerating circle object');
	},
};

for (let key in enumeratingCircle) console.log(key, enumeratingCircle[key]);

// for (let key of enumeratingCircle) console.log(key); -> it will be error

for (let key of Object.keys(enumeratingCircle)) console.log(key);

for (let entries of Object.entries(enumeratingCircle)) console.log(entries);

if ('radius' in enumeratingCircle) console.log('yes');

//_____________________________________

// *** 33.Cloning an Object: ***

const cloneObj = {
	radius: 1,
	draw() {
		console.log('draw method of cloning an object');
	},
};

// Old way
// const another = {};
// for (let key in cloneObj) another[key] = cloneObj[key];

// New way of cloning an object:
const another = Object.assign({}, cloneObj);

// Yet another new way of cloning an object:
const yetAnother = { ...cloneObj };

console.log(another);
console.log(yetAnother);

//_____________________________________

// *** 35.Math: ***

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(2)); // expected 0, 1 and 2
console.log(getRandomInt(1)); // expected 0
console.log(Math.random()); //expected a number between 0 and 1

//_____________________________________

// *** 36.String: ***

// String primitive:
const messages = ' This is my first message ';

// Methods and properties of a string:
console.log(firstMessage.length); // it shows the length of the message
console.log(firstMessage.includes('my')); // it shows that special word is included or not
console.log(firstMessage.startsWith('This')); // it shows that message starts with special word or not (it's case sensitive)
console.log(firstMessage.endsWith('message')); // it shows that message ends with special word or not (it's case sensitive)
console.log(firstMessage.indexOf('my')); // it shows the special word index number
console.log(firstMessage.replace('first', 'second')); // it will replace the second parameter with the first one
console.log(firstMessage.toUpperCase()); // it will print out the message upper case
console.log(firstMessage.trim()); // it will remove extra spaces from the left and right
console.log(firstMessage.trimLeft()); // it will remove extra spaces from the left part
console.log(firstMessage.split(' ')); // it will return the message as an array and each item is a word

//escape notation
console.log('this is my \n second message'); // continue on a new line
console.log('this is my \t second message'); // it has tab in the message

// String object
const stringObj = new String('hi');

//_____________________________________

// *** 37.Template Literals: ***

const anotherName = 'John';
const templateMessage = `Hi ${anotherName} ${2 + 3},
Thank you to join my mailing list.

Regards,
Norvik`;

console.log(templateMessage);

//_____________________________________

// ** 38.Date: **

const now = new Date();
const date1 = new Date('May 11 2018 09:00'); // we can pass string, number or date to this date object
const date2 = new Date(2018, 4, 11, 9, 0); // only numbers we can pass to this date object

console.log(now.toDateString());
console.log(date1.toTimeString());
console.log(date2.toISOString());

now.setFullYear(2017);

console.log(now.toDateString());

//_____________________________________
