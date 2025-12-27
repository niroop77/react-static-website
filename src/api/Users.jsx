import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  // State to store the fetched data
  const [users, setUsers] = useState([]);
 

  useEffect(() => {
    // Define the asynchronous function to fetch data
    const fetchUsers = async () => {
      try {
        // Axios automatically parses the response to JSON. 
        // The actual data is in the `response.data` property.
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
       
      } catch (err) {
        
        setUsers([]);
      } 
    };

    fetchUsers();
  }, []); // The empty dependency array ensures this runs only once when the component mounts


  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          // Use user.id as the key for performance and uniqueness
         <>
                 <li key={user.id}>{user.name}</li> 
          <li key={user.id}>{user.address.city}</li>
          {/* <i><img src={} /></i> */}
         </> 
        ))}
      </ul>
    </div>
  );
}

export default Users;
