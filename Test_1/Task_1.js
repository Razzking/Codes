// Task 1: Array Methods

// Given an array of numbers, use Array methods to find the sum of all even numbers in the array.

function sumEvenNumbers(arr) {
    return arr.reduce( (acc ,cvalue ) => {

        if(cvalue %2 === 0 && cvalue > 0){
            return acc + cvalue;
        }
        
        return acc += 0;
    }, 0)
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
  