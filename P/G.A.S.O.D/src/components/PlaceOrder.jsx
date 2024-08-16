import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlaceOrder = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handlePlaceOrder = () => {
    const order = {
      product: selectedProduct,
      quantity,
      deliveryAddress,
    };

    axios.post('http://localhost:5000/orders', order)
      .then(() => setMessage('Order placed successfully!'))
      .catch(error => console.error('Error placing order:', error));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Place an Order</h2>

      {/* Order Form */}
      <form className="space-y-4">
        <div>
          <label htmlFor="product" className="block text-gray-700">Select Product</label>
          <select
            id="product"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="border rounded-lg p-2 w-full"
          >
            <option value="">--Select a product--</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="quantity" className="block text-gray-700">Quantity</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border rounded-lg p-2 w-full"
            min="1"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-gray-700">Delivery Address</label>
          <textarea
            id="address"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            className="border rounded-lg p-2 w-full"
            rows="4"
          />
        </div>

        <button
          type="button"
          onClick={handlePlaceOrder}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>

      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default PlaceOrder;
