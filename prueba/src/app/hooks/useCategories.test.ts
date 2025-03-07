import { renderHook, act, waitFor } from '@testing-library/react';
import { useCategories } from '../hooks/useCategories';
import { categoryServices } from '../services/Categories.services';
import { Category } from '../interfaces/Categories.interface';

// Simulación de categorías para la prueba
const mockCategories: Category[] = [
  { id: 1, name: 'clothes', image: '' },
  { id: 2, name: 'shoes', image: '' },
];

// Mock del servicio
jest.mock('../services/Categories.services', () => ({
  categoryServices: {
    getCategories: jest.fn(),
  },
}));

describe('useCategories Hook', () => {
  test('debe obtener categorías correctamente', async () => {
    (categoryServices.getCategories as jest.Mock).mockResolvedValue(mockCategories);

    const { result } = renderHook(() => useCategories());

    // Verifica que el estado inicial es `loading`
    expect(result.current.loading).toBe(true);
    expect(result.current.categories).toEqual([]);
    expect(result.current.error).toBeNull();

    // Esperamos a que `categories` se actualice
    await waitFor(() => expect(result.current.loading).toBe(false));

    // Verifica que las categorías se cargaron correctamente
    expect(result.current.categories).toEqual(mockCategories);
    expect(result.current.error).toBeNull();
  });

  test('debe manejar un error si la petición falla', async () => {
    (categoryServices.getCategories as jest.Mock).mockRejectedValue(new Error('Network Error'));

    const { result } = renderHook(() => useCategories());

    // Estado inicial
    expect(result.current.loading).toBe(true);
    expect(result.current.categories).toEqual([]);
    expect(result.current.error).toBeNull();

    // Esperamos a que `error` se actualice
    await waitFor(() => expect(result.current.loading).toBe(false));

    // Verifica que se manejó el error correctamente
    expect(result.current.categories).toEqual([]);
    expect(result.current.error).toBe('Failed to load categories');
  });
});
