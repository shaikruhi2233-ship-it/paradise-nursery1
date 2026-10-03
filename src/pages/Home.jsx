import { Link } from 'react-router-dom';
import AboutUs from '../components/AboutUs.jsx';
export default function Home() {
  return <><main className="hero"><div className="hero-content"><span className="eyebrow">Bring nature home</span><h1>Find your little<br/><em>piece of paradise.</em></h1><p>Thoughtfully chosen houseplants to make every room feel fresh, warm, and alive.</p><Link className="primary-btn" to="/plants">Get Started <span>→</span></Link></div><div className="hero-note">GROW A LITTLE JOY EVERY DAY</div></main><AboutUs /></>;
}