
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold  text-red-800 mb-4">Product Catalog</h2>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-lg p-2 mb-4 w-full"
      />

      {/* Display Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded-lg p-4 bg-gray-300 shadow-md">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-bold mt-4">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-red-900 font-semibold mt-2">${product.price}</p>
            <Link
              to={`/place-order?product=${product.id}`}
              className="mt-4 inline-block text-black bg-gray-200 py-2 px-4 rounded-full font-semibold hover:bg-red-500 hover:text-black transition-colors duration-300"
            >
              Order Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
