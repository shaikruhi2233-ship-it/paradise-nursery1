import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa';
import { useSelector } from 'react-redux';
export default function Navbar() {
  const count = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  return <header className="navbar"><NavLink to="/" className="brand"><FaLeaf /> Paradise Nursery</NavLink>
    <nav><NavLink to="/">Home</NavLink><NavLink to="/plants">Plants</NavLink><NavLink to="/cart" className="cart-link"><FiShoppingCart /> Cart <span className="cart-count">{count}</span></NavLink></nav>
  </header>;
}