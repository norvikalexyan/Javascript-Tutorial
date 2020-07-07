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

//*** 9. Array Methods ***

// toString() method:
var selectedCity = ['Rome', 'Yerevan', 'Tbilisi', 'Berlin'];
console.log('array toString() method example: ' + selectedCity.toString());

// join():
var selectedName = ['dom', 'nick', 'sophie'];
console.log('array join() method example: ' + selectedName.join(' + '));

// pop():
var selectedCountry = ['Armenia', 'Italy', 'Germany', 'America'];
console.log('array pop() method example: ' + selectedCountry);
selectedCountry.pop();
console.log('array pop() method example: ' + selectedCountry);

//push():
var selectedCountry2 = ['Turkey', 'Japan', 'China'];
console.log('array push() method example: ' + selectedCountry2);
selectedCountry2.push('Canada');
console.log('array push() method example: ' + selectedCountry2);

//shift():
var colors = ['grey', 'gold', 'blue', 'red'];
console.log('array shift() method example: ' + colors);
colors.shift();
console.log('array shift() method example: ' + colors);

//unshift():
var colors2 = ['purple', 'red', 'green', 'white'];
console.log('array unshift() method example: ' + colors2);
colors2.unshift('black');
console.log('array unshift() method example: ' + colors2);

//changing element:
var selectedUniversity = ['Oxford', 'Cambridge', 'American', 'european'];
console.log('array changing element example: ' + selectedUniversity);
selectedUniversity[2] = 'french';
console.log('array changing element example: ' + selectedUniversity);

//Length property:
console.log('array length property example: ' + selectedUniversity.length);

//splice():
var selectedNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('array splice() Number: ' + selectedNumber);
selectedNumber1 = selectedNumber.splice(6); //starts from index[6] until the last element.
console.log('array splice Number is now: ' + selectedNumber);
console.log('array second variable of splice is: ' + selectedNumber1);
selectedNumber1 = selectedNumber.splice(2, 2); //starts from index[2] and remove 2 elements.
console.log('array splice number is now: ' + selectedNumber);
console.log('array second variable of splice is: ' + selectedNumber1);
selectedNumber1 = selectedNumber.splice(1, 1); //starts from index[1] and remove one element.
console.log('array splice number is now: ' + selectedNumber);
console.log('array second variable of splice is: ' + selectedNumber1);
selectedNumber1 = selectedNumber.splice(1, 0, 'JavaScript', 'Tutorial'); //starts from index[1], it removes nothing and add two new element from index[1].
console.log('array splice number is now: ' + selectedNumber);
console.log('array second variable of splice is: ' + selectedNumber1);
selectedNumber1 = selectedNumber.splice(
	1,
	2,
	['splice', 'method'],
	'JavaScript'
); //starts from index[1], it removes 2 element and add 2 new element, one of the new element is array but it counts as a one element.
console.log('array splice number is now: ' + selectedNumber);
console.log('array second variable of splice is: ' + selectedNumber1);

//Concat():
let a = [2, 4, 6, 8];
let b = [1, 3, 5];
let c = a.concat(b);
console.log('first array of concat() example: a = ' + a);
console.log('second array of concat() example: b = ' + b);
console.log('third array of concat() example: c = ' + c);

//slice():
var d = [12, 23, 44, 56, 77, 88, 99, 100];
var d1 = d.slice(2, 4);
console.log('main variable of slice method of array: d = ' + d);
console.log('second variable of slice method for array: d1 = ' + d1);

//sort():

//example 1:
let selectedCars = ['toyota', 'bmw', 'mercedes', 'ford'];
let sorted = selectedCars.sort();
console.log('sort method example in array: ', selectedCars);
console.log('sorted array is: ', sorted);

//example 2:
var numbers = [1, 4, 8, 12, 32, 89, 90];
console.log(
	'sort method in array example 2: ',
	numbers.sort(function (a, b) {
		return a - b; //it will sort from less to more.
	})
);

//example 3:
console.log(
	'sort method in array example 3: ',
	numbers.sort(function (a, b) {
		return b - a; //it will sort from more to less.
	})
);

//reverse():
var color = ['red', 'blue', 'yellow', 'purple'];
console.log('reverse method an array: ', color.reverse());

//indexOf():
let selectedGadget = ['laptop', 'ipad', 'mobile', 'computer'];
console.log(
	'indexOf method in an array example: ',
	selectedGadget.indexOf('mobile')
);
//lastindexOf():
console.log(
	'lastindexOf method in an array example: ',
	selectedGadget.lastIndexOf('ipad')
);

//include():
let includeMethod = ['hello', 'hi', 'hi there', 'hello world'];
console.log(
	'include method in array example: ',
	includeMethod.includes('hello')
);

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

// *** Enumerating Properties of an Object: ***

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

// *** Cloning an Object: ***

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
