import React from 'react'
import ShopCard from './ShopCard'

export default function CardsView({cards}) {
  return (
    <div className="CardsView">
      {cards.map((card) => 
        <ShopCard card={card} key={card.id}/>
      )}
    </div>
  )
}
