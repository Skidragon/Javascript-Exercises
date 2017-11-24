'use strict'
function countAnimals(animals,count){
  let countArr = [];
  for (let i = 0; i<count.length; i++) {
  let x = new RegExp(count[i]);
  console.log(x);
  countArr.push(animals.match(x));
  }
  console.log( countArr);
  console.log("-----");
}
console.log(countAnimals("dog,cat",["dog","cat"]));//[1,1]
console.log(countAnimals("dog,cat",["dog","cat","pig"]));//[1,1,0]
console.log(countAnimals("dog,dog,cat",["dog","cat"]));//[2,1]
console.log(countAnimals("dog,dog,cat",["pig","cow"]));//[0,0]
