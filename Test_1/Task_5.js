// Task 5: Functional Programming

// Given an array of numbers, write a function that returns a new array containing
// the squares of the positive numbers in the original array, using functional programming concepts.

function squarePositiveNumbers(arr) {

    let newArr = arr.filter( (value) => value > 0).map( (value) => value*value)
    return newArr
}

console.log(squarePositiveNumbers([1, -2, 3, -4, 5]));