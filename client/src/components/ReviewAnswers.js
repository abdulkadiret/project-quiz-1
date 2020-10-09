import React from 'react';
import { Button, Card, Form, Container } from 'react-bootstrap';

const getAnswersClass = (question, userAnswers, answer) => {
  if (answer.isCorrect) {
    return 'bg-success text-white';
  } else if (userAnswers[question._id].includes(answer._id)) {
    return 'bg-danger text-white';
  } else {
    return 'bg-light';
  }
};

const getAnswersMark = (question, userAnswers, answer, selectedAnswers) => {
  if (answer.isCorrect) {
    if (selectedAnswers.includes(answer._id)) {
      return (
        <span
          style={{
            fontSize: '30px',
            marginRight: '10px',
            color: '#000000',
            position: 'relative',
            bottom: '-0.3rem',
            left: '0.3rem',
          }}
        >
          &#9745;
        </span>
      );
    } else {
      return (
        <span
          style={{
            fontSize: '30px',
            marginRight: '10px',
            color: '#000000',
            position: 'relative',
            bottom: '-0.3rem',
            left: '0.3rem',
          }}
        >
          &#x2610;
        </span>
      );
    }
  } else if (userAnswers[question._id].includes(answer._id)) {
    return (
      <span
        style={{
          fontSize: '30px',
          marginRight: '10px',
          color: '#000000',
          position: 'relative',
          bottom: '-0.3rem',
          left: '0.3rem',
        }}
      >
        &#9746;
      </span>
    );
  } else {
    return (
      <span
        style={{
          fontSize: '30px',
          marginRight: '10px',
          position: 'relative',
          bottom: '-0.3rem',
          left: '0.3rem',
        }}
      >
        &#x2610;
      </span>
    );
  }
};

const ReviewAnswers = ({
  score,
  questions,
  quizName,
  userAnswers,
  numOfQuestions,
}) => {
  return (
    <Container>
      <p>
        Your score is: {score} / {numOfQuestions}
      </p>
      <Form>
        <fieldset disabled>
          {questions.map(question => (
            <Card key={question._id} className="mb-4">
              <Card.Header as="h5">{question.text}</Card.Header>
              <Card.Body className="bg-white">
                <Form.Group className="bg-light px-1" key={question._id}>
                  <ul className="px-3 list-unstyled">
                    {question.answers.map(answer => {
                      const selectedAnswers = userAnswers[question._id];
                      return (
                        <li
                          style={{
                            borderBottom: '1px solid white',
                            position: 'relative',
                          }}
                          key={answer._id}
                          className={getAnswersClass(
                            question,
                            userAnswers,
                            answer,
                          )}
                        >
                          {getAnswersMark(
                            question,
                            userAnswers,
                            answer,
                            selectedAnswers,
                          )}
                          <label>{answer.text}</label>
                        </li>
                      );
                    })}
                  </ul>
                </Form.Group>
              </Card.Body>
            </Card>
          ))}
          <Button className="mb-4" variant="primary" href={quizName}>
            Try again
          </Button>
        </fieldset>
      </Form>
    </Container>
  );
};

export default ReviewAnswers;
