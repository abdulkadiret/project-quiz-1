require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const quizRoutes = require('./routes/quizzes');
const path = require('path');
const PORT = process.env.PORT || 5000;

const dbUri =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : process.env.LOCAL_DB;

if (!dbUri) {
  console.error(`Missing database URI for ${process.env.NODE_ENV} environment`);
  process.exit(1);
}

app.use(morgan('tiny'));
app.use(express.json());
app.use('/quizzes', quizRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

mongoose
  .connect(dbUri)
  .then(() => {
    console.log(`MongoDB connected to ${process.env.NODE_ENV} DB`);

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server up and running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
