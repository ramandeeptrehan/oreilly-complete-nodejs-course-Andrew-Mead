const yargs = require('yargs');

console.log(process.argv);
/*
prints this:
[
  '/Users/rtrehan/.nvm/versions/node/v16.0.0/bin/node',
  '/Users/rtrehan/Learning/Oreilly/complete-nodejs-course/notes-app/yargs-example.js',
  'add',
  '--title=This is a title'
]
*/

console.log(yargs.argv);
/*
prints this:
{ _: [ 'add' ], title: 'This is a title', '$0': 'yargs-example.js' }
*/

console.log(yargs.argv.title); //prints 'This is a title'
