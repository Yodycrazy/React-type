import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders main title "Tienda Virtual"', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tienda Virtual/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the header component', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner'); // Suponiendo que HeaderModule usa <header>
  expect(headerElement).toBeInTheDocument();
});

test('renders the ProductList component', () => {
  render(<App />);
  const productListElement = screen.getByText(/Productos/i); 
  expect(productListElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  expect(screen.getByText(/Categorias/i)).toBeInTheDocument();
  expect(screen.getByText(/Productos/i)).toBeInTheDocument();
});
