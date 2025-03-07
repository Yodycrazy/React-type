import { productServices } from '../services/Products.services';
import ApiService from '../services/ApiService';
import { Product } from '../interfaces/Products.interface';

// Mock de `fetch`
global.fetch = jest.fn();

const mockProduct: Product = {
    id: 1,
    title: "Laptop",
    price: 1200,
    description: "Laptop gaming",
    categoryId: 2, 
    images: ["https://example.com/laptop.jpg"],
  };

describe("productServices", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe obtener todos los productos", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue([mockProduct]),
    });

    const products = await productServices.getProducts();
    expect(products).toEqual([mockProduct]);
    expect(fetch).toHaveBeenCalledWith("https://api.escuelajs.co/api/v1/products", { method: "GET" });
  });

  test("debe obtener un producto por ID", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockProduct),
    });

    const product = await productServices.getProductById(1);
    expect(product).toEqual(mockProduct);
    expect(fetch).toHaveBeenCalledWith("https://api.escuelajs.co/api/v1/products/1", { method: "GET" });
  });

  test("debe crear un producto", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockProduct),
    });

    const createdProduct = await productServices.createProduct(mockProduct);
    expect(createdProduct).toEqual(mockProduct);
    expect(fetch).toHaveBeenCalledWith("https://api.escuelajs.co/api/v1/products", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(mockProduct),
    });
  });

  test("debe actualizar un producto", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockProduct),
    });

    const updatedProduct = await productServices.updateProduct(1, mockProduct);
    expect(updatedProduct).toEqual(mockProduct);
    expect(fetch).toHaveBeenCalledWith("https://api.escuelajs.co/api/v1/products/1", {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(mockProduct),
    });
  });

  test("debe eliminar un producto", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(undefined),
    });

    await productServices.deleteProduct(1);
    expect(fetch).toHaveBeenCalledWith("https://api.escuelajs.co/api/v1/products/1", {
      method: "DELETE",
    });
  });

  test("debe filtrar productos correctamente", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue([mockProduct]),
    });

    const filters = { title: "Laptop", price_min: 1000, price_max: 1500 };
    const filteredProducts = await productServices.filterProducts(filters);
    expect(filteredProducts).toEqual([mockProduct]);

    expect(fetch).toHaveBeenCalledWith(
      "https://api.escuelajs.co/api/v1/products?title=Laptop&price_min=1000&price_max=1500",
      { method: "GET" }
    );
  });
});
