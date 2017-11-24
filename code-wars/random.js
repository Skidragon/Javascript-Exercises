/*Coding in function ```rndCode```. Your task is to generate a random verification code. In accordance with the following rules:

1) the code length should be 8;

2) The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM".

3) The 3rd-6th characters should be four numbers.

4) the 7th and 8th characters should be two symbols. The range is "~!@#$%^&*".

5) If Your code runs 100 times, It should generate 100 non duplicate verification codes.

Some valid verification code examples:
```
AB1234#$ MG6145$@ KJ2249@&
CD5678%^ IG7593~% FH8638@&
EF9012!@ GB7047%$ KD7604^%
```*/
'use strict'
function recursion(repeat,str) {
  if (repeat===0) {
    return "";
  }
  else {
    return str[~~(Math.random()*str.length)] + recursion(repeat-1,str);
  }
}

const storeCodes = {};

function rndCode() {
  const upCaseArr = 'ABCDEFGHIJKLM';
  const numbersArr = '123456789';
  const symbolsArr = '~!@#$%^&*';
  let newCode;
  do {
  newCode = "";
  newCode += recursion(2,upCaseArr);
  newCode += recursion(4,numbersArr);
  newCode += recursion(2,symbolsArr);
} while (storeCodes.hasOwnProperty(newCode)===true);
  storeCodes[newCode]=true;
  return newCode;
}
for(let i =0; i<1000; i++) {
console.log(rndCode());
}
