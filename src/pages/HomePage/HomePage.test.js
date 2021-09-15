import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

test('test HomePage has welcomeTitle', () => {
  const { container } = render(<HomePage/>);
  expect(container.outerHTML.includes("welcomeTitle")).toBe(true);
});