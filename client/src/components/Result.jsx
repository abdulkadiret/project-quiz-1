import React, { useState } from 'react';
import ReviewAnswers from './ReviewAnswers';
import { Button, Container } from 'react-bootstrap';

const Result = ({
  score,
  quizName,
  userAnswers,
  numOfQuestions,
  questions,
  onTryAgain
}) => {
  const [showReview, setShowReview] = useState(false);

  return showReview ? (
    <ReviewAnswers
      score={score}
      quizName={quizName}
      questions={questions}
      userAnswers={userAnswers}
      numOfQuestions={numOfQuestions}
      onTryAgain={onTryAgain}
    />
  ) : (
    <div>
      <Container className="py-4 mb-4 bg-light rounded">
        <h2>
          You have got {score} out of {numOfQuestions}.
        </h2>
      </Container>

      <Button className="mr-2 mb-4" variant="secondary" onClick={onTryAgain}>
        Try again
      </Button>

      <Button
        className="mb-4"
        variant="primary"
        onClick={() => setShowReview(true)}
      >
        Review answers
      </Button>
    </div>
  );
};

export default Result;
