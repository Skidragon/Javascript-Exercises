//reverse_invert([1,12,'a',3.4,87,99.9,-42,50,5.6]) = [-1,-21,-78,24,-5]
//[1,12,87,-42,50] = [-1,-21,-78,24,-5]
/*

1) filter out float values and string values

2) figure out how to reverse the numbers

3) use the map function and use a method like 0 - -i


*/
//reverse_invert([1,12,'a',3.4,87,99.9,-42,50,5.6]) = [-1,-21,-78,24,-5]
//[1,12,87,-42,50] = [-1,-21,-78,24,-5]
/*

1) filter out float values and string values

2) figure out how to reverse the numbers

3) use the map function and use a method like 0 - -i


*/

function reverseInvert(array) {

  let arr = array.filter(x => Number.isInteger(x)).map(x => {

    const storeOriginal = x;

    //converts negative values to positive to be able to calculate with them
    if (x < 0) {
      x = -x;
    }

    let newVal = "";

    //puts value into a string and reverses the numbers

    while (x > 0) {
      newVal += x % 10;
      x = Math.floor(x / 10);
    }
    x = parseInt(newVal);

    //if the original value of x was positive change it to negative

    if (storeOriginal > 0) {
      x = -x;
    }

    return x;
  });

  return arr.filter(Boolean);
}

console.log(reverseInvert([1, 12, 'a', 3.4, 87, 99.9, -42, 50, 5.6, NaN, 0, -0]));
