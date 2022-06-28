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
