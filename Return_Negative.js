// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Вариант 1. (Стандартное IF/ELSE)

function makeNegative(num) {
    if (num > 0) {
        num = Number('-' + num);
    }
    return num;
  }
  console.log(makeNegative(0));

//   Вариант 2. (Тернарный оператор)

function makeNegative2(num2) {
    return num2 < 0 ? num2 : -num2;
}

console.log(makeNegative2(-1954));

// Вариант 3. (С Math)

function makeNegative3(num3) {
    return -Math.abs(num3);
  }

  console.log(makeNegative2(234));