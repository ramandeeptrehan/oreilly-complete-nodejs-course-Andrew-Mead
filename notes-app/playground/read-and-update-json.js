const fs = require('fs');

//read content
const fileContent = fs.readFileSync('1-json-file.json');
console.log(fileContent); //prints buffer

const dataJSON = fileContent.toString();
console.log(dataJSON);

const dataObject = JSON.parse(dataJSON);
console.log(dataObject.title);
console.log(dataObject.author);

//update
dataObject.title = 'Deep Work';
dataObject.author = 'Cal Newport';

const jsonData = JSON.stringify(dataObject);
fs.writeFileSync('1-json-file.json', jsonData);
