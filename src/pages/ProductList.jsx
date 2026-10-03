import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../CartSlice.jsx';
import { categories } from '../data/plants.js';
export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const added = new Set(items.map(item => item.id));
  return <main className="page-shell"><div className="page-heading"><p className="eyebrow">The plant collection</p><h1>Find your new favorite</h1><p>Little leaves, big difference. Choose a plant for your space.</p></div>
    {categories.map(category => <section className="category" key={category.name}><h2>{category.name}</h2><div className="product-grid">{category.plants.map(plant => <article className="product-card" key={plant.id}><img src={plant.image} alt={plant.name}/><div className="product-info"><h3>{plant.name}</h3><p>{plant.description}</p><div className="product-bottom"><strong>${plant.price.toFixed(2)}</strong><button disabled={added.has(plant.id)} onClick={() => dispatch(addToCart(plant))}>{added.has(plant.id) ? 'Added ✓' : 'Add to Cart'}</button></div></div></article>)}</div></section>)}
  </main>;
}