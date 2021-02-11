import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('First Name Located', () => {
  render(<App />);
  expect(screen.getByText(/First Name/i));

});

test('Last Name Located', () => {
    render(<App />);
    expect(screen.getByText(/Last Name/i));
  
  });
  
  test('Email Located', () => {
    render(<App />);
    expect(screen.getByText(/Email/i));
  
  });
  

  test('Message Located', () => {
    render(<App />);
    expect(screen.getByText(/Message/i));
  
  });
  

  