require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const quizRoutes = require('./routes/quizzes');

const app = express();
const PORT = process.env.PORT || 5000;

const dbUri =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : process.env.LOCAL_DB;

let connectionPromise;

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!dbUri) {
    throw new Error(
      `Missing database URI for ${process.env.NODE_ENV} environment`,
    );
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(dbUri).catch(err => {
      connectionPromise = null;
      throw err;
    });
  }

  await connectionPromise;
}

app.use(morgan('tiny'));
app.use(express.json());

//connect before quiz routes handle requests
app.use('/quizzes', async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (err) {
    console.error('MongoDB connection error:', err);
    res.status(500).json({ error: 'Database connection error' });
  }
});

app.use('/quizzes', quizRoutes);

// Keep serving the build frontend when running locally in production mode.
// Vercel serves static assets separately.
if (process.env.NODE_ENV === 'production' && !process.env.VERCEL) {
  app.use(express.static(path.join(__dirname, 'client', 'dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  });
}

// Vercel imports this Express application
module.exports = app;

// Start a regular server for local development only.
if (require.main === module) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server up and running on port ${PORT}`);
  });
}
