const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  optionId: { type: Number, required: true }, // local to the question
  optionText: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

const QuizSchema = new Schema({
  category: { type: String, required: true },
  questionText: { type: String, required: true },
  questionType: { type: String, required: true }, // "radio" or "checkbox"
  options: [AnswerSchema],
});

const Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = Quiz;
