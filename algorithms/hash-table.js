/*function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");*/
'use strict'
function fruit(name,price) {
  this.name = name;
  this.price = price;
}
function vegetable(name,price) {
  this.name = name;
  this.price = price;
}

let apple = new fruit("apple",1.52);
let blueberries = new fruit("blueberries",5.52);
let lettuce = new vegetable("lettuce",1);


const foods = {fruit,vegetable};

console.log(foods);
/*
const voter(name,voted) = {
  this.name = name;
  this.voted = 0;
};
function checkVoter(name) {
  if (voter[name]===undefined) {

    return `${name} is allowed to vote.`;
  }
  else {
    console.log(voter);
    return `Get ${name} out of here!`;
  }
}
console.log(checkVoter("John"));
console.log(checkVoter("Mark"));
console.log(checkVoter("John"));
console.log(checkVoter("John"));
console.log(checkVoter("Mary"));
*/
