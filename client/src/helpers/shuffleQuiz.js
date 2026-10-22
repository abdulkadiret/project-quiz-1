const shuffle = arr => {
  const shuffled = [...arr];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const shuffleQuiz = questions => {
  if (!Array.isArray(questions)) {
    return [];
  }

  return shuffle(questions).map(question => ({
    ...question,
    options: Array.isArray(question.options)
      ? shuffle(question.options)
      : [],
  }));
};

export default shuffleQuiz;