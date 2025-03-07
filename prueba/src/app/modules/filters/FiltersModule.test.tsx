import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FiltersModule from '../../modules/filters/FiltersModule';
import { Category } from '../../interfaces/Categories.interface';

// Datos ficticios de categorías para la prueba
const mockCategories: Category[] = [
  { id: 1, name: 'clothes', image: '' },
  { id: 2, name: 'shoes', image: '' },
];

// Mocks para las funciones de búsqueda y reinicio
const mockOnSearch = jest.fn();
const mockOnReset = jest.fn();

describe('FiltersModule Component', () => {
  test('debe renderizar correctamente el título y los filtros', () => {
    render(
      <FiltersModule categories={mockCategories} onSearch={mockOnSearch} onReset={mockOnReset} />
    );

    // Verifica que el título de filtros aparece en la pantalla
    expect(screen.getByText(/Filtros/i)).toBeInTheDocument();
    
    // Verifica que las categorías están en la pantalla
    expect(screen.getByText(/clothes/i)).toBeInTheDocument();
    expect(screen.getByText(/shoes/i)).toBeInTheDocument();
  });

  test('debe llamar a onSearch cuando se realiza una búsqueda', () => {
    render(
      <FiltersModule categories={mockCategories} onSearch={mockOnSearch} onReset={mockOnReset} />
    );

    // Simular una búsqueda (dependerá de cómo está implementado SearchBar)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Classic' } });
    fireEvent.click(screen.getByRole('button', { name: /Buscar/i }));

    // Verifica que la función onSearch fue llamada al menos una vez
    expect(mockOnSearch).toHaveBeenCalled();
  });

  test('debe llamar a onReset cuando se presiona el botón de reset', () => {
    render(
      <FiltersModule categories={mockCategories} onSearch={mockOnSearch} onReset={mockOnReset} />
    );

    // Simular un clic en el botón de "Resetear"
    fireEvent.click(screen.getByRole('button', { name: /Restablecer/i }));

    // Verificar que la función onReset fue llamada
    expect(mockOnReset).toHaveBeenCalled();
  });
});
