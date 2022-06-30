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
