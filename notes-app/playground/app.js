const validator = require('validator');
const chalk = require('chalk');

const isEmail = validator.isEmail('raman@gmail.com'); //=> true
const isEmail2 = validator.isEmail('google.com'); //=> false
const isUrl = validator.isURL('https://google.com');

console.log(isEmail);
console.log(isEmail2);
console.log(isUrl);

console.log(chalk.green('My name is Raman in Green color') + ' and ' + chalk.blue('This is in blue color'));

console.log(process.argv);

const command = process.argv[2];

if (command === 'add') {
    console.log('Adding Note!');
} else if (command === 'remove') {
    console.log('Removing Note!');
}