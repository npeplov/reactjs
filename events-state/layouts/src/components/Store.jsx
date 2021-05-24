import CardsView from "./CardsView";
import ListView from "./ListView";
import products from './products.js';

export default function Store({view}) {
  return (
    <div className="Store">
      {view === 'view_module' ? <CardsView cards={products}/> : <ListView items={products} />}
    </div>
  );
}
