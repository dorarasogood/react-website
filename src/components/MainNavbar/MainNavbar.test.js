import { render, screen, act } from '@testing-library/react';
import { MainNavbar } from './MainNavbar';

test('test navbar', () => {
  render(<MainNavbar />);
  const element = screen.getByTestId('testToggle');
  act(() => {
    element.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  const linkElement = screen.getByText(/navbar.news/i);
  expect(linkElement).toBeInTheDocument();
});