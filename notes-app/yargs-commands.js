const yargs = require('yargs');

/*
To run a specific command built in this file:

node yargs-commands.js read //runs the read command
node yargs-commands.js add //runs the add command
...and so on

With arguments:
node yargs-commands.js add --title='Sample Title'

*/

console.log(yargs.argv);

//functionalities for notes-app: add, remove, list, read

//add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    //builder property is used to put constraints on arguments that need to be passed to commands
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //to make it required/optional field. True: required, False: optional
            type: 'string'
        },
        body: {
            describe: 'Node body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function() {
        console.log(`Adding a new note with title: ${yargs.argv.title} and body: ${yargs.argv.body}`);
    }
});

//remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note!');
    }
});

//list command
yargs.command({
    command: 'list',
    describe: 'listing out all notes',
    handler: function() {
        console.log('Listing out all the notes!');
    }
});

//read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function() {
        console.log('Read a note!');
    }
});

//very important to enable the argument parsing by yargs
yargs.parse();