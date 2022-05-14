// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Берем по очереди значение каждого элемента массива через цикл for..of, возводим в квадрат, суммируем в result

function squareSum(numbers){
    let result = 0;
    for(item of numbers) {
        result += item**2;
    }
    return result;
}

console.log(squareSum([1,2]));

// Через метод reduce

function squareSum2(numbers2){
    return numbers2.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }

  console.log(squareSum2([1,3,5,4]));

// Сокращенный вариант  через reduce с стрелочной функцией

  function squareSum3(numbers3){
    return numbers3.reduce((sum, n) => n*n + sum, 0);
  }

  console.log(squareSum3([1,2,4]));