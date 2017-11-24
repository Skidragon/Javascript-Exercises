/*Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10
*/
'use strict'

function goodVsEvil(good, evil) {
  const goodCount = good.split(" ").map(x => parseInt(x));
  const evilCount = evil.split(" ").map(x => parseInt(x));

  const goodWarriors = {
    Hobbits: goodCount[0],
    Men: goodCount[1] * 2,
    Elves: goodCount[2] * 3,
    Dwarves: goodCount[3] * 3,
    Eagles: goodCount[4] * 4,
    Wizards: goodCount[5] * 10
  };

  const evilWarriors = {
    Orcs: evilCount[0],
    Men: evilCount[1] * 2,
    Wargs: evilCount[2] * 2,
    Goblins: evilCount[3] * 2,
    "Uruk Hai": evilCount[4] * 3,
    Trolls: evilCount[5] * 5,
    Wizards: evilCount[6] * 10
  };

  let sumOfGood = 0,
    sumOfEvil = 0;

  for (let key in goodWarriors) {
    sumOfGood += goodWarriors[key];
  }

  for (let key in evilWarriors) {
    sumOfEvil += evilWarriors[key];
  }

  if (sumOfGood === sumOfEvil) {
    return "Battle Result: No victor on this battle field";
  }

  return sumOfGood > sumOfEvil ? 'Battle Result: Good triumphs over Evil' :
    'Battle Result: Evil eradicates all trace of Good';
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'));
