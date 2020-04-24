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
var name1 = 'John', age1 = 21, married1 = false;
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
console.log('equality operator:', z === x);

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

//changing element:
var selectedUniversity = ['Oxford', 'Cambridge', 'American', 'european'];
console.log('array changing element example: ' + selectedUniversity);
selectedUniversity[2] = 'french';
console.log('array changing element example: ' + selectedUniversity);

//Length property:
console.log('array length property example: ' + selectedUniversity.length);

//splice():

//example 1:
var selectedNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('array splice() Number: ' + selectedNumber);
selectedNumber1 = selectedNumber.splice(6); //starts from index[6] until the last element.
console.log('array splice Number is now: ' + selectedNumber);
console.log('array second variable of splice is: ' + selectedNumber1);
selectedNumber1 = selectedNumber.splice(2,2); //starts from index[2] and remove 2 elements.
console.log('array splice number is now: ' + selectedNumber);
console.log('array second variable of splice is: ' + selectedNumber1);
selectedNumber1 = selectedNumber.splice(1,1); //starts from index[1] and remove one element.
console.log('array splice number is now: ' + selectedNumber);
console.log('array second variable of splice is: ' + selectedNumber1);
selectedNumber1 = selectedNumber.splice(1, 0, 'JavaScript', 'Tutorial'); //starts from index[1], it removes nothing and add two new element from index[1].
console.log('array splice number is now: ' + selectedNumber);
console.log('array second variable of splice is: ' + selectedNumber1);
selectedNumber1 = selectedNumber.splice(1, 2, ['splice', 'method'], 'JavaScript'); //starts from index[1], it removes 2 element and add 2 new element, one of the new element is array but it counts as a one element.
console.log('array splice number is now: ' + selectedNumber);
console.log('array second variable of splice is: ' + selectedNumber1);

//Concat():

//example:
let a = [2, 4, 6, 8];
let b = [1, 3, 5];
let c = a.concat(b);
console.log('first array of concat() example: a = ' + a);
console.log('second array of concat() example: b = ' + b);
console.log('third array of concat() example: c = ' + c);

//slice():

var d = [12, 23, 44, 56, 77, 88, 99, 100];
var d1 = d.slice(2,4);
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
console.log('sort method in array example 2: ', numbers.sort(function(a, b) {
    return a - b; //it will sort from less to more.
}));

//example 3:
console.log('sort method in array example 3: ', numbers.sort(function(a, b) {
    return b - a; //it will sort from more to less.
}));

//reverse():

var color = ['red', 'blue', 'yellow', 'purple'];
console.log('reverse method an array: ', color.reverse());

//indexOf():

let selectedGadget = ['laptop', 'ipad', 'mobile', 'computer'];
console.log('indexOf method in an array example: ',selectedGadget.indexOf('mobile'));
//lastindexOf():
console.log('lastindexOf method in an array example: ', selectedGadget.lastIndexOf('ipad'));

//include():

let includeMethod = ['hello', 'hi', 'hi there', 'hello world'];
console.log('include method in array example: ', includeMethod.includes('hello'));

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
console.log('function second example: ' , selectedNumber2);

//example 3:
function fn(argv1, argv2) {
    if(argv1 > argv2) {
        console.log('in this function first argument is bigger than the second one');
    } else {
        console.log('in this function the second argument is bigger than the first one');
    }
}
fn(6, 5);

//example 4:
function percentage(x, y) {
    let result = x * y / 100;
    return result;
}
let result = percentage(100, 50);
console.log('the result of our function example is:', result);
