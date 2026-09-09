import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewAnswers from './ReviewAnswers';
import { Button, Container } from 'react-bootstrap';
import confetti from 'canvas-confetti';

const Result = ({
  score,
  quizName,
  userAnswers,
  numOfQuestions,
  questions,
  onTryAgain,
}) => {
  const [showReview, setShowReview] = useState(false);
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const circleRef = useRef(null);

  const percentage = Math.round((score / numOfQuestions) * 100);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      if (current >= percentage) {
        current = percentage;
        clearInterval(interval);
      }

      setDisplayPercentage(current);
    }, 20);

    return () => clearInterval(interval);
  }, [percentage]);

  useEffect(() => {
    if (displayPercentage !== percentage) return;
    if (!circleRef.current) return;

    const rect = circleRef.current.getBoundingClientRect();

    const originX =
      (rect.left + rect.width / 2) / window.innerWidth;

    const originY =
      (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 70,
      spread: 90,
      startVelocity: 25,
      gravity: 0.8,
      scalar: 0.8,
      origin: {
        x: originX,
        y: originY,
      },
      colors: [
        '#0d6efd',
        '#198754',
        '#ffc107',
        '#dc3545',
        '#6f42c1',
      ],
      disableForReducedMotion: true,
    });
  }, [displayPercentage, percentage]);

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
    <main>
      <section className="py-5">
        <Container className="text-center py-4">
          <div className="d-flex flex-column align-items-center">
            <h2 className="h4 mb-3">
              Results
            </h2>

            {/* Animated Progress Circle */}
            <div
              ref={circleRef}
              className="position-relative d-flex align-items-center justify-content-center rounded-circle mb-4"
              style={{
                width: '220px',
                height: '220px',
                background: `conic-gradient(
                  var(--bs-primary) ${displayPercentage}%,
                  var(--bs-light) ${displayPercentage}%
                )`,
              }}
              role="img"
              aria-label={`Quiz result: ${score} out of ${numOfQuestions}, ${percentage}%`}
            >
              <div
                className="position-absolute bg-white rounded-circle d-flex flex-column align-items-center justify-content-center"
                style={{
                  width: '185px',
                  height: '185px',
                }}
              >
                <span className="display-5 fw-bold text-primary">
                  {score}/{numOfQuestions}
                </span>

                <span className="h4 fw-semibold text-body-secondary mb-0">
                  {displayPercentage}%
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
              <Button
                variant="outline-success"
                className="px-4 fw-bold shadow-sm"
                onClick={() => setShowReview(true)}
              >
                Review Answers
              </Button>

              <Button
                variant="outline-primary"
                className="px-4 fw-bold shadow-sm"
                onClick={onTryAgain}
              >
                Try Again
              </Button>

              <Button
                as={Link} to="/#quizzes"
                variant="outline-dark"
                className="px-4 fw-bold shadow-sm"
              >
                Back to Quizzes
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Result;
