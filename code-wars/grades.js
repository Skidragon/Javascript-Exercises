/*Coding in function ```countGrade```. function accept 1 parameters ```scores```, it's a number array. Your task is to count the grade distribution of the scores, to return an object like this:
```javascript
{S:888, A:888, B:888, C:888, D:888, X:888}
```
Grading rules:
```
Grade S: Full marks(score=100)
Grade A: score<100 and score>=90
Grade B: score<90 and score>=80
Grade C: score<80 and score>=60
Grade D: score<60 and score>=0
Grade X: score=-1(The cheating guy gets a score like that)*/

'use strict'

function countGrade(scores) {
  return {
    'S': scores.filter(s => s == 100).length,
    'A': scores.filter(a => a < 100 && a >= 90).length,
    'B': scores.filter(b => b < 90 && b >= 80).length,
    'C': scores.filter(c => c < 80 && c >= 60).length,
    'D': scores.filter(d => d < 60 && d >= 0).length,
    'X': scores.filter(x => x == -1).length,
  };
}

console.log(countGrade([50, 70, 90, 100]));
console.log(countGrade([-1, 50, 80, 80, 100]));
console.log(countGrade([85, 90, 95, 100, 100]));
