//book is a Javascript object
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday' 
}

//convert book to JSON, which is nothing more than a string
//input to function is a Javascript object, output is a JSON string
const bookJSON = JSON.stringify(book);
console.log(bookJSON);
//since JSON is a string, attributes cannot be accessed
console.log(bookJSON.title); //undefined
console.log(book.title); //prints 'Ego is the enemy'

//convert JSON string back to Javascript object
const bookObject = JSON.parse(bookJSON);
console.log(bookObject);
console.log(bookObject.author);