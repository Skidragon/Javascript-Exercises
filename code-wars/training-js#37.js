'use strict'
function countAnimals (animals,count) {

  const storeCount = [];
  const storeNumOfAnim = []
  for(let r in count){
    storeNumOfAnim.push((animals.match(new RegExp(count[r],"g")) || []));
}
  for(let r in storeNumOfAnim) {
    storeCount.push(storeNumOfAnim[r].filter(x=>x).length);
  }
  return storeCount;
}
console.log("gra,d,j,g,,id,ds".split(/\w/).length-1)
console.log(countAnimals("dog,cat",["dog","cat"])); //[1,1]
console.log(countAnimals("dog,cat",["dog","cat","pig"])); //[1,1,0]
console.log(countAnimals("dog,dog,cat,cat,cat,cat",["dog","cat"])); //[2,1]
console.log(countAnimals("dog,dog,cat",["pig","cow"])); //[0,0]

/*
///example for match()
function count1(str,char){
  return str.match(new RegExp(char,"g")).length
}
function count2(str,char){
  return str.length-str.replace(new RegExp(char,"g"),"").length;
}
function count3(str,char){
  return str.split(char).length-1;
}/example for match()
function count1(str,char){
  return str.match(new RegExp(char,"g")).length
}
function count2(str,char){
  return str.length-str.replace(new RegExp(char,"g"),"").length;
}
function count3(str,char){
  return str.split(char).length-1;
}
*/
