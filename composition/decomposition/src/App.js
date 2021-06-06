import './App.css';
import Banner from './components/Banner';
import BottomWidget from './components/BottomWidget';
import Media from './components/Media';
import Search from './components/Search';

const bottomWidget = {
  Weather: [
    {title: 'Morning: +17'},
    {title: 'Afternoon: +20'},
  ],
  Map: [
    {title: 'Schedules'}
  ],
  Broadcasting: [
    {title: 'Programm', channel: 'Success'},
    {title: 'Night 2', channel: 'earthTV'},
  ],
  Frequented: [
      {title: 'Possession', subcategory: 'Stalin\'s'},
      {title: 'Market', subcategory: 'Lightbulbs'},
      {title: 'Auto.at', subcategory: 'Audi Q7'},
    ],
  'TV program': [
    {title: 'Programm', channel: 'Success', time: '10:00'},
    {title: 'Night 2', channel: 'earthTV', time: '12:00'},
  ]
}

function App() {
  return (
    <div className="App">

      <Media/>

      <Search/>

      <Banner/>

      <div className="BottomWidgets">
        <BottomWidget name="Weather" data={bottomWidget}>
            <img src="weather.png" alt=""/>
            <span>+17°</span>
        </BottomWidget>

        <BottomWidget name="Map" data={bottomWidget} country="Tirol, Austria">
        </BottomWidget>

        <BottomWidget name="Broadcasting" data={bottomWidget} icon={'./32x32.png'}>
        </BottomWidget>
      
        <BottomWidget name="Frequented" data={bottomWidget}>
        </BottomWidget>

        <BottomWidget name ="TV program" data={bottomWidget}>
        </BottomWidget>

      </div>
    </div>
  );
}

export default App;
