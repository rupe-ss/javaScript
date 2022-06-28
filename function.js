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
