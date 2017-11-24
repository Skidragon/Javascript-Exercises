'use strict'

function addThemAll(totalChange) {
  return totalChange.reduce((sum, order) => sum + order, 0);
}

function duplicateChange(money, sameChange) {
  let totalChange = 0;
  while (totalChange !== money && totalChange < money) {
    totalChange += sameChange;
  }
  return totalChange;
}


console.log(getCombinations(10,[5,3,2],0));

function countChange(money, coins) {
  let ways = 0;
  if (addThemAll(coins)===money) {
    ways++;
  }

  for (let i = 0; i < coins.length; i++) {
    if (duplicateChange(money, coins[i]) === money) {
      ways++;
    }
  }
  while(coins.length!=0) {

    coins.splice(0);
    }

  return ways;
}
console.log(countChange(4, [1, 2]));
console.log(countChange(10, [5, 2, 3]));
console.log(countChange(11, [5, 7]));
