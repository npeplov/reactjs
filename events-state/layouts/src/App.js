import "./App.css";
import IconSwitch from "./components/IconSwitch";
import Store from "./components/Store";
import {useState} from 'react';

function App() {
  let [icon, changeIcon] = useState('view_list');

  function toggleIcon(icon) {
    icon === 'view_list' ? icon = 'view_module' : icon = 'view_list';
    changeIcon(icon);
  }

  return (
    <div className="App">
      <header className="App-header">
      <IconSwitch
        icon={icon}
        onSwitch={toggleIcon}
      />
        <Store view={icon} />
      </header>
    </div>
  );
}

export default App;
