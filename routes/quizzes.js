const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');

 // Getting all questions, optionally filtered by category
router.get('/', async (req, res) => {
  const { category } = req.query;

  try {
    const filter = category ? { category } : {};
    const quizQuestions = await Quiz.find(filter);
    res.status(200).json(quizQuestions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Creating a question
router.post('/', async (req, res) => {
  const { category, questionText, questionType, options } = req.body;

  const processedOptions = options.map((opt, index) => ({
    optionId: opt.optionId ?? index + 1,
    optionText: opt.optionText,
    isCorrect: opt.isCorrect,
  }));

  const newQuestion = new Quiz({
    category,
    questionText,
    questionType,
    options: processedOptions,
  });
  try {
    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
