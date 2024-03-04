import React from 'react';
import { render, screen } from '@testing-library/react';
import Thanks from './Thanks'; // Replace with your component path

test('renders "Thank you for your booking!" message and "We will get back to you soon!" paragraph', () => {
  render(<Thanks />);

  const thankYouHeading = screen.getByText('Thank you for your booking!');
  const paragraphElement = screen.getByText('We will get back to you soon!');

  expect(thankYouHeading).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});