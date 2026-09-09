import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

const quizzes = [
  {
    name: 'HTML',
    description: 'Test your HTML knowledge',
    path: '/html',
    icon: faHtml5,
    color: 'text-danger',
  },
  {
    name: 'CSS',
    description: 'Test your CSS knowledge',
    path: '/css',
    icon: faCss3,
    color: 'text-primary',
  },
  {
    name: 'JavaScript',
    description: 'Test your JavaScript knowledge',
    path: '/js',
    icon: faJs,
    color: 'text-warning',
  },
  {
    name: 'Node.js',
    description: 'Test your Node.js knowledge',
    path: '/node',
    icon: faNodeJs,
    color: 'text-success',
  },
  {
    name: 'React.js',
    description: 'Test your React knowledge',
    path: '/react',
    icon: faReact,
    color: 'text-info',
  },
];

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-light py-5">
        <div className="container text-center py-4">
          <h1 className="display-4 fw-bold text-primary mb-3">
            CYF Quiz
          </h1>

          <p className="lead fw-semibold mb-2">
            Hello, Coder! 👋
          </p>

          <h2 className="h3 fw-bold mb-3">
            Ready to test your coding knowledge?
          </h2>

          <p
            className="lead text-body-secondary mb-4 mx-auto"
            style={{ maxWidth: '650px' }}
          >
            Choose a topic, take a quiz, and review your answers
            when you're done.
          </p>

          <a
            href="#quizzes"
            className="btn btn-outline-primary btn-lg px-4 fw-bold shadow-sm"
          >
            Explore Quizzes
          </a>
        </div>
      </section>

      {/* Quiz Cards */}
      <section id="quizzes" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Choose Your Challenge</h2>
            <p className="text-body-secondary mb-0">
              Select a topic and test your skills.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {quizzes.map((quiz) => (
              <div
                className="col-12 col-sm-6 col-lg-4"
                key={quiz.name}
              >
                <div className="card h-100 border border-light-subtle shadow-sm bg-light">
                  <div className="card-body text-center p-4">
                    <FontAwesomeIcon
                      icon={quiz.icon}
                      className={`${quiz.color} fa-3x mb-3`}
                      aria-hidden="true"
                    />

                    <h3 className="h4 fw-bold">{quiz.name}</h3>

                    <p className="text-body-secondary mb-4">
                      {quiz.description}
                    </p>

                    <Link
                      to={quiz.path}
                      className="btn btn-outline-primary px-4 fw-bold"
                    >
                      Start Quiz
                      <span aria-hidden="true" className="ms-2">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
