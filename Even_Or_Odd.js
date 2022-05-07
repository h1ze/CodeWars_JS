// Вариант 1. (Стандартный блок IF/ELSE)

function even_or_odd(number) {
    let result = '';
    if (number % 2 == 0) {
        result = "Even";
    } else {
        result = "Odd";
    }
    return result;
}

console.log(even_or_odd(144))


//Вариант 2. (С тернарным оператором)

function even_or_odd_2(number) {
    return number % 2 == 0 ? "Even" : "Odd";
}

console.log(even_or_odd_2(157))


// Вариант 3. (Доработанный с тернарным оператором. Если в результате операции возвращается 0, т.e false - сработает второе условие)

function even_or_odd_3(number) {
    return number % 2 ? "Odd" : "Even";
}

console.log(even_or_odd_3(158))