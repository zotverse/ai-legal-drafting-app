// Load environment variables from .env file
require('dotenv').config();

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Set the port from .env or default to 3000
const PORT = process.env.PORT || 3000;

// Use body-parser to parse JSON bodies
app.use(bodyParser.json());

// Create a simple root endpoint for testing
app.get('/', (req, res) => {
  res.send("AI Legal Drafting App Backend is Running");
});

// Placeholder endpoint for /transcribe
app.post('/transcribe', (req, res) => {
  // For now, simply echo back the request body
  res.json({ message: 'Transcription endpoint hit', data: req.body });
});

// Placeholder endpoint for /extract
app.post('/extract', (req, res) => {
  res.json({ message: 'Extraction endpoint hit', data: req.body });
});

// Placeholder endpoint for /generate
app.post('/generate', (req, res) => {
  res.json({ message: 'Draft generation endpoint hit', data: req.body });
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
