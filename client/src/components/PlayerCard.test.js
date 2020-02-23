import React from 'react';
import ReactDOM from 'react-dom';
import PlayerCard from './PlayerCard';
import { render } from "@testing-library/react";



test('testing for text', () => {
  const { getByText } = render(<PlayerCard />);

  const fNameField = getByText(/Country/i);

  expect(fNameField).toBeInTheDocument();
});