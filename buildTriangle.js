// create buildTriangle()
//accepting input triangle at widest width
// return a string representation


makeLine(length){
  var line ="";
  for (var j =1; j <= length; j++){
    line += "*"
  }
  return line + "\n";
}

// call makeline() in buildTriangle()

console.log(length(5));

function buildTriangle(x){
  var triangle = ""

  for(t = 1; t<= x; t++){
    triangle += makeLine(t)
  }
  return triangle;
}

console.log(buildTriangle(10)); 7yy
