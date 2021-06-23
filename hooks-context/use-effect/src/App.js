import './App.css';
import React, {useEffect, useState, useRef} from 'react';
import List from './components/List';
import Details from './components/Details';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({id: null});
  const [loading, setLoading] = useState(false);
  const userIdRef = useRef();

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
    userIdRef.current = user.id;
    if (userIdRef.current !== selectedUser.id)
      fetchData(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${user.id}.json`,
        user
      ).then((response) => setSelectedUser(response));
  }


  return (
    <div className="App">

      <div className="List">
        <ul>
          {users.map((item) => (
            <List item={item} callback={getUserDetails} key={item.id} />
          ))}
        </ul>
      </div>

      <div>
        {loading ? <div>Loading...</div> : selectedUser.id && <Details user={selectedUser}/>}
      </div>

    </div>
  );
}

export default App;
