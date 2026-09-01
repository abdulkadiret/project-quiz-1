const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');
const shuffle = require('../helpers/shuffle');

//Getting all questions
router.get('/', async (req, res) => {
  const { category } = req.query;
  console.log('[GET /quizzes] Query category:', category);

  try {
    const quizQuestions = await Quiz.find({ category });
    quizQuestions.forEach(question => shuffle(question.options));
    shuffle(quizQuestions);
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

Quiz.deleteMany({ text: 'JavaScript Basics' });

module.exports = router;
