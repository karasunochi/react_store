import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Styles/App.css';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import AddProduct from './Components/AddProduct';
import Sidebar from './Components/Sidebar';
import batring from './ProductImages/bat-ring.png';
import frogring from './ProductImages/frog-ring.png';
import cat from './ProductImages/cat.png';
import dinosaur from './ProductImages/dinosaur.png';
import heart from './ProductImages/heart.png';
import moth from './ProductImages/moth.png';
import skull_hairpin from './ProductImages/skull-hairpin.png';
import cat_bracelet from './ProductImages/cat-bracelet.png';
import skeletons from './ProductImages/skeletons.png';
import moon_sun from './ProductImages/moon&sun.png';
import hairpin from './ProductImages/moth-hairpin.png';

const App = () => {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : [
      { id: 1, type: 'Ring', name: 'Bat Ring', price: 147, image: batring },
      { id: 2, type: 'Ring', name: 'Frog Ring', price: 160, image: frogring },
      { id: 3, type: 'Necklace', name: 'Cat Necklace', price: 322, image: cat },
      { id: 4, type: 'Ring', name: 'Dino Ring', price: 450, image: dinosaur },
      { id: 5, type: 'Necklace', name: 'Heart Necklace', price: 212, image: heart },
      { id: 6, type: 'Necklace', name: 'Moth Necklace', price: 355, image: moth },
      { id: 7, type: 'Hairpin', name: 'Skull Hairpin', price: 654, image: skull_hairpin },
      { id: 8, type: 'Bracelet', name: 'Cat Bracelet', price: 410, image: cat_bracelet },
      { id: 9, type: 'Earrings', name: 'Skeletons', price: 550, image: skeletons },
      { id: 10, type: 'Earrings', name: 'Moon&Sun', price: 490, image: moon_sun },
      { id: 11, type: 'Hairpin', name: 'Moth Hairpin', price: 670, image: hairpin },
    ];
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);
  
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
  };

  const removeProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  
  const uniqueCategories = [...new Set(products.map(product => product.type))];

  return (
    <Router
      future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
      }}
    >
      <Header />
      <div className="app-container">
        <Sidebar categories={uniqueCategories} />
        <div className="content">
          <Routes>
            <Route path="/" element={<ProductList products={products} removeProduct={removeProduct} />} />
            <Route path="/add" element={<AddProduct addProduct={addProduct} products={products} />} />
            {uniqueCategories.map((category, index) => (
              <Route 
                key={index} 
                path={`/category/${category}`} 
                element={<ProductList products={products.filter(product => product.type === category)} removeProduct={removeProduct} />} 
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;