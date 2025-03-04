import React from 'react';
import './App.css';
import ProductList from './app/modules/products/ProductList';
import CategoryList from './app/modules/categories/CategoriesList';
import HeaderModule from './app/modules/header/HeaderModule';

function App() {
  return (
    
    <div className="App">
      <HeaderModule />
      <h1>Tienda Virtual</h1>
      <h2>Escoge entre cientos de productos...</h2>
      <ProductList />
      <h2>Nuestras categorias...</h2>
      <CategoryList/>
    </div>
  );
}

export default App;
