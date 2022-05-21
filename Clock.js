// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    return 3600000 * h + 60000 * m + 1000 * s;
  }

console.log(past(2,30,5));


function past2(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }

  console.log(past2(1,20,24));