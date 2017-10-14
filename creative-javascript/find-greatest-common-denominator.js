'use strict'

function findGCD(val1,val2) {
  if (val2===0) {
    return val1;
  }
  return findGCD(val2,val1%val2)

}

console.log(findGCD(24,32));

console.log(findGCD(1680,640));
console.log(findGCD(640,1680));
