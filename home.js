// *** 1. Console log ***

//we want a log a message on a console.
console.log('Console log example: hello');
console.warn('This is a warning message');
console.error('This is a error message');
var text = 'JavaScript Tutorial';
console.log(typeof text); //this will print type of text variable.

//_____________________________________________

//*** 2. Variable *** 

//we can use variable to store data  temporary.
//variable are symbolic name of values.
//values of a variable can change.
//we will write a variable with 'let' or 'var'.

//name of variable:
//1.cannot be a reserved keyword.
//2.it should be meaningful.
//3.cannot start with a number.
//4.cannot contain space or hyphen (-).
//5.they are case-sensitive.
//6.A variable name must start with a letter, underscore (_), or dollar sign ($).

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

//*** 3. Alert, prompt, Confirm ***

//alert('This is alert window');
//var conf = confirm('Are you sure??');
//console.log('Confirm example: ', conf); //this example will show one window with 2 buttons, if we press ok it will show us true in console and if we press cancel it will show false.

//var promptValue = prompt('this is a prompt example:');
//console.log('prompt example: ', promptValue); //this will show what our user input.
//console.log('type of prompt example: ', typeof promptValue); //default type for prompt is string and it will show user's inputted text type.

//_________________________________________

//*** 4. Math operations *** 

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







