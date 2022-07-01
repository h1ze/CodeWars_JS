// Given a number n, return the number of positive odd numbers below n, EASY!
function oddCount(n) {
  let result = 0;
  for (let i = n; i > 1; i--) {
    if (i % 2 !== 0) {
      result++;
    }
  }
  return result;
}
