import { render, screen } from '@testing-library/react';
import { TopBanner } from './TopBanner';

test('test TopBanner have ThemeToggle and I18nSelect', () => {
  const { container } = render(<TopBanner/>);
  expect(container.outerHTML.includes("themeLocation")).toBe(true);
  expect(container.outerHTML.includes("i18nLocation")).toBe(true);
});
