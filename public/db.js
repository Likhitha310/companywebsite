const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',    
    user: 'root',         
    password: 'root' 
});
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database server:', err);
        return;
    }
    console.log('Connected to the MySQL server.');
    const createDatabaseQuery = 'CREATE DATABASE IF NOT EXISTS quinquebit';
    connection.query(createDatabaseQuery, (err, result) => {
        if (err) {
            console.error('Error creating database:', err);
            return;
        }
        console.log('Database created or already exists.');
        connection.end((err) => {
            if (err) {
                console.error('Error closing the connection:', err);
                return;
            }
            console.log('Connection closed.');
        });
    });
});
