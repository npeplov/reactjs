import React from "react";
import Card from "./Card";

export default function Listing({ items }) {
  return (
    <div className="item-list">
      {items.map((item) => {
        return <Card item={item} MainImage={item.MainImage} key={item.listing_id} />
      })}
    </div>
  );
}

Listing.defaultProps = {
  items: [],
}


