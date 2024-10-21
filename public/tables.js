const connection = require('./connect'); 
const createDatabaseSQL = 'CREATE DATABASE IF NOT EXISTS mydatabase';
async function createDatabase() {
    try {
        await connection.query(createDatabaseSQL);
        console.log('Database created or already exists.');
    } catch (err) {
        console.error('Error creating database:', err.message || err);
    }
}
createDatabase();
const UserTable = `
CREATE TABLE IF NOT EXISTS User (
  UserID INT AUTO_INCREMENT PRIMARY KEY,
  UserName VARCHAR(255) NOT NULL,
  Password VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  Role ENUM('Admin', 'User') DEFAULT 'User'
);`;

const BlogPostTable = `
CREATE TABLE IF NOT EXISTS BlogPost (
  PostID INT AUTO_INCREMENT PRIMARY KEY,
  Title VARCHAR(255) NOT NULL,
  Content TEXT NOT NULL,
  AuthorID INT,
  Date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  Tags VARCHAR(255),
  MediaURL VARCHAR(255),
  FOREIGN KEY (AuthorID) REFERENCES User(UserID)
);`;

const CommentTable = `
CREATE TABLE IF NOT EXISTS Comment (
  CommentID INT AUTO_INCREMENT PRIMARY KEY,
  PostID INT,
  UserID INT,
  Content TEXT NOT NULL,
  Date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (PostID) REFERENCES BlogPost(PostID),
  FOREIGN KEY (UserID) REFERENCES User(UserID)
);`;

const ContactFormTable = `
CREATE TABLE IF NOT EXISTS ContactFormSubmission (
  SubmissionID INT AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  Message TEXT NOT NULL,
  Date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;
console.log("Starting the table creation process...");

async function createTables() {
    try {
      // Create 'User' table
      await connection.query(UserTable);
      console.log("User table created.");
  
      // Create 'BlogPost' table
      await connection.query(BlogPostTable);
      console.log("BlogPost table created.");
  
      // Create 'Comment' table
      await connection.query(CommentTable);
      console.log("Comment table created.");
  
      // Create 'ContactFormSubmission' table
      await connection.query(ContactFormTable);
      console.log("ContactFormSubmission table created.");
      
    } catch (err) {
      console.log("Error creating tables:", err);
    } finally {
      // Close the connection pool
     await connection.end();  // Close the connection after all tables are created
    }
  }
createTables();