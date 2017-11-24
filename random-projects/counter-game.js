'use strict'

function counterGame() {
  let number = 1;
  let friendNumber = 1;
  let whichWay = "+";
  const arr = [];
  while (number <= 100) {

    if (!(number % 7)) {
      whichWay = whichWay === "+" ? "-" : "+";
    }
    if (!(number % 11)) {
      whichWay === "+" ? friendNumber += 1 : friendNumber -= 1;
    }
    if (friendNumber > 10) {
      friendNumber = 1;
    }
    if (friendNumber < 1) {
      friendNumber = 10;
    }
    arr.push(`friend: ${friendNumber}: says ${number}`);
    number++;
    whichWay === "+" ? friendNumber += 1 : friendNumber -= 1;
  }
  return arr;
}

console.log(counterGame());
