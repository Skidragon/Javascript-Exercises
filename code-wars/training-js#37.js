
function countAnimals (str,selectArr) {

  if(str.match())
}


console.log(countAnimals("dog,cat",["dog","cat"])); //[1,1]
console.log(countAnimals("dog,cat",["dog","cat","pig"])); //[1,1,0]
console.log(countAnimals("dog,dog,cat",["dog","cat"])); //[2,1]
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
