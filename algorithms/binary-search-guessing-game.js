var maximum = 10000; //10,000
var minimum = 0;
var input = 0, numInput = 0;
var randomNumber = Math.floor(Math.random() * (maximum - minimum)+minimum);
var numOfGuesses = 0;

console.log(randomNumber);

while (numInput != randomNumber) {
numOfGuesses++;

input = prompt("Guess a number between " + minimum + " and " + maximum);
numInput = parseInt(input);

if(numInput==randomNumber) {
  console.log("Correct!" + " It took you " + numOfGuesses +" guesses.");
}

 if (randomNumber>numInput && numInput > minimum) {
  minimum = numInput;
   continue;
}
 if (randomNumber<numInput && numInput < maximum) {
  maximum = numInput;
}


}
