
'use strict'

function findSimilarity(strList, str) {

  let beginStr = str[0];
  let endStr = str[str.length-1]
  let newArr = strList.split(" ").filter(x=>str.length===x.length && str[0]===x[0] &&
  str[str.length-1]===x[x.length-1]);
  
  return newArr.join(" ");
}




console.log(findSimilarity("bag dog dig dot doog dogs","dog"));
console.log(findSimilarity("bag dog dig dot doog dogs","dig"));
console.log(findSimilarity("bag dog dig dot doog dogs","dot"));
console.log(findSimilarity("bag dog dig dot doog dogs","god"));
