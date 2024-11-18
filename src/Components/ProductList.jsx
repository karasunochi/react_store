import React from 'react';

const ProductList = ({ products, removeProduct  }) => {
  return (
    <div className='product-list'>
      <div className='products-grid'>
        {products.map((product) => (
          <div className='product-item' key={product.id}>
            {product.image && <img src={product.image} alt={product.name} className='product-image'/>}
            <h3>{product.name}</h3>
            <p>Price: {product.price}р</p>
            <button onClick={() => removeProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
