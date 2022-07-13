// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

// As you can see, the lists are cascading; ie, they overlap, but never out of order.

function eachCons(array, n) {
  let result = [];
  let subresult = [];
  for (let index = 0; index < array.length - (n - 1); index++) {
    for (let i = index; i < index + n; i++) {
      subresult.push(array[i]);
    }
    result.push(subresult);
    subresult = [];
  }
  return result;
}

function eachCons2(array, n) {
  return array
    .reduce((acc, value, index) => {
      acc[index] = array.slice(index, index + n);
      return acc;
    }, [])
    .filter((el) => el.length === n);
}

console.log(eachCons([1, 2, 3, 4], 2));
console.log(eachCons([1, 2, 3, 4], 4));

console.log(eachCons2([1, 2, 3, 4], 2));
console.log(eachCons2([1, 2, 3, 4], 4));
