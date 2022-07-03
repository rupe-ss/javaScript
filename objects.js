// 30. Build javaScript Objects
// Rules:- For double word string we have to include the single quote but for single word string we don't.
const javaScriptObject = {
    name: 'Brutin',
    'Eye color': 'Blue',
    Age: 3,
};
console.log(typeof javaScriptObject, javaScriptObject);

// 31. Accessing Object properties with dot notation
// We can't access a value which has property of two words.
const object = {
    name: 'Brutin',
    'Eye color': 'Blue',
    Age: 3,
};
console.log(object.name);
console.log(object['Eye color']);

// 32. Accessing object properties with bracket notation
// Setup
var testObj = {
    'an entree': 'hamburger',
    'my side': 'veggies',
    'the drink': 'water',
};
console.log(testObj['an entree']);
console.log(testObj['the drink']);

// 32. a) Adding new properties to Object
const myDog = {
    name: 'Happy Coder',
    legs: 4,
    tails: 1,
    friends: ['Harkey', 'Hari'],
};

myDog.bark = 'woof';
console.log(myDog);

// 33. Testing if object has the property(hasOwnProperty)
function checkObj(checkProp) {
    var myObj = {
        gift: 'pony',
        pet: 'kitten',
        bed: 'sleigh',
    };
    if (myObj.gift == 'pony') {
        delete myObj.gift;
    }
    console.log(myObj);
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return 'Not Found';
    }
}
console.log(checkObj('bed'));

// 34. Record collection challenge
// Setup
// Question
/*Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.*/
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name'],
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette'],
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: [],
    },
    5439: {
        albumTitle: 'ABBA Gold',
    },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (value === '') {
        delete records[id][prop];
    } else if (prop == 'tracks') {
        records[id][prop] = records[id][prop] || [];
        records[id][prop].push(value);
    } else {
        records[id][prop] = value;
    }
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(recordCollection);

// 34. a Short Circuit Evaluation
function shortCircuit() {
    var a; // undefined (falsy value)
    var b = null; // null (falsy value)
    var c = undefined; //undefined (falsy value)
    var d = 4; // number (NOT falsy)
    var e = 'five'; // assigment short circuits before reaching here
    var f = a || b || c || d || e;
    return f;
}
console.log(shortCircuit());

// 35. Creating string using Template Literals
const person = {
    name: 'Zodiac Hasbro',
    age: 56,
};
// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}! 
I am ${person.age} years old.`;
console.log(greeting);

//Code Challenge
const result = {
    success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
    failure: ['no-var', 'var-on-top', 'linebreak'],
    skipped: ['id-blacklist', 'no-dup-keys'],
};

function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return resultDisplayArray;
}
/**
   * makeList(result.failure) should return:
  * [ `<li class="text-warning">no-var</li>`,
      `<li class="text-warning">var-on-top</li>`,
      `<li class="text-warning">linebreak</li>` ]
   **/

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

// 36. Concise object literal declarations using simple fields
// Usually we write this way:-
const createDog = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender,
    };
};
console.log(createDog('Brutin', 2, 'Male'));

const createPerson = (name, age, gender) => {
    return { name, age, gender };
};
console.log(createPerson('Girl', '17', 'Female'));
/* Output {
    "name": "Girl",
    "age": "17",
    "gender": "Female"
} */

// 37. Write concise declaration functions
const bicycle = {
    gear: 2,
    // An object can have a function as well. This is how we declare functions in javaScript
    setGear: function (newGear) {
        // With strict mode, you can not, for example, use undeclared variables.
        'use strict';
        this.gear = newGear;
    },
    // New way of declaring function
    resetGear(resetGear) {
        'use strict';
        this.gear = resetGear;
    },
};
bicycle.setGear(3);
console.log(bicycle.gear);
bicycle.resetGear(5);
console.log(bicycle.gear);
