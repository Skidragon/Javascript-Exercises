function prime(num) {
  const NUM_SQRT = Math.sqrt(num);
  
  
  if (num%2===0) {
   return "It is an even number"; 
  }
  console.log(NUM_SQRT);
  if (num%3===0 || num%5===0 || Number.isInteger(NUM_SQRT)) {
   return "It is an odd number"; 
  }
  else {
   return "It is a prime number"; 
  }
}


console.log(prime(23));
