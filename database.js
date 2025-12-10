const { createNotesTable } = require('./database_queries')

const provider = require('sqlite3').verbose();

class Database {

    Database(){
        const db = provider.Database('./notes.db', (err) => {
            if (err) console.error(err.message);
            else console.log('Connected to the notes database.');
        });


        db.run(createNotesTable)
    }
}

