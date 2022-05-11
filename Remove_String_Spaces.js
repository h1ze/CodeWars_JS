// Simple, remove the spaces from the string, then return the resultant string.

// 1 ВАРИАНТ (МЕТОДЫ SPLIT и JOIN)

function noSpace(x){
    return x.split(' ').join('');
}

console.log(noSpace('Проверяем   работу            функции.'))


// 2 ВАРИАНТ (МЕТОД REPLACE + РЕГУЛЯРКА)


function noSpace2(x){
    return x.replace(/\s/g, '');
  }

  console.log(noSpace2('Проверяем    работу   функции.'))