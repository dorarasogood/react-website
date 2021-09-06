import { render, screen, act } from '@testing-library/react';
import { MainNavbar } from './MainNavbar';

test('test', () => {
  render(<MainNavbar />);
  const element = screen.getByTestId('testToggle');
  act(() => {
    element.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  const linkElement = screen.getByText(/News/i);
  expect(linkElement).toBeInTheDocument();
});