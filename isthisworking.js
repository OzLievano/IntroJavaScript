// a function is always going to retun some value back to the
//caller . if a return value is not specified
// then the function will just return undefefined.

function isPrime(integer) {
  for( var x = 2; x < integer, x++){
    if(integer % x === 0){
      console.log(integer + ' is divisible by ' + x);
      return false;
    }
  }
  return true;
}
isPrime(11);

//console.log is for printing out values to test code
//
