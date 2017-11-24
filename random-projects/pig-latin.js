'use strict'

function isVowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.some(compareVowel => compareVowel === str);
}

function countInitCons(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i]) === true) {
      break;
    }
    count++;
  }
  return count;
}

function translatePigLatin(str) {

  if (isVowel(str[0]) === true) {
    return str + "way";
  }

  const getConCount = countInitCons(str);
  let firstCons = "";
  for (let i = 0; i < getConCount; i++) {
    firstCons += str[i];
  }

  return str.slice(getConCount) + firstCons + "ay";
}

console.log(translatePigLatin("glove"));
console.log(translatePigLatin("ove"));
