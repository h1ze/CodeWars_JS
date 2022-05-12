//Complete the solution so that it reverses the string passed into it.

//  Разбиваем на массив, переворачиваем и собираем строку. (split,reverse,join)

function solution(str){
  return str.split('').reverse().join('')
}

console.log(solution('Fly me to the moon'))