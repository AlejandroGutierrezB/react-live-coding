import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Última búsqueda/i);
  expect(title).toBeInTheDocument();
});
