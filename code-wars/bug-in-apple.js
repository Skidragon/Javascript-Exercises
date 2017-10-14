'use strict'

function sc(arr) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i].indexOf("B")!=-1) {
      return [i,arr[i].indexOf("B")];
    }
  }
}

let apple=[
["B","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];
console.log(sc(apple));

let apple2=[
["A","A","A","A","A"],
["A","B","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];
console.log(sc(apple2));

let apple3=[
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","B","A","A","A"]
];
console.log(sc(apple3));
