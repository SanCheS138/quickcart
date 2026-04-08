import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import CategoryPage from './components/CategoryPage.jsx';
import CartPage from './components/CartPage.jsx';
import CartSidebar from './components/CartSidebar.jsx';
import { products } from './data/products.js';
import './styles/App.css';

function App() {
  // Remove all cart state - now in Context!
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <BrowserRouter>
      <div className="app">
        <Header 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <HomePage 
                products={products}
                searchTerm={searchTerm}
              />
            } />
            
            <Route path="/category/:category" element={
              <CategoryPage products={products} />
            } />
            
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
        
        <CartSidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;