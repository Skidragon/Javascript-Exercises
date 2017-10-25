
'use strict'

function find20(arr,num) {

  const endOfArr = arr.indexOf(arr[arr.length-1]);
  const approvedArr = [];
  const solutionsStr = [];
  let findDivisable = 0;
  let i = 0;

  while(i!=arr.length) {
    if(20%arr[i]===0) {
      approvedArr.push(arr[i]);
    }
    i++;
  }
  for(let n=0; n<approvedArr.length; n++) {
    findDivisable = 20/approvedArr[n];
    if(approvedArr.indexOf(findDivisable)!=-1) {
      solutionsStr.push(`${approvedArr[n]} and ${findDivisable} = 20`);
    }
  }
  return solutionsStr.length>=1 ? solutionsStr:-1;
} //func find20 ends

console.log(find20([1,2,7,8,3,4,6,10,20,15,5]));
