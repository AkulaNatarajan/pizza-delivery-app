import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Pizza Delivery App</h1>
        <Routes>
          {/* Routes to be implemented */}
          {/* User Routes: Home, Register, Login, Dashboard, Order, Checkout */}
          {/* Admin Routes: AdminLogin, AdminDashboard, InventoryManagement, OrderManagement */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
