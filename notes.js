const fs = require('fs');

console.log('Starting notes.js');

const addNote = (title, body) => {
    fs.appendFile(title, body, err => console.log(err))
};

const getAll = () => {
    console.log("Getting all the notes.")
};

const getNote = (title) => {
    console.log("Getting note: ", title)
};

const removeNote = (title) => {
    console.log("Removing note: ", title)
};


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote //ES6 notation for addNote: addNote
}