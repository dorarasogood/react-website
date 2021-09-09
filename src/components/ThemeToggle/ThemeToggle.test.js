import { render, screen, act } from '@testing-library/react';
import { ThemeToggle } from './ThemeToggle'

test('test theme toggle', () => {
  let darkModeBoolean = false;
  const onChange = jest.fn();
  render(
    <ThemeToggle 
      darkMode = {darkModeBoolean}
      onChange = {onChange}
    />
  );
  expect(onChange).toHaveBeenCalledTimes(0);
  const element = screen.getByTestId('themeToggle');
  act(() => {
    element.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(onChange).toHaveBeenCalledTimes(1);
});


/*
這樣不用data-testid也可以測，但有點醜

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("test theme toggle", () => {
  let darkModeBoolean = false;
  act(() => {
    render(
      <ThemeToggle 
        darkMode = {darkModeBoolean}
        onChange = {()=>{
          darkModeBoolean = !darkModeBoolean
        }}
      />, 
      container);
  });

  let toggle = container.lastChild.lastChild.lastChild;
  act(() => {
    toggle.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(darkModeBoolean).toBe(true);
});

*/