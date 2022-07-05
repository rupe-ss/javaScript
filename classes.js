// 38. Use class syntax to define a constructor function.

// Old way of creating constructor
// We need to have a constructor object before to use a 'new' keyword.
var SpaceShuttle = function (targetPlanet) {
    this.targetPlanet = targetPlanet;
};
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

// New way of creating constructor
function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

// 39. Use getters and setters to control access to an object.
class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

function changeTemp() {
    class Thermostat {
        constructor(temp) {
            this._temp = (5 / 9) * (temp - 32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = changeTemp();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 36;
console.log(thermos.temperature);

// 40. Understand the differences between import and require
import * as capitalizeStrings from './string_function.js';
const cap = capitalizeStrings.capitalizeString('Hello!');
console.log(cap);

// 41. Use export and import to reuse a code block, function or variables
//import { capitalizeStr, foo, bar } from './string_function.js';
// console.log(capitalizeStr('apple'));
// console.log(foo);
// console.log(bar);

// 42. Use * to import everything from a file
console.log(capitalizeStrings.capitalizeStr('apple'));
console.log(capitalizeStrings.foo);
console.log(capitalizeStrings.bar);

// 43. Create an export fallback with export default
// I get error while importing from another file, not sure why.
// I get below error "net::ERR_ABORTED 404 (Not Found)"
// import { name } from './classPractice';
