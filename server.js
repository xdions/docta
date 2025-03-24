const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3008; // Use PORT from environment variables

// Import data
const drugs = require('./data/drugs');
const conditions = require('./data/conditions');
const mse = require('./data/mse');
const historyTaking = require('./data/historyTaking');

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Default Route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Routes to serve data
app.get('/api/drugs', (req, res) => {
  res.json(drugs);
});

app.get('/api/conditions', (req, res) => {
  res.json(conditions);
});

app.get('/api/mse', (req, res) => {
  res.json(mse);
});

app.get('/api/historyTaking', (req, res) => {
  res.json(historyTaking);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});