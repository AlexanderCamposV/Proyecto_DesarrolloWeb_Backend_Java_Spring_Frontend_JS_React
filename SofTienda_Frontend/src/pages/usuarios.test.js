import React from 'react';
import { render } from '@testing-library/react';
import Usuarios from './pages/usuarios';

test('renders learn react link', () => {
  const { getByText } = render(<Usuarios />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
