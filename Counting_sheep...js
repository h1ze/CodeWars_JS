// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

// Перебираем через цикл for..of каждый элемент массива и проверяем, равен ли он true

function countSheeps(arrayOfSheep) {
    let shepherd = 0;
    for(item of arrayOfSheep) {
        if (item == true) {
            shepherd++;
        }
    }
    return shepherd;
  }

// Используем метод filter. (Возвращается массив всех элементов, содержащих тру. Затем определяем количество через метод length)

  function countSheeps2(arrayOfSheeps2) {
    return arrayOfSheeps2.filter(Boolean).length;
  }