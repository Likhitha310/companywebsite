const mysql = require('mysql2');

// Create a pool of connections
const pool = mysql.createPool({
  host: 'localhost',    
  user: 'root',         
  password: 'root', // Change this to your actual MySQL password
  database: 'quinquebit', 
  waitForConnections: true,
  connectionLimit: 10,   
  queueLimit: 0         
});

// Export the pool, which provides a promise-based interface
module.exports = pool.promise();
