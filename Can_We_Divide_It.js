// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

// A few cases:

function isDivideBy(number, a, b) {
    return number % a == 0 && number % b == 0;
  }

console.log(isDivideBy(45, 5, 15));