// Global scope - identifiers can be accessed everywhere
//within your program.

//function scope - identifiers can be accessed everywhere
//inside the function it was defined in.

var james = "I'm looking for this book..."; //global

function library() {
  var librarian = "oh you'll want to look in the classic"
  "literature section, follow me"; //function scope
  function classicliterature(){
    var book = "Great Expectations"; //function scope
    console.log(james);
  }
}
