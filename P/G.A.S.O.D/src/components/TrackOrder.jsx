import React, { useState } from 'react';
import axios from 'axios';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  const [message, setMessage] = useState('');

  const handleTrackOrder = () => {
    axios.get(`http://localhost:5000/orders/${orderId}`)
      .then(response => setOrderStatus(response.data))
      .catch(error => {
        console.error('Error tracking order:', error);
        setMessage('Order not found');
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Track Your Order</h2>

      {/* Tracking Form */}
      <div className="space-y-4">
        <div>
          <label htmlFor="order-id" className="block text-gray-700">Order ID</label>
          <input
            type="text"
            id="order-id"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="border rounded-lg p-2 w-full"
          />
        </div>

        <button
          type="button"
          onClick={handleTrackOrder}
          className="bg-red-500 text-black py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Track Order
        </button>

        {orderStatus && (
          <div className="mt-4 p-4 border rounded-lg bg-gray-100">
            <h3 className="text-lg font-semibold">Order Status</h3>
            <p><strong>Order ID:</strong> {orderStatus.id}</p>
            <p><strong>Status:</strong> {orderStatus.status}</p>
            <p><strong>Estimated Delivery:</strong> {orderStatus.estimatedDelivery}</p>
          </div>
        )}

        {message && <p className="mt-4 text-red-600">{message}</p>}
      </div>
    </div>
  );
};

export default TrackOrder;


