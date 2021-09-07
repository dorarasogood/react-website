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
  console.log("AAA000 = ", element);
  for(let a in element["children"]){
    console.log("AAA001 = ", element["children"][a]);
  }
  // console.log("AAA001 = ", element["children"]);
});