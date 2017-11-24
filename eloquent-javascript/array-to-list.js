'use strict'

function arrayToList(arr) {
  let list = null;
  arr.reverse().forEach(x => list = {
    value: x,
    rest: list
  });
  return list;
}

function listToArray(obj) {
  const arr = [];
  for (let node = obj; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

function prepend(value, rest) {
  return {
    value: value,
    rest: rest
  };
}

function nth(list, n) {

  if (!list) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, prepend(30, null))));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
