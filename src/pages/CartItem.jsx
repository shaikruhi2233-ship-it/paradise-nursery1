
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const updateItemQuantity = (item, quantity) => {
    if (quantity >= 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity,
        })
      );
    }
  };

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/plants">Continue Shopping</Link>
        </div>
      </nav>

      <main className="page-container">
        <h1 className="page-title">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add some beautiful plants to get started.</p>
            <Link to="/plants" className="primary-btn">
              Shop Plants
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>Price: ₹{item.price}</p>
                    <p>
                      Subtotal: ₹{item.price * item.quantity}
                    </p>
                  </div>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        updateItemQuantity(item, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateItemQuantity(item, item.quantity + 1)
                      }
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </article>
              ))}
            </div>

            <div className="cart-total">
              <h2>Total: ₹{total}</h2>
              <button
                className="checkout-btn"
                onClick={() => alert("Thank you for shopping with us!")}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;