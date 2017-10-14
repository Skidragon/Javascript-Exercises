'use strict'
function threeInOne(arr){
 let newArray = [];
 for(let i=0; i<arr.length;) {
   newArray.push(arr.splice(0,3).reduce(((x,z)=>x+z)));
 }
 return newArray;
}

    console.log(threeInOne( [1,2,3]));
    console.log(threeInOne( [1,2,3,4,5,6] ));
    console.log(threeInOne( [1,2,3,4,5,6,7,8,9] ));


    function threeInOnes(arr){
      let na = [];
      //starts from the right to left instead of left to right
      let index = -1;
      for ( let now = 0; now < arr.length; now++ )
      {
        if ( now % 3 == 0 ) {
          index++;

          //initializes next value of na element because it will return NaN
          na[index]=0;
        }
        na[index] += arr[now];
      }
      return na;
    }
    console.log(3%3);

    console.log(threeInOnes( [1,2,3]));
    console.log(threeInOnes( [1,2,3,4,5,6] ));
    console.log(threeInOnes( [1,2,3,4,5,6,7,8,9] ));
