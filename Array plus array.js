// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray2(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }


  function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a,b) => a + b) + arr2.reduce((a,b) => a + b);
  }


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))