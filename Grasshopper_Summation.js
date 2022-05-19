// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// Вариант 1 (Через цикл)

var summation = function (num) {
    let result = 0;
    for (i = 1; i <= num; i++) {
      result += i;    
  }
    return result;
  }

console.log(summation(5));

//  Вариант 2. (через алгебру)

function summation2(num2) {
    return num2 * (num2 + 1) / 2;
  }

console.log(summation2(25));