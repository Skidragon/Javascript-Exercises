
'use strict'

var sum_pairs = function(ints, s) {
  let storeVal = [ints[0]];
  ints = ints.sort((val1,val2)=>val1-val2).filter(x);
  let secondValIndex;
  return ints;
}
/*
  while(ints.length>0) {
    secondValIndex = ints.indexOf(s-ints[0],1);

    if(secondValIndex===-1) {
      console.log(ints);
      ints = ints.filter(x=>x!=ints[0]);
      continue;
    }
      return [ints[0],ints[secondValIndex]];
  }
  return undefined;
}
*/

console.log(sum_pairs([2,2,1,4,4,3,3,3,10,0,3,5,2,3,4,3,1,5],11));
