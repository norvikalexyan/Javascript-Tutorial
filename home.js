// *** 1. Console log ***

//we want a log a message on a console.
console.log('Console log example: hello');
console.warn('This is a warning message');
console.error('This is a error message');
var text = 'JavaScript Tutorial';
console.log(typeof text); //this will print type of text variable.

//_____________________________________________

//*** 2. Variable *** 

//example 1:
let firstName = 'Norvik';
let lastName = 'Alexian';
console.log('variable example 1: ', firstName, lastName);

//example 2:
var userName; //declaring variable.
userName = 'Sam Smith'; //assigning value.
console.log('variable example 2: ', userName);

//example 3 (declaring multiple variables)
var name1 = 'John', age1 = 21, married1 = false;
console.log('variable example 3: ', name1, age1, married1);

//____________________________________________

//*** 3.Constant *** 
//value of constant cannot change

//example:
const interestRate = 0.3;
//interestRate = 1; //it will be error here.
console.log('constant example:', interestRate);
//___________________________________________

//*** 4. Alert, prompt, Confirm ***

alert('This is alert window');
var conf = confirm('Are you sure??');
console.log('Confirm example: ', conf); //this example will show one window with 2 buttons, if we press ok it will show us true in console and if we press cancel it will show false.

var promptValue = prompt('this is a prompt example:');
console.log('prompt example: ', promptValue); //this will show what our user input.
console.log('type of prompt example: ', typeof promptValue); //default type for prompt is string and it will show user's inputted text type.

//_________________________________________

//*** 5. Math operations *** 

//+, -, /, *, ++, --, +=, -=, *=, /=, **, %

//Logical operations:
//&&, ||, !

//example 1:
var number1 = 7;
console.log('math example 1: ', number1);

//example 2:
var number2 = 10
var number3 = number2 + 10;
console.log('math example 2: ', number3);

//example 3:
var number4 = number2 ** 3;
console.log('math example 3: ', number4);

//example 4:
console.log('math example 4: ', number2 % 2);

//example 5:
number2 += 20; 
console.log('math example 5: ', number2);

//decrement and increment operators:
++number2 // pre increment.
number2++ //post increment (number2 = number2 + 1).
--number2 //pre decrement.
number2-- //post decrement (number2 = number2 - 1).

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
    age: 22
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
console.log('array last index example: ', selectedColors[selectedColors.length - 1]); //accessing to the last index of the array.

//___________________________________

//*** 9. Array Methods *** 

// toString() method:
var selectedCity = ['Rome', 'Yerevan', 'Tbilisi', 'Berlin'];
console.log('array toString() method example: ' + selectedCity.toString());

// join():
var selectedName = ['dom', 'nick', 'sophie'];
console.log('array join() method example: ' + selectedName.join(" + "));

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









