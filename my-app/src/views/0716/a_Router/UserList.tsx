import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type User = {
  id: number;
  name: string;
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link to={`${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
