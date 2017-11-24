'use strict'
function numLen(num) {
  return String(num).length;
}
function convertToRoman(num) {

  const romanObj = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };
  let romStr = "";
  for(let i = 0; i< Object.keys(romanObj).length; i++) {
  }

  return romStr;
}
console.log(convertToRoman(500));
