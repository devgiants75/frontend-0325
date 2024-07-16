import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchForm() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/0716/results/${input}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter search terms..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
