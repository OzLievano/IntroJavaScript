// a functions return value can be stored
//in a variable or reused throughout
// your program as a function Argument

// example

//returns the sum of two numbers

function add(x,y) {
  return x + y;
}

// returns the value of a number divided by 2

function divideByTwo(num) {
  return num / 2;
}

var sum = add(5,7); // call add function and store in sum
var average = divideByTwo(sum)
