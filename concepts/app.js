const { name, addNumbers } = require('./utils.js');

const fs = require('fs');

fs.writeFileSync('notes.txt', 'This file was created by Node.js!');

fs.appendFileSync('notes.txt', ' This is the second line');
fs.appendFileSync('notes.txt', ' This is the third line');

console.log(name);

console.log(addNumbers(3,5));