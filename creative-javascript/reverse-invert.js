function reverseInvert(array) {
  return array
    .filter(n => Number.isInteger(n))
    .map(n => -Math.sign(n) * parseInt(String(n).split("").reverse().join(""), 10))
}
