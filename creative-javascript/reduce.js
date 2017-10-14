'use strict'
function tailAndHead(arr){
	let addedArr = [];
  let lenArr = arr.toString().split(",");
	for(let i = 0; i<arr.length; i++) {

    if(lenArr[i+1]===undefined) {
      break;
    }
 	addedArr.push((arr[i]%10)+Math.floor((arr[i+1]/Math.pow(10,lenArr[i+1].length-1))));

  }
  return addedArr.filter(x=>x>=0 && Number.isInteger(x)).reduce((val1,val2)=>val1*val2,1);
}
console.log(tailAndHead([1, 2, 3, 4, 5]));
console.log(tailAndHead([111,2345,66,78,900])); //should return 7293
console.log(tailAndHead([35456,782,569,2454,875])); //should return 12012
