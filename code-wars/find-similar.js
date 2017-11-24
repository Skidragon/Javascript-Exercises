/*Coding in function ```findSimilarity```. function accept two parameters: ```str```, a sentence contains some words, separated by spaces; ```word```, a sample word.

Your task is to keep the words that are similar to the sample word, and to remove the other words.

The similarity is defined as: the same length as the sample; the letter at the beginning and the end of word are same as the sample too.

If there are no similar words in the sentence, should return an empty string.

Some examples:
```
findSimilarity("bag dog dig dot doog dogs","dog") should return "dog dig"
findSimilarity("bag dog dig dot doog dogs","dig") should return "dog dig"
findSimilarity("bag dog dig dot doog dogs","dot") should return "dot"
findSimilarity("bag dog dig dot doog dogs","god") should return ""
```

Hint: Use filter() will make your work easier; If you don't know how to solve the kata, please refer to the examples of lesson. */

'use strict'

function findSimilarity(str, word) {

  if(str.match(/d.g/g)) {
    let 
  }
}

console.log(findSimilarity("bag dog dig dot doog dogs","dog"));
console.log(findSimilarity("bag dog dig dot doog dogs","dig"));
console.log(findSimilarity("bag dog dig dot doog dogs","dot"));
console.log(findSimilarity("bag dog dig dot doog dogs","god"));
