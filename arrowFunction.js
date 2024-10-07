// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greet = (name) => `Hello, ${name}`;

// Write a simple arrow function that takes two parameters and returns their sum.
const sumNums = (num1, num2) => num1 + num2;

// Write a simple arrow function that squares a number.
const squareNum = (num) => num * num;

// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
const squareArray = (arrayOfNums) => {
    let newArray = []
    arrayOfNums.forEach(element => {
        let newElement = element ** 2
        newArray.push(newElement)
    });
    return newArray;
}

// console.log(greet('Mohammad'), sumNums(1,4), squareNum(5), squareArray([1,2,3,4,5,6,7,8,9,10]))

