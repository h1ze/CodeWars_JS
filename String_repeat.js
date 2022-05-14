// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
    let stroka = ''
    for (i = 0; i < n; i++) {
      stroka += s
    }
    return stroka;
  }

console.log(repeatStr(3,'hello'));

function repeatStr2 (n2, s2) {
    return s2.repeat(n2);
}

console.log(repeatStr2(5,'war'));