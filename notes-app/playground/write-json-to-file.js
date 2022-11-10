const fs = require('fs');

//book is a Javascript object
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday' 
}

//convert book to JSON, which is nothing more than a string
//input to function is a Javascript object, output is a JSON string
const bookJSON = JSON.stringify(book);

fs.writeFileSync('1-json-file.json', bookJSON);

const fileContent = fs.readFileSync('1-json-file.json');
console.log(fileContent); //prints buffer

const dataJSON = fileContent.toString();
console.log(dataJSON);

const dataObject = JSON.parse(dataJSON);
console.log(dataObject.title);
console.log(dataObject.author);