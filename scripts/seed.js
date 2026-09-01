// scripts/seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Quiz = require('../models/quiz'); // Adjust if needed
const quizzes = require('../data-import/quizzes/quizzes'); // Path to your quiz data

const dbUri =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : process.env.LOCAL_DB;

async function seedDatabase() {
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    await Quiz.deleteMany(); // Clear existing quiz questions
    console.log('Cleared existing quiz data');

    await Quiz.insertMany(quizzes);
    console.log(`Inserted ${quizzes.length} quiz questions`);

    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (err) {
    console.error('Seeding failed:', err.message);
    process.exit(1);
  }
}

seedDatabase();
