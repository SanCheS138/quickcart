import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
import '../styles/Header.css';

function Header({ searchTerm, onSearchChange }) {
  const { getTotalItems, toggleCart } = useCart(); 

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <Link to="/" className="header-logo">
            <h1 className="header-title">🛒 QuickCart</h1>
          </Link>

          {/* Cart button now uses context */}
          <button className="cart-icon-btn" onClick={toggleCart}>
            🛒
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/category/Electronics" className="nav-link">Electronics</Link>
          <Link to="/category/Accessories" className="nav-link">Accessories</Link>
          <Link to="/category/Home" className="nav-link">Home</Link>
          <Link to="/category/Sports" className="nav-link">Sports</Link>
          <Link to="/cart" className="nav-link">Cart</Link>
        </nav>

        {/* Search bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
