const pool = require('./connect'); // Ensure this path is correct

async function testConnection() {
    try {
        // Execute a simple query to check the connection
        const [results] = await pool.query('SELECT 1');
        console.log('Connection successful, results:', results);
    } catch (err) {
        console.error('Error connecting to the database:', err.message || err);
    }
}

// Call the test function
testConnection();
