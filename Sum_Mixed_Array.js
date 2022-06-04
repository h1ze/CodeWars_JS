// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    return x.map(Number).reduce((a,b) => a + b, 0);
}

console.log(sumMix([9, 3, '7', '3']));