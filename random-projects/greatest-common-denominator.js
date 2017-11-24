'use strict'

function getDenom(arr) {
  let denomArr = [];
  arr.map((_, i) => denomArr.push(arr[i][1]));
  return denomArr;
}

function getNumer(arr) {
  let numerArr = [];
  arr.map((_, i) => numerArr.push(arr[i][0]));
  return numerArr;
}

function convertFrac(arr) {

  let numerArr = getNumer(arr);
  let denomArr = getDenom(arr);

  const originalBigDenom = Math.max(...arr);
  let commonDenom = originalBigDenom;
  for (let i = 0; i < arr.length - 1; i++) {
    if (commonDenom % denomArr[i] != 0) {
      commonDenom += originalBigDenom;
      i = -1;
    }
  }

  arr.map((_, i) => fractionStr += `(${(commonDenom/denomArr[i])*numerArr[i]},${commonDenom})`);
  return fractionStr;
}

console.log(convertFrac([
  [1, 2],
  [2, 3],
  [3, 5]
])); //30
console.log(convertFrac([
  [1, 2],
  [1, 3],
  [1, 4]
])); //12
