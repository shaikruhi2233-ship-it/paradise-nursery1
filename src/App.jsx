import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import ProductList from './pages/ProductList.jsx';
import CartItem from './pages/CartItem.jsx';
export default function App() {
  const location = useLocation();
  return <div className="app"><Navbar />{location.pathname === '/' && <Routes><Route path="/" element={<Home/>}/></Routes>}<Routes><Route path="/plants" element={<ProductList/>}/><Route path="/cart" element={<CartItem/>}/></Routes><footer>© 2026 Paradise Nursery <span>Made for greener days.</span></footer></div>;
}