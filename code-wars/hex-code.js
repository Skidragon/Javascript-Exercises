function colorOf(r,g,b) {
  
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  
  r = r.length < 2 ? "0"+r : r;
  g = g.length < 2 ? "0"+g : g;
  b = b.length < 2 ? "0"+b : b;
  
  return "#" + r + g + b;


}

//improved way:

function colorOf(r,g,b){
  r.toString(16).length < 2 ? r = '0' + r.toString(16) : r = r.toString(16);
  g.toString(16).length < 2 ? g = '0' + g.toString(16) : g = g.toString(16);
  b.toString(16).length < 2 ? b = '0' + b.toString(16) : b = b.toString(16);
  
  return '#' + r + g + b;
}
