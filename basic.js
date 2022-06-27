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
