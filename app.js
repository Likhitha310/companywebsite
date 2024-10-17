const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'src', 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('index'); // Render index.ejs
});

app.get('/about', (req, res) => {
    res.render('about'); // Render about.ejs
});

app.get('/projects', (req, res) => {
    res.render('project'); // Render project.ejs
});

app.get('/contact', (req, res) => {
    res.render('contact'); // Render contact.ejs
});

// Project Details Route (You can customize this as needed)
app.get('/project-details', (req, res) => {
    res.render('project_details'); // Render project_details.ejs
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
