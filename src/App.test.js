import { render, screen } from '@testing-library/react';
import App from './App';

test('Checking the number of numbers', () => {
  render(<App />);
  const numbers = screen.getAllByRole('numbers');
  console.log(numbers)
  expect(numbers).toHaveLength(10)
});

test('Checking the number of operators', () => {
  render(<App />);
  const operators = screen.getAllByRole('operators');
  console.log(operators)
  expect(operators).toHaveLength(7)
});
