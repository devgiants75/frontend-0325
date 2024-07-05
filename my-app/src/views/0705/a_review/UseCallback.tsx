import React, { useCallback, useState } from 'react'

interface ButtonProps {
  onClick: () => void
}

const Button = React.memo(({ onClick }: ButtonProps) => {
  console.log('버튼 컴포넌트가 렌더링되었습니다.');
  return <button onClick={onClick}>클릭해주세요</button>
})

export default function UseCallback() {
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<string>('');

  const handleUpClick = useCallback(() => {
    // 해당 콘솔창 확인!
    console.log('이벤트 핸들러 전달');
    setCount(prevCount => prevCount + 1);
  }, []);
  
  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleUpClick} />

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
