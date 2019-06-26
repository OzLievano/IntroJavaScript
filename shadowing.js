var bookTitle = "Le Petiti Prince"; //global
console.log(bookTitle);

function displayBookEnglish(){
  bookTitle = "The Little Prince"; //scope
  console.log(bookTitle);
}

displayBookEnglish();
console.log(bookTitle)
