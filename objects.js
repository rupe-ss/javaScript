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
