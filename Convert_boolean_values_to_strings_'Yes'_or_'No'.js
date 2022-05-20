//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Через тернарный оператор

function boolToWord( bool ){
  return bool == true ? bool = 'Yes' : bool = 'No';
  }


// Оптимизированный вариант через тернарный оператор. (Если bool true, автоматически сработает вариант после ?, прописывтать это в условии нет необходимости)

function boolToWord2( bool2 ){
    return bool2 ? 'Yes':'No';
  }