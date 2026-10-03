
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../CartSlice";
import plants from "../data/plants";

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="product-page">
      <h1>Our Plants</h1>
      <div className="product-grid">
        {plants.map((plant) => (
          <div className="product-card" key={plant.id}>
            <img
              src={plant.image}
              alt={plant.name}
            />
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p>Price: ₹{plant.price}</p>
            <button
              onClick={() => dispatch(addItem(plant))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;