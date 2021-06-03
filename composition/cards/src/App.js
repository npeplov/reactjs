import './App.css';
import './bootstrap.min.css';
import Card from './components/Card';
import {nanoid} from 'nanoid'
import Thumbnail from './components/Thumbnail';

const data = [
  {
    title: 'Card title',
    description:
      'Some quick example text to build on the card title and make up the  bulk of the cards content.',
    img: '../image-crap.jpg',
  },
  {
    title: 'Spectial title treatment',
    description:
      'With supporting text below as a natural lead-in to additional content',
  },
]

function App() {
  return (
    <div className="App">
      {data.map((item) => (
        <Card key={nanoid()} {...item} >
          <Thumbnail src={item.img}/>
        </Card>
      ))}
    </div>
  )
}

export default App;
