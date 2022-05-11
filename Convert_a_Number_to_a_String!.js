// We need a function that can transform a number into a string.
// What ways of achieving this do you know?

// Вариант 1. Через функцию String

function numberToString(num) {
   return String(num)
  }

console.log(typeof(numberToString(546)))


// Вариант 2. Через метод toString

function numberToString2(num2) {
    return num2.toString();
  }

  console.log(typeof(numberToString2(35)))