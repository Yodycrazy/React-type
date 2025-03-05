import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './app/modules/products/ProductList';
import CategoryList from './app/modules/categories/CategoriesList';
import HeaderModule from './app/modules/header/HeaderModule';
import ProductDetail from './app/modules/products/ProductDetail';
import CategoryProducts from './app/modules/categories/CategoryProducts';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderModule />
        <h1>Tienda Virtual</h1>
        <h2>Escoge entre cientos de productos...</h2>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/categories/:id/products" element={<CategoryProducts />} /> 
        </Routes>
        <h2>Nuestras categorias...</h2>
        <CategoryList />
      </div>
    </Router>
  );
}

export default App;
