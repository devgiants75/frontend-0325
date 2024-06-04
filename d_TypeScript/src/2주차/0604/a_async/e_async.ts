//! e_async.ts
{
  //! Async & Await
  // : 프로미스를 기반으로 비동기 작업을 보다 간편하게 작성하는 방법

  // async로 정의된 함수 내에서
  // , await 키워드를 사용하여 비동기 작업의 결과를 기다림

  //? 사용 방법
  // 1. async 함수 내부에서만 await 사용 가능
  // 2. await는 프로미스의 결과를 기다리는 데 사용(비동기 작업)
  // : 동기 코드와 유사한 형태로 비동기 코드 작성

  // 함수가 비동기적으로 동작함을 명시: function 키워드 앞에 async 키워드를 작성
  async function fetchUserData() {
    // 정상적으로 실행되는 코드 블럭
    // : try-catch 블록을 사용하여 await 표현식에서 발생할 수 있는 예외를 캡쳐
    try {
      // 비동기적인 작업의 결과를 기다림
      const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
      const data = await response.json();
      console.log('사용자 데이터', data);
    } catch(error) {
      console.error('데이터 요청 중 오류: ', error);
    }
  }

  fetchUserData();

  //! 비동기 코드의 타입 안정성
  interface UserData {
    id: number;
    name: string;
    [key: string]: any;
  }

  async function fetchData(): Promise<UserData> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/3');

    if (!response.ok) {
      throw new Error('데이터 요청 실패');
    }
    
    return (await response.json()) as UserData;
  }

  fetchData()
    .then((data) => console.log('사용자 데이터', data))
    .catch((error) => console.error('오류: ', error));


  //! 실제 비즈니스 요구에 대한 비동기 처리 코드
  // : 게시물을 페이지별로 불러오기

  // 페이지 번호와 페이지당 게시물의 수를 인자로 받는 비동기 함수 정의
  // : 기본으로 한 페이지당 게시물의 수는 10으로 설정
  async function fetchPostsByPage(page: number, limit: number = 10): Promise<any[]> {
    try {
      // 요청 전달
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      );

      if (!response.ok) {
        throw new Error('데이터 요청 실패');
      }

      // 응답 데이터를 JSON 형태로 변환하여 반환
      return await response.json();

    } catch(error) {
      console.error(`오류: ${error}`);
      return [];
    }
  }

  //! 함수 호출
  // : then을 사용하여 비동기 작업이 완료된 후에 게시물을 콘솔에 출력
  fetchPostsByPage(2, 5).then((posts) => // id 6번 부터 10번 까지의 데이터가 출력
    console.log('페이지 2의 게시물: ', posts)
  );

  //& fetch() 함수
  // : 네트워크 요청을 비동기적으로 처리
  // : fetch는 Promise를 반환하는데, 이 Promise는 HTTP 응답을 나타내는 Response 객체로 해결

  // : Response 객체는 요청에 대한 서버의 응답을 포함하며, 여러 가지 유용한 속성과 메서드를 제공

  //? Response 객체의 주요 속성
  // ok: 이 속성은 HTTP 상태 코드가 200-299 범위에 있을 때 true를 반환
  //     >> 요청이 성공적으로 완료되었음을 나타냄

  // status: 응답의 HTTP 상태 코드를 반환 (예: 200, 404).

  // statusText: HTTP 상태 코드에 대한 텍스트 메시지를 반환 (예: "OK", "Not Found").

  // headers: 응답 헤더를 나타내는 Headers 객체. 헤더에서 특정 값을 조회 가능

  // body: 응답의 본문을 ReadableStream 형태로 제공 - 이 스트림을 통해 데이터를 읽기 가능
  // - 해당 데이터를 json()을 사용하여 JSON 형식으로 파싱
}
