import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './navbar.css'

const Navbar = () => {
  const CartItems = useSelector(state => state.cart.items);
  const calculateTotalQuantity = () => {
  return CartItems ? CartItems.reduce((total, item) => total + item.quantity, 0) : 0;
   };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          🌿 Ecopure Nursery
        </Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Plants</Link>
          <Link to="/cart" className="nav-link cart-link">
            🛒 Cart
            {calculateTotalQuantity() > 0 && <span className="cart-badge">{calculateTotalQuantity()}</span>}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar