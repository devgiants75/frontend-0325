//# 영화 데이터를 가져오는 비동기 함수
export const fetchMovies = async (query) => { // 영화 데이터를 가져오는 비동기 함수
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`); // API 요청 보내기
  const data = await response.json(); // 응답을 JSON 형태로 변환
  return data.map(item => ({ // 데이터를 영화 객체로 매핑
      id: item.id, // 영화 ID 설정
      title: item.title // 영화 제목 설정
  }));
};
