
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../CartSlice";
import plants from "../data/plants";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/cart">
            Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
          </Link>
        </div>
      </nav>

      <main className="page-container">
        <h1 className="page-title">Our Plants</h1>

        {categories.map((category) => (
          <section className="category-section" key={category}>
            <h2>{category}</h2>

            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <article className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p><strong>Price: ₹{plant.price}</strong></p>

                    <button
                      className="add-btn"
                      onClick={() => dispatch(addItem(plant))}
                    >
                      Add to Cart
                    </button>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;