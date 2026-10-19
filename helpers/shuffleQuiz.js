import shuffle from './shuffle';

const shuffleQuiz = questions => {
  return shuffle(questions).map(question => ({
    ...question,
    options: shuffle(question.options),
  }));
};

export default shuffleQuiz;
