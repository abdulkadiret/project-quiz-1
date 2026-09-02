import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './components/Home';

test('renders the quiz home page', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );

  expect(getByText('CYF Quiz')).toBeInTheDocument();
  expect(getByText('Hello Coder !')).toBeInTheDocument();
  expect(
    getByText('Are you ready for the next challenge?'),
  ).toBeInTheDocument();
  expect(getByText('Take a quiz!')).toBeInTheDocument();

  expect(getByText('HTML')).toHaveAttribute('href', '/html');
  expect(getByText('CSS')).toHaveAttribute('href', '/css');
  expect(getByText('JavaScript')).toHaveAttribute('href', '/js');
  expect(getByText('Node.js')).toHaveAttribute('href', '/node');
  expect(getByText('React.js')).toHaveAttribute('href', '/react');
});
