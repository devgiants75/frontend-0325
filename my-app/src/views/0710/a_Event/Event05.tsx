import React, { useCallback, useState } from 'react'

export default function Event05() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <button onClick={increment}>Count: {count}</button>
    </div>
  )
}
