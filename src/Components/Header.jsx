import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <button>All Products</button>
      </Link>
      <Link to="/add">
        <button>Add Product</button>
      </Link>
    </header>
  );
};

export default Header;
