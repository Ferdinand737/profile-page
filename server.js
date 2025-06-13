const express = require('express');
const path = require('path');
const app = express();

const PORT = 3001;

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all other routes by serving the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});