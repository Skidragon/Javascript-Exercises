//three different ways to get a sum of a list

function funcSumNum(arr) {

  return arr.reduce((sum,order)=>sum+order,0);

}

function forSumNum(arr) {

 let total = 0;

 for(let num=0; num<arr.length; num++) {
   total+=arr[num];
 }

return total;

}

function forRecNum(arr) {

  if(arr.length===1) {
    return arr[0];
}
  return arr.pop() + forRecNum(arr);
  }



console.log(funcSumNum([1, 2, 3, 4, 5, 6]));
console.log(forSumNum([1, 2, 3, 4, 5, 6]));
console.log(forRecNum([1, 2, 3, 4, 5, 6]));
