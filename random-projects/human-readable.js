
'use strict'
function addZeros(num) {
  let numStr = String(num);
  while(numStr.length!=2) {
    numStr = "0" + numStr;
  }
  return numStr;
}

function humanReadable(seconds) {
  let hours = 0, minutes = 0;
  let remainingTime = seconds;

  if (remainingTime >= 3600) {
  hours = ~~(remainingTime/3600);
  remainingTime %= 3600;
}
 if (remainingTime >= 60) {
  minutes = ~~(remainingTime/60);
  remainingTime %= 60;
}
  return `${addZeros(hours)}:${addZeros(minutes)}:${addZeros(remainingTime)}`
}

console.log(humanReadable(0));
console.log(humanReadable(5));
console.log(humanReadable(60));
console.log(humanReadable(863));
console.log(humanReadable(3599));
