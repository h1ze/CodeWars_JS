// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

// Перебираем каждый элемент строки циклом for..of и преобразуем в новую строку по условию

function fakeBin2(x){
    let result = '';
    for (num of x) {
        if (+num < 5) {
            result += '0';
        } else {
            result += '1';
        }
    }
    return result;
}

console.log(fakeBin('45385593107843568'));

// Преобразуем строку в массив и трансформируем его по заданному условию через map, затем собираем обратно в строку 

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}