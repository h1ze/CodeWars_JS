// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  return arr.filter((el, index) => {
    if (index % 2 === 0) {
      return el;
    }
  });
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

function removeEveryOther2(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}
