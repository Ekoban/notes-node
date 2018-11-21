// var personString = '{"name": "Andrew", "age": 25}';
// var person = JSPON.parse(personString);


const fs = require('fs');

const originalNote = {
    title: 'Some title',
    body: 'Some body'
}

const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);

console.log('====================================');
console.log(typeof note);
console.log(note.title);
console.log('====================================');
