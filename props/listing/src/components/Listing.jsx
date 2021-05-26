import React from "react";

export default function Listing({ items }) {
  return (
    <div className="item-list">
      {items.map((item) => {
        if (item.state !== "active") {
          return null;
        }
        return (
          <div className="item" key={item.title}>
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} alt="" />
              </a>
            </div>
            <div className="item-details" key={item.title}>
              <p className="item-title">{item.title}</p>
              <p className="item-price">{item.currency_code} {item.price}</p>
              <p className="item-quantity level-medium">{item.quantity}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// в отд. карточку:
// Listing.defaultProps = {
//   items.MainImage: null;
// }

// 1. default props вместо null

// Если название предложения привышает 50 символов, то необходимо выводить только 
// первые 50 символов, и добавлять символ … в конце.

// в долларах США, код USD, то цену вывести в формате $50.00;
// в евро, код EUR, то цену вывести в формате €50.00;
// в остальных случаях цену вывести в формате 50.00 GBP, где GBP — код валюты.