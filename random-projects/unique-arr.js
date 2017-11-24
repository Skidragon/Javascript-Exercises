'use strict'
function uniteUnique(...arr) {
  const numArr = [];
  const storeUniqueNum = {};
  for(let i = 0; i<arr.length; i++) {
    numArr.push(...arr[i]);
  }
  for(let i = 0; i< numArr.length;) {
    if(storeUniqueNum[numArr[i]]===true) {
        numArr.splice(i,1);
        continue;
    }
    storeUniqueNum[numArr[i]] = true;
    i++;
  }

  return numArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2,1])); //[1,3,2,5,4]
