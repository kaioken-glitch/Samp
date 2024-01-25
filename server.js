const express = require('express');
const app = express();
const path = require('path');

// Serve static files (e.g., audio files)
app.use('/audio', express.static(path.join(__dirname, 'audio')));

// Define an endpoint to get the list of available audio files
app.get('/api/audio-files', (req, res) => {
  const audioFiles = ['audio1.mp3', 'audio2.mp3']; // Replace with your actual audio file names
  res.json(audioFiles);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
