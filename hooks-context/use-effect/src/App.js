import './App.css';
import React, {useEffect, useState} from 'react';
import List from './components/List';
import Details from './components/Details';

function App() {
  let [users, setUsers] = useState([]);
  let [activeUser, setActiveUser] = useState(null);
  let [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    setLoading(true);
    const resolve = await fetch(url);
    const response = await resolve.json();
    setLoading(false);
    return response;
  }

  useEffect(() => {
    fetchData('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    .then((response) => setUsers(response));
    },
  [])

  const getUserDetails = (user) => {
    fetchData(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${user.id}.json`,
      user
    ).then((response) => setActiveUser(response));
  }

  // осталось ref

  return (
    <div className="App">

      <div>
        <ul>
          {users.map((item) => (
            <List item={item} callback={getUserDetails} key={item.id} />
          ))}
        </ul>
      </div>

      <div>
        {loading ? <div>Loading...</div> : <Details user={activeUser}/>}
      </div>

    </div>
  );
}

export default App;
