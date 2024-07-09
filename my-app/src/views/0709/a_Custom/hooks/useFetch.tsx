import { useEffect, useState } from 'react'

//! 커스텀 훅 사용 예시 로직
// : 실무에서는 API 호출, 이벤트 리스너 관리, 폼 데이터 처리 등 다양한 용도로 Custom Hook을 작성

//! FetchResult 인터페이스 정의
// 데이터 가져오기 작업의 결과 상태를 정의
interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

//! useFetch 커스텀 훅 정의
// URL에서 데이터를 가져오고 데이터의 상태(로딩 중, 완료, 오류)를 관리
export function useFetch<T>(url: string): FetchResult<T> {

  const [result, setResult] = useState<FetchResult<T>>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      setResult({
        data: null,
        loading: true,
        error: null
      });

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('데이터 패칭에 실패하였습니다.');
        }

        const data = await response.json();

        setResult({
          data,
          loading: false,
          error: null
        });

      } catch (error) {
        setResult({
          data: null,
          loading: false,
          error: error as Error
        });
      }
    };

    fetchData();
  }, [url]);

  return result;
}
