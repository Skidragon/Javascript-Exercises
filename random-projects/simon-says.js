'use strict'
function simonSays() {

  const colorArr = ["r","g","b","y"];
  const storeColors = [];
  const max = 3, min = 0;
  let input;
  let random;
  let i = 0;
  let keepScore = 0;
  do {
  random = Math.floor(Math.random() * (max - min + 1)) + min;

  if(storeColors[i]===undefined) {
    storeColors.push(colorArr[random]);
    i=0;
  }
  console.log(storeColors);

  input = prompt("What are the letters");

  if (input === storeColors[i]) {
    i++;
  }
    else {
     break;
    }
  keepScore++;

} while(input!==storeColors[i]);

  return `Game over... Your Highscore is ${keepScore}.`;
}

console.log(simonSays());
