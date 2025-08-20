import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home heading', () => {
  render(<App />);
  const heading = screen.getByText(/home/i);
  expect(heading).toBeInTheDocument();
});
