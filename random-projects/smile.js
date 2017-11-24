'use strict'

function checkEyes(eyesStr) {
  const eyesObj = {
    ":": 1,
    ";": 1
  };
  return eyesObj[eyesStr[0]] === 1 ? true : false;
}

function checkNose(noseStr) {
  const noseObj = {
    "-": 1,
    "~": 1
  };
  return noseObj[noseStr[1]] === 1 ? true : false;
}

function checkSmile(smileStr) {
  const smileObj = {
    "D": 1,
    ")": 1
  };
  return smileObj[smileStr[smileStr.length - 1]] === 1 ? true : false;
}

function countSmileys(arr) {
  let i = 0;
  arr.forEach(x => {
    if (x.length === 2) {
      checkEyes(x) === true && checkSmile(x) === true ? i++ : i;
    }
    if (x.length === 3) {
      checkEyes(x) === true && checkNose(x) && checkSmile(x) === true ? i++ : i;
    }
  });
  return i;
}
