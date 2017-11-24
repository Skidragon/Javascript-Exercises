//need to run the code into a different interpretor because of the ...arr1
'use strict'
function maxMin(arr1,arr2){

 return Math.max(...arr1);
}


console.log(maxMin([1,3,5],[9,8,7]));
console.log(maxMin([1,10,100,1000],[0,0,0,0]));
console.log(maxMin([10,20,30,40],[111,11,1,-111]));
