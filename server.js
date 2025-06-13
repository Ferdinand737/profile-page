const express = require('express');
const path = require('path');
const app = express();

const PORT = 3001;

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve index.html for all routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Catch-all route
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle process termination gracefully
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});