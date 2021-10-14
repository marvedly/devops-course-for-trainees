import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Consid link', () => {
  render(<App />);
  const linkElement = screen.getByText(/consid/i);
  expect(linkElement).toBeInTheDocument();
});

test('link leads to Consid', () => {
  render(<App />);
  const linkElement = screen.getByText(/consid/i);
  expect(linkElement.closest('a')).toHaveAttribute('href', 'https://consid.se/')
});
