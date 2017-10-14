
'use strict'
function addUp(arr) {

  if(arr.length===1) {
    return arr[0];
  }
    return arr.shift() + addUp(arr);
}

function GCD(val1,val2) {

  if(val2===0) {
    return val1;
  }
  else {
  return GCD(val2,val1%val2);
}
}

console.log(addUp([3,5,7,10]));
console.log(GCD(3288,24));
console.log(3288/24);

function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  else {
    const pivot = arr[3];
    let less = [];
    let greater = [];
      for (let i = 0; i<arr.length; i++) {
        if(arr[i]<pivot){
          less.push(arr[i]);
        }
      } //less for loop ends
      for (let i = 0; i<arr.length; i++) {
        if(arr[i]>pivot){
          greater.push(arr[i]);
        }
      } // greater for loop ends
      let newArr = []
      return quicksort(less).concat(pivot).concat(quicksort(greater));
  }
} //quicksort func ends

console.log(quicksort([5,4,8,7,2,1]));
