import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
}

function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [id]);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
}

export default UserDetail;
