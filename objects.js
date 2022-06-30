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
