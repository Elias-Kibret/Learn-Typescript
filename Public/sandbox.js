"use strict";
// let great:Function
//Example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// Example
let LogFDetails;
LogFDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
