

function digital_root(n) {

if(n<10) {
return n;
}

n = n.toString();
n.split("");
var addUp = 0;

for(var num =0; num<n.length; num++) {


  addUp+=parseInt(n[num]);
}


  return digital_root(addUp);


}//digital_root func ends

console.log(digital_root(95));
