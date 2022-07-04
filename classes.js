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
