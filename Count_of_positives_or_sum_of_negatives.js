// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    let countPositive = 0;
    let sumNegatives = 0;
    if (input == null) {
        return [];
    }
    for(item of input) {
        if (item > 0) {
            countPositive++;
        } else {
            sumNegatives += item;
        }
    }
    if (countPositive !== 0 || sumNegatives !==0) {
        return [countPositive, sumNegatives];
    } else {
    return [];
    }
}

console.log(countPositivesSumNegatives([0,0]));


// Убрал лишнее условие и оптимизировал начальное

function countPositivesSumNegatives2(input) {
    let countPositive = 0;
    let sumNegatives = 0;
    if (input == null || input.length == 0) {
        return [];
    }
    for(item of input) {
        if (item > 0) {
            countPositive++;
        } else {
            sumNegatives += item;
        }
    }
    return [countPositive,sumNegatives];
}

console.log(countPositivesSumNegatives2([0,0]));


