const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs');

// console.log(_.uniq(['1','2','3','2','4','7']))
// console.log('Command: ', command);
const argv = yargs.argv;
const command = argv._[0];

// console.log('Command: ', command);
// console.log('Process: ', process.argv);
// console.log('Yargs: ', argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized')
}





// const textToPass = "This is only a test"
// let filename = 'test3'
// let user = os.userInfo().username;

// // fs.appendFile(
// //     `${filename}.txt`,
// //     `Hello ${user}`,
// //     function(err) {
// //         err => console.log(err)
// //     }
// // )

// console.log(notes.a)

// let res = notes.addNote();
// let calc = notes.add(9, 18);
// console.log(`${res}, Result is ${calc}`);

// const arrayTest = ['X', 'b', 'c', 'd', 'e', 'f'];
// const couples = _.chunk(arrayTest, 2);
// const arrayTest2 = ['a', 'b', 'c']

// console.log(couples);

// const fillTest = arrayToFill => {
//     return _.fill(arrayToFill, 'a', 2)
// };

// const testedArray = fillTest(arrayTest);
// const indexSearch = _.indexOf(arrayTest2, 'c');

// console.log(indexSearch);
// console.log(testedArray);