import React, { useState, useEffect } from 'react';
import Result from './Result';
import Question from './Question';
import { useParams } from 'react-router-dom';
import { getData } from './retrieveQuizData';
import { Button, Form, Container } from 'react-bootstrap';
import Spinner from './Spinner';
import shuffleQuiz from '../helpers/shuffleQuiz';

const Quiz = () => {
  const { quizName } = useParams();
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [shouldDisplayScore, setShouldDisplayScore] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setShouldDisplayScore(false);

    getData(quizName)
      .then(res => {
        setQuestions(res || []);
      })
      .catch(err => {
        console.error('Failed to fetch quiz data:', err);
        setQuestions([]); // Make sure we set empty array to avoid spinner hang
      })
      .finally(() => {
        setLoading(false); // End loading no matter what
      });
  }, [quizName]);

  const handleCheckboxAnswers = (questionId, answerId) => {
    const previousSelectedAnswers = userAnswers[questionId] || [];

    const newCheckboxAnswer = previousSelectedAnswers.includes(answerId)
      ? previousSelectedAnswers.filter(answer => answer !== answerId)
      : [...previousSelectedAnswers, answerId];

    return {
      [questionId]: newCheckboxAnswer,
    };
  };

  const handleAnswerSelect = (e, type) => {
    const questionId = e.target.name; // Uses question._id
    const answerId = Number(e.target.value);

    const selectedAnswer =
      type === 'checkbox'
        ? handleCheckboxAnswers(questionId, answerId)
        : { [questionId]: [answerId] };

    setUserAnswers(prev => ({ ...prev, ...selectedAnswer }));
  };

  const checkUserAnswers = e => {
    e.preventDefault();
    const totalScore = questions.reduce((point, question) => {
      const selectedAnswers = userAnswers[question._id] || [];

      const isCorrect = question.options.every(
        option =>
          option.isCorrect === selectedAnswers.includes(option.optionId),
      );

      return isCorrect ? point + 1 : point;
    }, 0);

    setScore(totalScore);
    setShouldDisplayScore(true);
  };

  const resetQuiz = () => {
    setQuestions(prev => shuffleQuiz(prev));
    setScore(0);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setShouldDisplayScore(false);
  };

  const quizDisplayText = {
    html: 'HTML',
    css: 'CSS',
    js: 'JavaScript',
    node: 'Node.js',
    react: 'React.js',
  };

  const question = questions[currentQuestionIndex];

  if (loading) return <Spinner />;

  if (questions.length === 0) {
    return (
      <Container>
        <h1>{quizDisplayText[quizName]} Quiz</h1>
        <p>No quiz data available.</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className='fw-bold my-4'>{quizDisplayText[quizName]} Quiz</h1>
      {shouldDisplayScore ? (
        <Result
          score={score}
          quizName={quizName}
          questions={questions}
          userAnswers={userAnswers}
          numOfQuestions={questions.length}
          onTryAgain={resetQuiz}
        />
      ) : (
        <Form onSubmit={checkUserAnswers}>
          <Question
            key={question._id}
            question={question}
            index={currentQuestionIndex}
            handleAnswerSelect={handleAnswerSelect}
            selectedAnswer={userAnswers[question._id]}
          />
          <Button
            className="me-2 mb-4 px-4 fw-bold shadow-sm"
            variant="outline-secondary"
            disabled={currentQuestionIndex === 0}
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
          >
            Previous
          </Button>
          <Button
            className="me-2 mb-4 px-4 fw-bold shadow-sm"
            variant="outline-primary"
            disabled={currentQuestionIndex === questions.length - 1}
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          >
            Next
          </Button>
          {Object.keys(userAnswers).length === questions.length && (
            <Button className="me-2 mb-4 px-4 fw-bold shadow-sm" variant="outline-success" type="submit">
              Submit
            </Button>
          )}
        </Form>
      )}
    </Container>
  );
};

export default Quiz;
