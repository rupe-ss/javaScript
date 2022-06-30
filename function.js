// 15. Writing function for reusable code
function reusable() {
    console.log('Hello World');
}

reusable();

// 16. Passing arguments/parameters in functions
function argFunction(a, b) {
    return a + b;
}
console.log(argFunction(4, 5));

// 17. JavaScript variable global scope
function globalScope() {
    //When I practice this global variable is not visible anymore. Maybe this is no longer applicable in javaScript.
    oopsGlobal = 5;
}
//console.log(oopsGlobal);

// 18. Equality Operators ( == , ===, ! =, ! ==, >, > =, < =)
function equality() {
    // Difference between '==' and '===' datatype should match too for '==='
    if (3 == '3') {
        return true;
    } else return false;
}
console.log(equality());

// 19. And/Or Operators (< = && > = || )
function andOrOperator() {
    const age = 4;
    if (age < 5 && age > 0) {
        return 'Child is infant.';
    }
}
console.log(andOrOperator());

// 20. If/Else statement
function ifElseStatement() {
    const name = 'Dogi';
    if (name == 'Dog') {
        console.log('It is a animal.');
    } else {
        console.log(`I don't know what is it.`);
    }
}
ifElseStatement();

// 21. Else if statement
function elseIfStatement() {
    let number;
    if (1 == '2') {
        return (number = 1);
    } else if (2 == '2') {
        return (number = 2);
    }
}
console.log(elseIfStatement());

// 22. Logical order if if/else if and else statement
function orderMyLogic(val) {
    if (val < 5) {
        return 'Less than 5';
    } else if (val < 10) {
        return 'Less than 10';
    } else {
        return 'Greater than or equal to 10';
    }
}
// Change this value to test
console.log(orderMyLogic(4));

// 23. Chaining if else statement
function testSize(num) {
    if (num < 5) {
        return 'Tiny';
    } else if (num < 10) {
        return 'Small';
    } else if (num < 15) {
        return 'Medium';
    } else if (num < 20) {
        return 'Large';
    } else {
        return 'Huge';
    }
}
testSize(7);

// 24. Just if, else if function
var names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey'];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return name[6];
    }
}
console.log(golfScore(5, 2));

// 25. Switch Statement
const switchStatement = (val) => {
    let answer = '';
    switch (val) {
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'gamma';
            break;
        case 4:
            answer = 'theta';
        default:
            answer = 'pheta';
    }
    return answer;
};
console.log(switchStatement(5));

// 26. Default option in switch statement
function defaultOption(value) {
    let number;
    switch (value) {
        case '10':
            number = 5;
            break;
        default:
            number = 0;
    }
    return number;
}
console.log(defaultOption('10'));

// 26.a Multiple identical option in switch Statements
function multipleIdentical(val) {
    var answer = '';
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = 'Low';
            break;
        case 4:
        case 5:
        case 6:
            answer = 'High';
            break;
    }
    return answer;
}
console.log(multipleIdentical(6));

// 26.b Replacing If/else if chain with switch
function chainToSwitch(val) {
    let answer = '';
    // Only change code below this line
    switch (val) {
        case 'bob':
            answer = 'Marley';
            break;
        case 42:
            answer = 'The Answer';
            break;
        case 1:
            answer = 'There is no #1';
            break;
        case 99:
            answer = 'Missed me by this much!';
            break;
        case 7:
            answer = 'Ate Nine';
            break;
    }

    // Only change code above this line
    return answer;
}
console.log(chainToSwitch(7));

// 27. Returning boolean value from Function
// We can directly return boolean value from function, example below.
function booleanValue(a, b) {
    return a < b;
}
console.log(booleanValue(10, 5));

// 28. Returning early pattern from Functions
function earlyPattern(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(earlyPattern(3, 6));

// 29. Counting counts (Small Blackjack concept)
function countingCounts(card) {
    let count = 0;
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
    }
    return 'Change Me';
}
countingCounts(2);
countingCounts(3);
countingCounts(7);
countingCounts('K');
countingCounts('A');
console.log(countingCounts(6));
