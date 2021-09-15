import { render, screen } from '@testing-library/react';
import { NewsPage } from './NewsPage';

test('test NewsPage has accordionBox', () => {
  const { container } = render(<NewsPage/>);
  expect(container.outerHTML.includes("accordionBox")).toBe(true);
});