import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ addProduct, products }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setImage(reader.result); 
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { id: Date.now(), name, type, price: parseFloat(price), image };
    addProduct(newProduct);
    navigate('/'); 
  };

  const uniqueTypes = [...new Set(products.map(product => product.type))];

  return (
    <div className='addProduct'>
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Product Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <select 
          value={type} 
          onChange={(e) => setType(e.target.value)} 
          required
        >
          <option value="" disabled>Select Product Type</option>
          {uniqueTypes.map((uniqueType, index) => (
            <option key={index} value={uniqueType}>
              {uniqueType}
            </option>
          ))}
        </select>
        <input 
          type="number" 
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
        />
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          required 
        />
        <button type="submit">Add Product</button>
        {image && <img src={image} alt="Preview" style={{ width: '200px', margin: '10px' }} />}
      </form>
    </div>
  );
};

export default AddProduct;
