import { render, screen } from '@testing-library/react';
import { Products } from './Products';

test('test Products has productsBox', () => {
  const { container } = render(<Products/>);
  expect(container.outerHTML.includes("productsBox")).toBe(true);
});