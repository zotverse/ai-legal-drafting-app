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
  const voiceFile = req.body.file; // Input: voice file data
  
  // Simulate processing delay (e.g., 2 seconds)
  setTimeout(() => {
    // Dummy transcription output
    const transcription = "This is the transcribed text from the voice file.";
    res.json({ message: 'Transcription endpoint simulated', transcription });
  }, 2000); // 2000 milliseconds = 2 seconds
});


// Placeholder endpoint for /extract
app.post('/extract', (req, res) => {
  const transcribedText = req.body.text; // Input: the transcribed text
  
  // Simulate extraction of legal details immediately
  const extractedData = {
    caseType: "Contract Dispute",
    parties: "Party A vs Party B",
    issues: "Non-payment for services"
  };
  
  res.json({ message: 'Extraction endpoint simulated', extractedData });
});


// Placeholder endpoint for /generate
app.post('/generate', (req, res) => {
  const extractedData = req.body.data; // Input: legal details
  
  // Simulate generating a legal draft using the extracted data
  const legalDraft = `
  Legal Draft:
  Case Type: ${extractedData.caseType}
  Parties: ${extractedData.parties}
  Issues: ${extractedData.issues}
  
  Draft Content: This is a simulated legal draft for the above-mentioned case.
  `;
  
  res.json({ message: 'Draft generation endpoint simulated', legalDraft });
});


// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
