const fs = require('fs');
console.log('Starting notes.js');

const fetchNotes = () => {
    try { //check s'il y a déjà du contenu dans notes-data
        let noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (error) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes)) //crée ou recrée le JSON
};

const addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title: title,
        body: body
    };

    //on veut éviter d'avoir des doubles de notes
    let duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note); //pousse la note créée par les arguments dans l'array après le contenu existant
        saveNotes(notes);
        return note;
    }

    // On va préférer loger une potentielle erreur dans l'app pour que
    // cette fonction soit réutilisable n'importe où.
    // } else {
    //     console.log('Duplicate title. The note was not added.')
    // }
};

const getAll = () => {
    return fetchNotes();
};

const getNote = (title) => {
    let notes = fetchNotes();
    let matchingNote = notes.filter(note => note.title === title);
    return matchingNote[0];
};

const removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;

};

const logNote = (note) => {
    debugger;
    console.log(`
        ====================================
        Title: ${note.title}
        Body: ${note.body} 
        ====================================`
        );
}


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote //ES6 notation for addNote: addNote
}