'use strict'


function reverseNumber(num) {
  if (num < 10) {
    return num;
  }
  let remainder = num;
  const arr = [];
  while (remainder > 0) {
    arr.push(remainder % 10)
    remainder = Math.floor(remainder / 10)
  }
  return parseInt(arr.join(""));
}

function reverseInvert(array) {
  return array.filter(x => Number.isInteger(x)).
  map(x => {
    let sign = Math.sign(x);
    let newValue = reverseNumber(Math.abs(x));
    return sign === 1 ? -newValue : newValue;
  });
}

console.log(reverseInvert([1, 12, 'a', 3.4, 87, 99.9, -42, 50, 5.6]));
/*
console.log(reverseInvert([1,2,3,4,5]), [-1,-2,-3,-4,-5]));
console.log(reverseInvert([-10]), [1]));
console.log(reverseInvert([-9,-18,99]), [9,81,-99]));
console.log(reverseInvert([1,12,'a',3.4,87,99.9,-42,50,5.6]),[-1,-21,-78,24,-5]));
*/
