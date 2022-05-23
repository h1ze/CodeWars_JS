// Introduction
// The first century spans from the year 1 up to and including the year 100, 
// the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Вариант через кучу if и else, неоптимальный и непредусматривающий все возможные века

function century(year) {
    let vek = 0;
    let array = ("" + year).split('').map(Number);
            
    if (array.length == 6) {
      if (+(array[4] + "" + array[5]) >= 1) {
        vek = +(array[0] + "" + array[1] + array[2] + array[3]) + 1;
      } else {
        vek = +(array[0] + "" + array[1] + array[2]);
      }
    }  
    if (array.length == 5) {
      if (+(array[3] + "" + array[4]) >= 1) {
        vek = +(array[0] + "" + array[1] + array[2]) + 1;
      } else {
        vek = +(array[0] + "" + array[1] + array[2]);
      }
    }
    if (array.length == 4) {
      if (+(array[2] + "" + array[3]) >= 1) {
        vek = +(array[0] + "" + array[1]) + 1;
      } else {
        vek = +(array[0] + "" + array[1]);
      }
    }
    if (array.length == 3) {
      if (+(array[1] + "" + array[2]) >= 1) {
        vek = array[0] + 1;
      } else {
        vek = array[0];
      }
    }
    if (array.length == 2) {
      vek = 1;
    }
    return vek;
  }
  console.log(century(563340));

  // Вариант через Math с стрелочной функцией

  const century2 = year2 => Math.ceil(year2/100)
  
  console.log(century2(3754));

  // Через побитовый оператор ИЛИ

  function century3(year3) {
    return (year3 + 99) / 100 | 0;
  }

  console.log(century3(2022));
  

