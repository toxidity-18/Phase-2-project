import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductCatalog from './components/ProductCatalog';
import OrderTracking from './components/TrackOrder';
import PlaceOrder from './components/PlaceOrder';
import DeliveryOptions from './components/DeliveryOptions';
import Feedback from './components/Feedback';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<ProductCatalog />} />
          <Route path="/catalog" element={<ProductCatalog />} />
          <Route path="/track-order" element={<OrderTracking />} />
          <Route path="/delivery-options" element={<DeliveryOptions />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          
        </Routes>
      </main>
    </Router>
  );
}

export default App;

