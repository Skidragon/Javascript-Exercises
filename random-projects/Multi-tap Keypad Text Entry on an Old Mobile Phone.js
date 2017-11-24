'use strict'

function setCharsToButton(button, letters) {
  let buttonSetup = {};
  if (letters !== undefined) {
    for (let i = 1; i <= letters.length; i++) {
      buttonSetup[letters[i - 1]] = i;
    }
  }
  buttonSetup[button] = letters !== undefined ? 1 + letters.length : 1;
  return buttonSetup;
}

function numPadSetup() {
  const numPad = [
    setCharsToButton(1),
    setCharsToButton(2, "ABC"),
    setCharsToButton(3, "DEF"),
    setCharsToButton(4, "GHI"),
    setCharsToButton(5, "JKL"),
    setCharsToButton(6, "MNO"),
    setCharsToButton(7, "PQRS"),
    setCharsToButton(8, "STU"),
    setCharsToButton(9, "WXYZ"),
    setCharsToButton("*"),
    setCharsToButton(0, " "),
    setCharsToButton("#")
  ];
  return numPad;
}

function presses(phrase) {
  phrase = phrase.toUpperCase();
  let totalPresses = 0;
  const numPad = numPadSetup();
  let padSet = 0,
    char = 0;
  while (char < phrase.length) {
    if (numPad[padSet].hasOwnProperty(phrase[char]) === true) {
      totalPresses += numPad[padSet][phrase[char]];
      console.log(numPad[padSet], totalPresses);
      padSet = 0;
      char++;
    }
    padSet++;
  }
  return totalPresses;
}

console.log(presses("The dragon has ate the princess while he was sleeping"));
