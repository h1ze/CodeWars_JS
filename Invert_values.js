// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    let newArray = [];
    for (item in array) {
        if(item != 0) {
        newArray[item] = -array[item];
        }
    }
    return newArray;
 }

console.log(invert([0]))

function invert2(array) {
    return array.map( invertArray => invertArray === 0 ? invertArray : -invertArray);
 }

 console.log(invert2([6,-7,-8,9,10]))