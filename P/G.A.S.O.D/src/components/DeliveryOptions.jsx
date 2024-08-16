import React from 'react';

const DeliveryOptions = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Delivery Options</h2>
      <div className="space-y-4">
        <div className="border rounded-lg p-4 bg-white shadow-md">
          <h3 className="text-lg font-semibold">Standard Delivery</h3>
          <p>Delivery within 3-5 business days.</p>
        </div>
        <div className="border rounded-lg p-4 bg-white shadow-md">
          <h3 className="text-lg font-semibold">Express Delivery</h3>
          <p>Delivery within 1-2 business days.</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOptions;

