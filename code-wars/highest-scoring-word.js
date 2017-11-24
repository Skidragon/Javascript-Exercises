'use strict'

function findScores(arr, str) {
  const newScores = [];
  arr.forEach(el => {
    let sum = 0;
    for (let i = 0; i < el.length; i++) {
      sum += str.indexOf(el[i]) + 1;
    }
    newScores.push(sum);
  })
  return newScores;
}

function high(str) {

  let letters = "abcdefghijklmnopqrstuvwxyz";
  const singleWords = str.split(" ");
  const scores = findScores(singleWords, letters);


  return singleWords[scores.indexOf(Math.max(...scores))];
}

console.log(high("the dragon mddan"));
console.log(high("nasm the man"));
