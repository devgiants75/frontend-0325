import React, { useState } from 'react'

// input 태그의 이벤트 핸들러와 상태를 관리하는 커스텀 훅

export function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleInputChange
  }
}
