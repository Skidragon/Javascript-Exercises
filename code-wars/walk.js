function isValidWalk(walk) {

var lengthOfWalk = walk.length===10 ? true : false;
var returnToStart = true;

var n=0,s=0,w=0,e=0;
var walkBlock = 0;

while (walkBlock!=10 && walk.length==10) {

if(walk[walkBlock]=='n') {
  n++;
  walkBlock++;
  continue;
}

  if(walk[walkBlock]=='s') {
  s++;
  walkBlock++;
  continue;
}
if(walk[walkBlock]=='e') {
  e++;
walkBlock++;
  continue;
}
if(walk[walkBlock]=='w') {
  w++;
walkBlock++;
  continue;
}

}



if(n!=s || w!=e) {
	returnToStart = false;
}


  return returnToStart && lengthOfWalk;
}

console.log(isValidWalk(['w','n','s','s','w','e','w','e','n','s']))
