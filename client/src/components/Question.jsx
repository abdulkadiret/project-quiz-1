import React from 'react';
import { Form, Card } from 'react-bootstrap';

const Question = ({
  question,
  index = 0,
  handleAnswerSelect,
  selectedAnswer = [],
}) => {
  const addClassName = question =>
    question.questionType === 'checkbox'
      ? 'styled-input-square'
      : 'styled-input-rounded';

  return (
    <fieldset>
      <Card className="mb-3 rounded">
        <Card.Header className="bg-secondary text-white" as="h5">
          {index + 1}. {question.questionText}
        </Card.Header>
        <Card.Body className="bg-white">
          <Form.Group className="bg-light px-1" key={question._id}>
            {question.options.map(option => (
              <div
                key={option.optionId}
                style={{
                  borderBottom: '1px solid white',
                }}
              >
                <Form.Check
                  type={question.questionType}
                  className={addClassName(question)}
                  id={`${question._id}.${option.optionId}`}
                  name={question._id}
                  value={option.optionId}
                  onChange={e => handleAnswerSelect(e, question.questionType)}
                  label={option.optionText}
                  defaultChecked={selectedAnswer.includes(option.optionId)}
                />
              </div>
            ))}
            <span className="checkmark"></span>
          </Form.Group>
        </Card.Body>
      </Card>
    </fieldset>
  );
};

export default Question;
