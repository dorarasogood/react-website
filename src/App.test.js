import { render, screen, act } from '@testing-library/react';
import App from './App';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

test('test App first show HomePage', () => {
  const history = createMemoryHistory()
  history.push('/')
  render(
    <Router history={history}>
      <App />
    </Router>,
  )
  expect(screen.getByText(/歡迎/i)).toBeInTheDocument();
});

test('test App route to NewsPage', () => {
  const history = createMemoryHistory()
  history.push('/news')
  render(
    <Router history={history}>
      <App />
    </Router>,
  )
  expect(screen.getByText(/特價中/i)).toBeInTheDocument();
});