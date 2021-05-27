import React from "react";

export default function Card({ item, MainImage }) {
  function currencySymbol(currency) {
    if (currency === 'USD') return '$';
    else if (currency === 'EUR') return '€';
    return currency + ' ';
  }

  function titleCut(title) {
    if (!title) return;
    if (title.length > 50) return title.slice(0, 50) + '...';
  }

  function quantityLevel(quantity) {
    if (quantity <= 10) return 'item-quantity level-low';
    if (quantity <= 20) return 'item-quantity level-medium';
    return 'item-quantity level-high';
  }

  return (
    <div className="item" >
      <div className="item-image">
        <a href={item.url}>
          <img src={MainImage.url_570xN} alt="" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{titleCut(item.title)}</p>
        <p className="item-price">
          {currencySymbol(item.currency_code)}{item.price}
        </p>
        <p className={quantityLevel(item.quantity)}>{item.quantity}</p>
      </div>
    </div>
  );
}

Card.defaultProps = {
  MainImage: {url_570xN: null},
}
