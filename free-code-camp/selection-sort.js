
'use strict'

function findSmallest(arr) {

  let smallest = arr[0];
  let smallest_index = 0;
  for (let i=1; i<arr.length; i++) {

    if(arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;

    }
  } //for i ends

  return smallest_index;

}//findSmallest func ends
function selectionSort(arr) {

  let newArr = [];
  let smallest;
  for (let i =0; i<arr.length;){

    smallest = findSmallest(arr);

    newArr.push(arr[smallest]);

    arr.splice(smallest,1);
  }
return newArr;
}//selectionSort func ends

console.log(findSmallest([5,3,8,1,2,10]));
console.log(selectionSort([5,3,8,1,2,10]));
//console.log(selectionSort([20,50,70,40]));
