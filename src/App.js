import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Styles from './components/App.css'

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
return (
  <div className='center'>
      {users.slice(0, 5).map((user) => (
          <div key={user.id} className='App'>
              <b>{user.name}</b>
              <p>{user.username}</p>
              <p>{user.email}</p>
          </div>
      ))}
  </div>
)
}

export default App;