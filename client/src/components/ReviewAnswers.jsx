import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const getAnswersClass = (answer, selectedAnswers) => {
  const isSelected = selectedAnswers.includes(answer.optionId);

  if (answer.isCorrect) {
    return 'bg-success text-white';
  }

  if (isSelected) {
    return 'bg-danger text-white';
  }

  return 'bg-light';
};

const getAnswersMark = (answer, selectedAnswers) => {
  const isSelected = selectedAnswers.includes(answer.optionId);

  if (answer.isCorrect && isSelected) {
    return (
      <span
        className="fw-bold fs-4 me-2"
        aria-label="Correct answer selected"
      >
        ✓
      </span>
    );
  }

  if (answer.isCorrect) {
    return (
      <span
        className="fw-bold fs-4 me-2"
        aria-label="Correct answer"
      >
        ○
      </span>
    );
  }

  if (isSelected) {
    return (
      <span
        className="fw-bold fs-4 me-2"
        aria-label="Incorrect answer selected"
      >
        ✕
      </span>
    );
  }

  return (
    <span
      className="fw-bold fs-4 me-2"
      aria-label="Answer not selected"
    >
      ○
    </span>
  );
};

const ReviewAnswers = ({
  score,
  questions,
  userAnswers,
  numOfQuestions,
  onTryAgain,
}) => {
  return (
    <main>
      {/* Results */}
      <section>
        <p className="h5 text-primary fw-semibold p-2">
          Total Score: {score}/{numOfQuestions}
        </p>
      </section>

      {/* Review Answers */}
      <section className="py-5">
        <Container>
          <h2 className="h3 fw-bold text-center mb-4">
            Review Answers
          </h2>

          {questions.map((question, index) => {
            const selectedAnswers =
              userAnswers[question._id] || [];

            return (
              <Card
                key={question._id}
                className="mb-5 shadow-sm"
              >
                <Card.Header
                  as="h5"
                  className="bg-secondary text-white p-3"
                >
                  {index + 1}. {question.questionText}
                </Card.Header>

                <Card.Body className="p-1">
                  <ul className="list-unstyled mb-0">
                    {question.options.map((answer) => (
                      <li
                        key={answer.optionId}
                        className={`p-2 ${getAnswersClass(
                          answer,
                          selectedAnswers
                        )}`}
                        style={{
                          borderBottom: '1px solid white',
                        }}
                      >
                        {getAnswersMark(
                          answer,
                          selectedAnswers
                        )}

                        <span>{answer.optionText}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            );
          })}

          {/* Actions */}
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 mt-4 mb-4">
            <Button
              variant="outline-primary"
              className="px-4 fw-bold shadow-sm"
              onClick={onTryAgain}
            >
              Try Again
            </Button>

            <Button
              as={Link}
              to="/#quizzes"
              variant="outline-dark"
              className="px-4 fw-bold shadow-sm"
            >
              Back to Quizzes
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ReviewAnswers;
