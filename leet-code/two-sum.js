'use strict'
let twoSum = function(nums, target) {
target=4;
    nums = nums.slice(0,nums.indexOf(target)-1);
console.log(target,nums);
    for(let out=0; out<nums.length-1; out++) {

      for(let inner=1; inner<nums.length; inner++)  {

        let add = nums[out]+nums[inner];
        if(add>target) {
          break;
        }
      if(add==target) {
        return nums[out],nums[inner];
        }
      }
    }

 return -1;
}


console.log(twoSum([1,2,3,5,6]),4);
