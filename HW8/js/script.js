"use strict"

// 1 Task 


console.log(addThemAll(2,4));
console.log(addThemAll(1,2,3,4));
console.log(addThemAll(5,5,10)); 

function addThemAll(...args) {
    return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
};

// 1 Task - one line solution (with arrow function)


const addThemAll = (...args) => args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(addThemAll(2,4)); 
console.log(addThemAll(1,2,3,4)); 
console.log(addThemAll(5,5,10)); 


// 2 Taks


console.log(multiply(5)(5));
console.log(multiply(2)(-2));	
console.log(multiply(4)(3));	

function multiply(a) {
	return function (b) {
     return a * b
    }
};