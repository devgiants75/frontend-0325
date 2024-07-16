import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email: string;
}

function SearchResults() {
  const { query } = useParams();
  const [results, setResults] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users?username=${query}`)
      .then(response => response.json())
      .then(data => {
        setResults(data);
        setLoading(false);
      });
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        results.length > 0 ? (
          results.map(user => (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )
      )}
    </div>
  );
}

export default SearchResults;
