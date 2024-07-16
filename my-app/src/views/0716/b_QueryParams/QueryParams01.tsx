import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function QueryParams01() {
  const [searchParams, setSearchParams] = useSearchParams();

  // 2) 쿼리 파라미터 값 읽어오기
  // - .get()메서드를 사용하여 지정된 key의 값을 호출
  // - 없다면 빈 문자열을 기본값으로 사용
  const query = searchParams.get('query') || '';

  // 1) 쿼리 파라미터 설정 >> 핸들러 내부에서 구현
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // 쿼리 파라미터 업데이트
    // 사용자 지정 키값에 value값 설정
    setSearchParams({ query: value });
  }

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="검색어를 입력해주세요."
      />

      <p>Search for: {query}</p>
    </div>
  );
}
