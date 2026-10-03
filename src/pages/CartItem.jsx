import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../CartSlice.jsx';
export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return <main className="page-shell cart-page"><div className="page-heading"><p className="eyebrow">Your basket</p><h1>Shopping Cart</h1></div>
    {items.length === 0 ? <div className="empty-cart"><div className="empty-icon">♡</div><h2>Your cart is waiting to bloom.</h2><p>Add a few plants and they’ll show up here.</p><Link className="primary-btn" to="/plants">Continue Shopping →</Link></div> :
    <div className="cart-layout"><section className="cart-items">{items.map(item => <article className="cart-row" key={item.id}><img src={item.image} alt={item.name}/><div className="cart-product"><h3>{item.name}</h3><p>${item.price.toFixed(2)} each</p><div className="quantity"><button aria-label="Decrease quantity" onClick={() => dispatch(decreaseQuantity(item.id))}>−</button><span>{item.quantity}</span><button aria-label="Increase quantity" onClick={() => dispatch(increaseQuantity(item.id))}>+</button></div></div><div className="line-total"><strong>${(item.price * item.quantity).toFixed(2)}</strong><button className="remove" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button></div></article>)}</section>
      <aside className="summary"><h2>Order summary</h2><div><span>Items ({items.reduce((s,i)=>s+i.quantity,0)})</span><span>${total.toFixed(2)}</span></div><div className="summary-total"><strong>Total</strong><strong>${total.toFixed(2)}</strong></div><button className="checkout" onClick={() => alert('Coming Soon!')}>Checkout</button><Link className="continue-link" to="/plants">← Continue Shopping</Link></aside></div>}
  </main>;
}