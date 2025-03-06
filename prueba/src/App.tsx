import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './app/modules/products/ProductList';
import CategoryList from './app/modules/categories/CategoriesList';
import HeaderModule from './app/modules/header/HeaderModule';
import ProductDetail from './app/modules/products/ProductDetail';
import CategoryProducts from './app/modules/categories/CategoryProducts';
import { Typography } from '@mui/material';
import ProductCreate from './app/modules/products/ProductCreate';

function App() {
  return (
    <Router>
      <div className="App">
        <Typography variant="h1" sx={{ color: "white", font: "bold" }}>Tienda Virtual</Typography>
        <HeaderModule />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/createProduct" element={<ProductCreate />} />
          <Route path="/category" element={<CategoryList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/categories/:id/products" element={<CategoryProducts />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
