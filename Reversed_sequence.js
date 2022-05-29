// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
    let array = [];
    let i = 0;
    while (n > 0) {
        array[i] = n;
        n--;
        i++;
    }
    return array;
  };



  const reverseSeq2 = n => {
    let array = [];
      for (let i =n ; i > 0; i--) {
        array.push(i);
        } return array;
};