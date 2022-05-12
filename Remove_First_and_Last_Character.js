// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//      Вариант 1. Через цикл и индекс

function removeChar(str) {

    let result = '';
    for(item_1 in str) {
        if (item_1 != 0 && item_1 != str.length -1) {
        result += str[item_1];
        }
    }
    return result;
};
   
   console.log(removeChar('asdvc'))

//      Вариант 2. Метод slice
   
   function removeChar2(str2) {
    return str2.slice(1, -1);
  }

  console.log(removeChar2('dsaczx'))

//      Вариант 3. Метод substring

  function removeChar3(str3){
    return str3.substring(1, str3.length-1);
   };

   console.log(removeChar3('поезд'))