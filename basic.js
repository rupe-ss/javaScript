//1. Introduction to JavaScript

//2. Different ways to write JavaScript code.

//3. There are 7 different datatypes in JavaScript
const dataTypes = [
    'undefined',
    'null',
    'object',
    'number',
    'string',
    'boolean',
    'symbol',
];
// We can check the variable type with keyword typeof
let age = 25;
console.log(typeof dataTypes);
console.log(typeof age);

//4. How to skip quotation in JavaScript
let statement = '"I am skipping a quotation"';
console.log(statement);

let statement1 = "'Single quotation'";
console.log(statement1);

//5. Escaping out other than Quote
/*
\'  single quote
\"  double quote
|| backslash
\n newline
Ir carriage return
\t tab
\b backspace
\ f form feed
*/
console.log('\\\\');
console.log('New line should be created.\nNew line');
console.log('Tab space is created.\t\tTab space.');
console.log('Tab space is created.\t\bTab space.');
console.log('\rCarriage Return');

// 6.Find the length of a string
var task = 'Learning';
console.log(task.length);

//7. String is immutable
let string = 'mtring';
//We can't do following to fix above string
string[0] = 'S';
//Nothing will change, value of string will be same "mstring"
console.log(string);
//Only way to fix it is
string = 'String';
console.log(string);

//8. Finding nth character in String
// We can get the character by using the length key word but we can't replace just a single character from a string.
console.log(string.length);
console.log(string[string.length - 1]);

//9. Array and Nested Array
const array = ['Football', 'Baseketball', 'Volleyball'];
const nestedArray = [
    ['Apple', 1],
    ['Ball', 2],
];
console.log(array, typeof array);
console.log(nestedArray);

// 10. Accessing array data
const myArray = [50, 60, 70];
const myData = myArray[0];
console.log(myData);

// 11. Access Multi-Dimensional array
var multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];
// Only change code below this line.
var multiData = multiArray[0][0];
console.log(multiData);

// 12. Array push and pop functions
const arrayPushPop = [1, 2, 3, 4, 5];
// Pushing element of array
arrayPushPop.push(6);
// Pushing entire array into an array
arrayPushPop.push(['a', 'b', 'c']);
arrayPushPop.push(7);
console.log(arrayPushPop);
arrayPushPop.pop();
console.log(arrayPushPop);

// Shift and unshift from array
const arrayShiftUnshift = ['a', 'b', 'c', 'd'];
// 13. Unshift will push a member infront of array
arrayShiftUnshift.unshift('e');
console.log(arrayShiftUnshift);
// 14. Shift will pop a member from beginning of array
arrayShiftUnshift.shift();
console.log(arrayShiftUnshift);
