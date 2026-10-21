require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const quizRoutes = require('./routes/quizzes');

const app = express();
const PORT = process.env.PORT || 5000;

const isProduction = process.env.NODE_ENV === 'production';

const dbUri = isProduction
  ? process.env.MONGODB_URI
  : process.env.LOCAL_DB;

let connectionPromise;

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!dbUri) {
    throw new Error(
      `Missing database URI for ${
        process.env.NODE_ENV || 'development'
      } environment`
    );
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(dbUri).catch(error => {
      connectionPromise = null;
      throw error;
    });
  }

  await connectionPromise;
}

app.use(morgan('tiny'));
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Connect to MongoDB before processing quiz requests
app.use('/quizzes', async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    res.status(500).json({ error: 'Database connection error' });
  }
});

app.use('/quizzes', quizRoutes);

// Serve the frontend when running locally in production mode.
// Vercel can serve the frontend separately if configured to do so.
if (isProduction && !process.env.VERCEL) {
  app.use(express.static(path.join(__dirname, 'client/dist')));

  app.get('*', (req, res, next) => {
    //Don't send the frontend for unknown API routes
    if (req.path.startsWith('/quizzes') || req.path === '/health') {
      return next();
    }

    res.sendFile(
      path.join(__dirname, 'client/dist', 'index.html')
    );
  });
}

// Export the Express app for Vercel
module.exports = app;

// Start a local HTTP server only when running this file directly
if (require.main === module) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}
