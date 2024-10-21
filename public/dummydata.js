const pool = require('./connect');

async function insertDummyData() {
    try {

        const users = [
            { UserName: 'rafiq', Password: '123', Email: 'rafiq@example.com' },
            { UserName: 'harsha', Password: '123', Email: 'harsha@example.com' },
            { UserName: 'harshitha', Password: '123', Email: 'harshitha@example.com' },
            { UserName: 'likitha', Password: '123', Email: 'likitha@example.com' },
            { UserName: 'mahesh', Password: '123', Email: 'mahesh@example.com' }
        ];

        
        for (const user of users) {
            await pool.query('INSERT INTO User (UserName, Password, Email) VALUES (?, ?, ?)', 
                [user.UserName, user.Password, user.Email]);
        }
        console.log('Dummy data inserted into Users table.');

        const blogPosts = [
            { Title: 'First Post', Content: 'This is the content of the first post.', UserID: 1 }, 
            { Title: 'Second Post', Content: 'This is the content of the second post.', UserID: 2 } 
        ];

        for (const post of blogPosts) {
            await pool.query('INSERT INTO BlogPost (Title, Content, AuthorID) VALUES (?, ?, ?)', 
                [post.Title, post.Content, post.UserID]);
        }
        console.log('Dummy data inserted into BlogPost table.');

        const comments = [
            { PostID: 1, UserID: 1, Comment: 'Great post!' }, 
            { PostID: 1, UserID: 2, Comment: 'Thanks for sharing!' }, 
            { PostID: 2, UserID: 3, Comment: 'Very informative.' },
        ];

        for (const comment of comments) {
            await pool.query('INSERT INTO Comment (PostID, UserID, Content) VALUES (?, ?, ?)', 
                [comment.PostID, comment.UserID, comment.Comment]);
        }
        console.log('Dummy data inserted into Comment table.');

        const contactForms = [
            { Name: 'Rafiq', Email: 'rafiq@example.com', Message: 'Hello, I have a question.' },
            { Name: 'Harsha', Email: 'harsha@example.com', Message: 'I need help with my account.' },
            { Name: 'Harshitha', Email: 'harshitha@example.com', Message: 'Interested in collaboration.' },
            { Name: 'Likitha', Email: 'likitha@example.com', Message: 'Looking for guidance.' },
            { Name: 'Mahesh', Email: 'mahesh@example.com', Message: 'How to get started?' }
        ];

    
        for (const form of contactForms) {
            await pool.query('INSERT INTO ContactFormSubmission (Name, Email, Message) VALUES (?, ?, ?)', 
                [form.Name, form.Email, form.Message]);
        }
        console.log('Dummy data inserted into ContactFormSubmission table.');

    } catch (err) {
        console.error('Error inserting dummy data:', err);
    } finally {
        pool.end(); 
    }
}

insertDummyData();
