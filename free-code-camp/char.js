'use strict'
function topSecret(str) { // LBH QVQ VG!
  let decodedStr = "";
  let i = 0;
  let storePart;

  while (i < str.length) {

  storePart = str.charCodeAt(i);
    if (storePart >= 65) {
      storePart += 13;
    }
    if (storePart > 90) {
      storePart -= 26;
    }

    decodedStr += String.fromCharCode(storePart);
    i++;

  }
  return decodedStr;

} //topSecret func end


console.log(topSecret('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.'));
console.log(topSecret("SERR YBIR?"));
console.log(topSecret("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));
