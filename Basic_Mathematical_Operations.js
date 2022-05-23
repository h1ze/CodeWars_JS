// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Через IF-ELSE

function basicOp(operation, value1, value2) {
    let result = 0;
    if (operation == '+') {result = value1 + value2}
    else if (operation == '-') {result = value1 - value2}
    else if (operation == '*') {result = value1 * value2}
    else {result = value1/value2}
    return result;
}

console.log(basicOp('/',15,3));

// Через SWITCH

function basicOp2(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

console.log(basicOp2('*',15,3));