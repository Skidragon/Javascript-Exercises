//look up multiple ways to do this and experiment
'use strict'

function mirrorImage(arr) {

  let storeRevVal = [];
  let remainder = 0;
  let a, b;

  arr = arr.some((x, i) => {
    a = x;
    b = arr[i + 1];
    
    if (x < 10) {
      return a === b;
    }

    if (x >= 10) {

      remainder = arr[i + 1];
      storeRevVal = [];

      while (remainder > 0) {
        storeRevVal.push(remainder % 10);
        remainder = Math.floor(remainder / 10);
      }

      return a === parseInt(storeRevVal.join(""));
    }
  });
  return arr === true ? [a, b] : [-1, -1];
}


console.log(mirrorImage([2, 5, 77, 56, 65, 4]));
