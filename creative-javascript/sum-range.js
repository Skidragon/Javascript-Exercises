
function sumAll(arr) {
  
  let [minNum,maxNum] = [Math.min(arr[0],arr[1]),[Math.max(arr[0],arr[1])]];
  let rangeArr = [];
  
  for(let num = minNum; minNum<=maxNum; minNum++) {
    
    rangeArr.push(minNum);
    
  }
  
  return rangeArr.reduce((sum,order)=>sum+order);
}

console.log(sumAll([5, 10]));





function sumAll(arr) {

  var sortedArr = arr.sort((a,b) => a-b);
  var firstNum = arr[0];
  var lastNum = arr[1];
  // Using Arithmetic Progression summing formula

  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
  return sum;
}
