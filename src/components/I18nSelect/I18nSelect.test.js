import { render, screen } from '@testing-library/react';
import { I18nSelect } from './I18nSelect';

test('test I18nSelect with selecting tw', () => {
  render(
    <I18nSelect
      selected = "tw"
      onChange = {()=>{}}
    />
  );
  const element = screen.getByTestId('selectedOption');
  expect(element.innerHTML).toBe("正體中文 (繁體)");
});

test('test I18nSelect with selecting jp', () => {
  render(
    <I18nSelect
      selected = "jp"
      onChange = {()=>{}}
    />
  );
  const element = screen.getByTestId('selectedOption');
  expect(element.innerHTML).toBe("日本語");
});