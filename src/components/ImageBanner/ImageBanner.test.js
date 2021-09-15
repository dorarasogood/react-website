import { render, screen } from '@testing-library/react';
import { ImageBanner } from './ImageBanner';

test('test images of carousel existed with alt', () => {
  render(
    <ImageBanner/>
  );
  const image = screen.getByAltText(/lavender/i);
  expect(image).toBeInTheDocument();
});