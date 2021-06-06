import './App.css';
import Banner from './components/Banner';
import BottomWidgetAll from './components/BottomWidgetAll';
import Media from './components/Media';
import Search from './components/Search';

const media =
[
  {icon: "./media/1.png", time: "13:50", title: "В России начали проверять надежность ядерного боезапаса"},
  {icon: "./media/1.png", time: "14:24", title: "Российских школьников привлекли к тушению лесных пожаров"},
  {icon: "./media/1.png", time: "14:15", title: "Новак сообщил сроки завершения строительства «Северного потока-2»"},
  {icon: "./media/1.png", time: "14:11", title: "Российский гонщик попал в призы гонки «Формулы-2»"},
  {icon: "./media/1.png", time: "14:04", title: "Силуанов рассказал о нервирующих его тратах бюджета"},
  {icon: "./media/1.png", time: "14:03", title: "Украине посоветовали «вступить в борьбу» и не мешать «Северному потоку-2»"},
  {icon: "./media/1.png", time: "13:58", title: "Зеленский лично пожарил шашлык для украинских журналистов"}
]

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

      <Media data={media}/>

      <Search/>

      <Banner/>

      <BottomWidgetAll data={bottomWidget}/>

    </div>
  );
}

export default App;
