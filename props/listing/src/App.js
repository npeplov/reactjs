import './App.css';
import etsy from './components/etsy.js';
import Listing from './components/Listing';

function App() {
  return (
    <div className="App">
      <Listing items={etsy}/>
    </div>
  );
}

export default App;

// items — список предложений, массив объектов, по умолчанию пустой массив.