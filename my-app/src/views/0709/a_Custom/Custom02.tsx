import React from 'react'
import { useFetch } from './hooks/useFetch';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function Custom02() {

  const api = 'https://jsonplaceholder.typicode.com/users';

  const { data, loading, error } = useFetch<User[]>(api);

  if (loading) return <div>로딩중입니다.</div>;
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h4>Users</h4>
      <ul>
        {data?.map(user => (
          <li key={user.id}>
            {user.name} ({user.username} - {user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
