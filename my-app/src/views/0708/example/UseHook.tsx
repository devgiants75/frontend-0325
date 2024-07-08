import React, { useMemo, useState, useCallback } from 'react';

//# Item 인터페이스를 정의
// : id는 숫자형, value는 문자열, category는 문자열
interface Item {
  id: number;
  value: string;
  category: string;
}

//#  items 배열을 정의
// : 각 아이템은 id, value, category를 가지는 객체
const items: Item[] = [
  { id: 1, value: 'Apple', category: 'Fruit' },
  { id: 2, value: 'Banana', category: 'Fruit' },
  { id: 3, value: 'Orange', category: 'Fruit' },
  { id: 4, value: 'Mango', category: 'Fruit' },
  { id: 5, value: 'Carrot', category: 'Vegetable' },
  { id: 6, value: 'Broccoli', category: 'Vegetable' },
];

//# GroupedItems 인터페이스를 정의
// : category는 문자열, items는 Item 배열
interface GroupedItems {
  category: string;
  items: Item[];
}

//# FilteredAndSortedItems 타입을 정의
// : Item 배열 또는 GroupedItems 배열
type FilteredAndSortedItems = Item[] | GroupedItems[];

export default function UseHook() {
  //# 상태 설정

  // filter 상태를 정의하고, 기본값을 빈 문자열로 설정
  const [filter, setFilter] = useState('');
  // sort 상태를 정의하고, 기본값을 'asc'로 설정
  const [sort, setSort] = useState<'asc' | 'desc'>('asc');
  // groupByCategory 상태를 정의하고, 기본값을 false로 설정
  const [groupByCategory, setGroupByCategory] = useState<boolean>(false);

  //# 이벤트 핸들러 함수 정의

  // 필터 입력값이 변경될 때 호출되는 핸들러 함수
  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value); // 입력된 값을 filter 상태로 설정
  }, []);

  // 정렬 방식이 변경될 때 호출되는 핸들러 함수
  const handleSortChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value as 'asc' | 'desc'); // 선택된 값을 sort 상태로 설정
  }, []);

  // 그룹핑 옵션이 변경될 때 호출되는 핸들러 함수
  const handleGroupByCategoryChange = useCallback(() => {
    setGroupByCategory(prev => !prev); // 이전 상태값을 반전
  }, []);

  // 필터링, 정렬, 그룹핑된 아이템 목록을 생성하는 함수
  const filteredAndSortedItems: FilteredAndSortedItems = useMemo(() => {
    console.log('Filtering, Sorting, and Grouping'); // 필터링, 정렬, 그룹핑이 실행됨을 콘솔에 기록

    // 필터링을 적용 filter 문자열이 포함된 아이템만 선택
    let result = items.filter(item => item.value.toLowerCase().includes(filter.toLowerCase()));
    // 정렬을 적용 sort 상태에 따라 오름차순 또는 내림차순으로 정렬
    if (sort === 'asc') {
      result = result.sort((a, b) => a.value.localeCompare(b.value));
    } else {
      result = result.sort((a, b) => b.value.localeCompare(a.value));
    }
    // 그룹핑이 활성화된 경우 그룹핑을 적용
    if (groupByCategory) {
      const groupedResult = result.reduce<{ [key: string]: Item[] }>((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {});
      // 그룹핑된 결과를 반환
      return Object.entries(groupedResult).map(([category, items]) => ({
        category,
        items,
      }));
    }
    // 필터링 및 정렬된 결과를 반환
    return result;
  }, [filter, sort, groupByCategory]);

  // 아이템이 GroupedItems 배열인지 확인하는 함수
  const isGroupedItems = (items: FilteredAndSortedItems): items is GroupedItems[] => {
    return groupByCategory; // groupByCategory 상태를 반환
  };

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
      {/* 그룹핑 옵션 체크박스 */}
      <label>
        <input
          type="checkbox"
          checked={groupByCategory} // groupByCategory 상태값을 표시
          onChange={handleGroupByCategoryChange} 
        />
        Group by category
      </label>
      {/* 필터링 및 정렬된 아이템 목록을 표시하는 리스트 */}
      <ul>
        {isGroupedItems(filteredAndSortedItems) ? (
          // 그룹핑된 경우, 카테고리별로 아이템을 그룹화하여 표시
          filteredAndSortedItems.map(group => (
            <li key={group.category}>
              <strong>{group.category}</strong> 
              <ul>
                {group.items.map(item => (
                  <li key={item.id}>{item.value}</li> // 각 아이템을 리스트 아이템으로 표시 key로 id를 사용
                ))}
              </ul>
            </li>
          ))
        ) : (
          // 그룹핑되지 않은 경우, 아이템을 단순히 리스트 아이템으로 표시
          filteredAndSortedItems.map(item => (
            <li key={item.id}>{item.value}</li> // 각 아이템을 리스트 아이템으로 표시 key로 id를 사용
          ))
        )}
      </ul>
    </div>
  );
}
