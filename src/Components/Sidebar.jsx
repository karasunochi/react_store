import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ categories }) => {
  return (
    <div className="sidebar">
      <h3>Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
