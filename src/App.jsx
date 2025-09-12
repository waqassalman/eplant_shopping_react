
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import Navbar from './components/navbar';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import LandingPage from './components/LandingPage';


function App() {
  
  return (
    <Provider store={store}>
      <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/cart" element={<CartItem />} />
              <Route path="*" element={<LandingPage />} />
            </Routes>
          </div>
      </Router>
    </Provider>
  );
}

export default App;



