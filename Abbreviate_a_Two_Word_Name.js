// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// Вариант 1. Преобразуем строку с Ф.И в массив, разбиваем массив на два с И. и Ф., получаем доступ к первым буквам массива по [0]

function abbrevName(name){

    let first = name.toUpperCase().split(' ')[0];
    let second = name.toUpperCase().split(' ')[1];
    
    return first[0] + '.' + second[0];

}

console.log(abbrevName('Sam Harris'));


// Вариант 2. Аналогично преобразуем строку в массив и работаем с первыми буквами Ф.И через [0][0] и [1][0]

function abbrevName2(name){

    let nameArray = name.split(' ');
    return (nameArray[0][0] + '.' + nameArray[1][0]).toUpperCase();

  }

  console.log(abbrevName('patrick feeney'));


// Вариант 3. Преобразуем строку в массив, затем преобразуем с отбором первых букв слов с увеличением регистра
// через map и собираем обратно в строку с разделителем '.'

  function abbrevName3(name){

    return name.split(' ').map(abbreviature => abbreviature[0].toUpperCase()).join('.');

}

console.log(abbrevName3('homer simpson'));
