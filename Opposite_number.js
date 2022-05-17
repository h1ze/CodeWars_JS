// Very simple, given an integer or a floating-point number, find its opposite.

// Вариант 1. (Умножаем аргумент на -1)

function opposite(number) {
    return number = number * -1;
  }

console.log(opposite(15));

// Вариант 2 (Можно обойтись без умножения на -1, возвращая сразу аргумент с -)

function opposite2(number2) {
    return(-number2);
  }

console.log(opposite(-23));

