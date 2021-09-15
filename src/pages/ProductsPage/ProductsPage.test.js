import { render, screen } from '@testing-library/react';
import { ProductsPage } from './ProductsPage';

test('test ProductsPage has productsPageBorder', () => {
  const { container } = render(<ProductsPage/>);
  expect(container.outerHTML.includes("productsPageBorder")).toBe(true);
});