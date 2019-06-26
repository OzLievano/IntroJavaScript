// write function that takes one parameter
//num represents "ha"

var laughString;

function laugh(num){
  laughString = ''
  if(num > 0){
    for(var i = num; i > 0 ; --i){
      laughString += 'ha';
    }
    laughString += '!';
  }

  return laughString;
}

console.log(laugh(3))
