// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle

// Через цикл for..in перебираем по очереди элементы массива, сравниваем каждое с искомым. Когда находим, возвращаем индекс в result

function findNeedle(haystack) {
   let result = 0;
   for (item in haystack) {
       if (haystack[item] == 'needle') {
       result = item;
       break;
       }
   }
   return `found the needle at position ${result}`;
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));


// Через медод indexOf

function findNeedle2(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }

  console.log(findNeedle(['hay', 'junk', 'needle', 'randomJunk']));