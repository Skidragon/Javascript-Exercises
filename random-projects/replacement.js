'use strict'
function initialCase(letter) {
  if(letter[0]===letter[0].toUpperCase()) {
    return true;
  }
  else {
  return false;
}
}

function myReplace(str, before, after) {
  return initialCase(before) === true ? str.replace(before, after[0].toUpperCase() + after.slice(1, after.length)) : str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("His name was John", "John", "tom")); //His name was Tom
