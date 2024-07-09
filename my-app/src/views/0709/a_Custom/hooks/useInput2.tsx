import React, { useCallback, useState } from 'react'

// UseInputReturn 인터페이스 정의
// : 사용자 입력을 처리하는 훅의 반환 타입을 정의
interface UseInputReturn {
  value: string;
  reset: () => void;
  // 실제 입력 필드에 나열될 속성
  bind: {
    value: string;
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
  };
}

// useInput 함수 정의: 초기값을 매개변수로 받고, 입력 상태를 관리하는 훅을 생성
export function useInput2(initialValue: string): UseInputReturn {
  const [value, setValue] = useState(initialValue);

  const reset = useCallback(() => setValue(initialValue), [initialValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }

  return {
    value,
    reset,
    bind: {
      value,
      onChange: handleChange
    }
  }
}
