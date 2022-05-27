// Complete the solution so that it reverses all of the words within the string passed in.

// Используем только метод split() для создания массива, дальше создаем новый массив и инвертируем созданный через цикл for..in и индексы

function reverseWords(str){
    let newStr = '';
    let array = str.split(' ');
    let newArray = [];
    let newArrayIndex = 0;
    for (i = array.length -1; i >= 0; i--) {
        newArray[newArrayIndex] = array[i];
        newArrayIndex++;
    }
    newStr = newArray.join(' ');
    return newStr;
  }

  console.log(reverseWords("The greatest victory is that which requires no battle"));


// Все через методы

  function reverseWords2(str){
      return str.split(' ').reverse().join(' ');
  }

  console.log(reverseWords2("The greatest victory is that which requires no battle"));