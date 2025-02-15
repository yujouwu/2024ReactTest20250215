import { useEffect, useState } from 'react'
import axios from 'axios';


function App() {
  const [users, setUsers] = useState([]);
  
  const getUsers = async() => {
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=10`);
      const { results } = response.data;
      setUsers(results);
    } catch (error) {
      console.dir(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      <ul>
        {
          users.map((user, index) => (
            <li key={index}>{user.name.title} {user.name.first} {user.name.last}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App
