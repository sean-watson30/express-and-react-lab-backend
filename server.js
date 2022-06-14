// 1) Import our dependencies and json files
// 2) Create our app object
// 3) Add our cors middleware
// 4) Create a home route to test our app
// 5) Create a /projectsroute to retrieve our projects
// 6) Create a /aboutroute to retrieve our about info
// 7) Setup our server listener

// Import Dependencies
const express = require('express');
const cors = require ('cors');

// Import JSON files
const projects = require('./projects.json');
const about = require('./about.json');

// Create our app object
const app = express();

// setup cors middleware
app.use(cors());

// home route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/projects', (req, res) => {
  res.json(projects);
})

app.get('/about', (req, res) => {
  res.json(about);
})

// declare a variable for server listener
const PORT = process.env.PORT || 4000;

// server listener
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));