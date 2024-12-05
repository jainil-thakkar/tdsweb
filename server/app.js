const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('../client/build'));  // Serve static files from React app

// Routes
const episodeRoutes = require('./routes/episodes');
const blogRoutes = require('./routes/blog');
app.use('/api/episodes', episodeRoutes);
app.use('/api/blog', blogRoutes);

module.exports = app;
