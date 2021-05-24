import React from "react";

export default function ShopCard({ card }) {
  return (
    <div className="ShopCard">
      <header>
        <h3>{card.name}</h3>
        <span className="Color">{card.color}</span>
      </header>
      <img src={card.img} alt="" />
      <footer>
        <div className="Price">${card.price}</div>
        <button>Add to cart</button>
      </footer>
    </div>
  );
}
