import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PAUL BOOKS logo', () => {
  render(<App />);
  const paulElement = screen.getByText(/PAUL/i);
  const booksElement = screen.getByText(/BOOKS/i);
  expect(paulElement).toBeInTheDocument();
  expect(booksElement).toBeInTheDocument();
});
