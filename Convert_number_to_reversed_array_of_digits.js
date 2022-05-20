// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


// Преобразуем число в строку через + '', переводим в массив, переворачиваем, преобразуем элементы в массива в число через map c +
function digitize(n) {
   return (n + '').split('').reverse().map(item => +item);
  }

  console.log(digitize(1989));


// Аналогично, только для единообразия число в строку преобразуем методом toString(), элементы массива в число через map(Number)

  function digitize2(n) {
    return (n.toString().split('').reverse().map(Number));
   }
 
   console.log(digitize2(2022));