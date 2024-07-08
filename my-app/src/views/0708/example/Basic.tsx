import React, { useState } from 'react'


//# Item 인터페이스를 정의
// : id는 숫자형, value는 문자열
interface Item {
  id: number;
  value: string;
}

//# items 배열을 정의
// : 각 아이템은 id와 value를 가지는 객체
const items: Item[] = [
  { id: 1, value: 'Apple' },
  { id: 2, value: 'Banana' },
  { id: 3, value: 'Orange' },
  { id: 4, value: 'Mango' },
];

export default function Basic() {
  //# 상태 설정
  // filter 상태를 정의하고, 기본값을 빈 문자열로 설정
  const [filter, setFilter] = useState('');
  // sort 상태를 정의하고, 기본값을 'asc'로 설정
  const [sort, setSort] = useState<'asc' | 'desc'>('asc');

  //# 핸들러 함수 정의
  // 필터 입력값이 변경될 때 호출되는 핸들러 함수
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value); // 입력된 값을 filter 상태로 설정
  };

  // 정렬 방식이 변경될 때 호출되는 핸들러 함수
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value as 'asc' | 'desc'); // 선택된 값을 sort 상태로 설정
  };

  //# 기능 함수
  // 필터링 및 정렬된 아이템 목록을 생성하는 함수
  const filteredAndSortedItems = (() => {
    console.log('Filtering and Sorting'); // 필터링과 정렬이 실행됨을 콘솔에 로그
    // 필터링을 적용 filter 문자열이 포함된 아이템만 선택
    let result = items.filter(item => item.value.toLowerCase().includes(filter.toLowerCase()));
    // 정렬을 적용 sort 상태에 따라 오름차순 또는 내림차순으로 정렬
    if (sort === 'asc') {
      result = result.sort((a, b) => a.value.localeCompare(b.value));
    } else {
      result = result.sort((a, b) => b.value.localeCompare(a.value));
    }
    // 필터링 및 정렬된 결과를 반환
    return result;
  })();

  // 컴포넌트의 JSX를 반환
  return (
    <div>
      {/* 필터 입력 필드 */}
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter items" 
      />
      {/* 정렬 방식 선택 필드 */}
      <select value={sort} onChange={handleSortChange}>
        <option value="asc">Ascending</option> {/* 오름차순 옵션 */}
        <option value="desc">Descending</option> {/* 내림차순 옵션 */}
      </select>
      {/* 필터링 및 정렬된 아이템 목록을 표시하는 리스트 */}
      
      <ul>
        {filteredAndSortedItems.map(item => (
          // 각 아이템을 리스트 아이템으로 표시 key로 id를 사용
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
