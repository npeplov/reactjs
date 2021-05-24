import React from 'react'

export default function ShopItem({item}) {
  return (
    <div className="ShopItem">
      <div className="Image"><img src={item.img} alt="" /></div>
      
        <h3>{item.name}</h3>
        <span className="Color">{item.color}</span>
      
        <div className="Price">${item.price}</div>
        <button>Add to cart</button>
    </div>
  )
}
