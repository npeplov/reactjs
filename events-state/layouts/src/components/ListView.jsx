import React from 'react'
import ShopItem from './ShopItem'

export default function ListView({items}) {
  return (
    <div>
      {items.map((item) => 
        <ShopItem item={item} key={item.id}/>
      )}
    </div>
  )
}
