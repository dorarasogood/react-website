import { render, screen, act } from '@testing-library/react';
import { MainNavbar } from './MainNavbar';

test('test navbar', () => {
  render(<MainNavbar />);
  const navToggle = screen.getByTestId('navToggle');
  act(() => {
    navToggle.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  const linkElement = screen.getByText(/MainNavbar.news/i);
  expect(linkElement).toBeInTheDocument();
});