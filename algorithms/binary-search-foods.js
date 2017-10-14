
function search(arr, value) {

var low=0;
var mid;
var high=arr.length-1;

while(low<=high) {

mid=Math.floor(high+low)/2; //1st: high = 6 / mid = 3 ... 2nd: high = 5 / mid = 2


//returns cherry at 2nd round
if(value===arr[mid]) {

  return value;
}

else if (value>arr[mid]) {

  low = mid+1;
}
//1st:value = 2 and mid = 3, value < mid... arr[mid] = "dates"
else {
  high = mid-1;
}


} //while loop ends


return "value does not exist";



} //search function ends




var arr = ['apple', 'banana', 'cherry', 'dates', 'eggs', 'figs', 'grapes'];

var foundAt = search(arr, 'eggs');
console.log(foundAt);


foundAt = search(arr, 'zebra') // -1 for not found
console.log(foundAt);
