import './App.css';
import React, {useEffect, useState} from 'react';
import List from './components/List';
import Details from './components/Details';

function App() {
  let [users, setUsers] = useState([]);
  let [activeUser, setActiveUser] = useState(null);

  // componentDidMoount
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then((resolve) => resolve.json())
      .then((response) => setUsers(response));
    },
  [])

  
  return (
    <div className="App">
      <div>
        <ul>
          {users.map((item) => (
            <List
              item={item}
              callback={(user) => {
                // начинается загрузка данных по адресу:
                fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${user.id}.json`)
                .then((resolve) => resolve.json())
                .then((response) => setActiveUser(response))
                // .then(console.log(activeUser));
              }}
              key={item.id}
            />
          ))}
        </ul>
      </div>
      <div>
        <Details user={activeUser}/>
      </div>
    </div>
  );
}

export default App;
