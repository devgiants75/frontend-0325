//! 자바스크립트 비동기 프로그래밍 - async/await

//! 1. Async/await의 정의
// : 'async 함수' 내에서 'await 키워드'를 사용하여 비동기 작업이 완료될 때까지 함수의 실행을 일시적으로 멈춤

//? async 함수 구조
// - async 함수는 JavaScript에서 비동기 함수를 정의할 때 사용하는 키워드
// : 항상 Promise를 반환

// - async 함수 내부에서는 await 키워드를 사용 가능
// : Promise의 결과를 기다림

async function fetchData () {
  // 비동기 작업을 수행
}

//? await 키워드로 함수 실행 중지
// 사용자의 정보를 가지고오는 함수
async function fetchUserData() {
  // fetch('url') 메서드: 해당 url을 통해 서버와 통신을 하는 메서드
  let data = await fetch('https://api.example.com/data');
  let jsonData = await data.json();
  console.log(jsonData);
  
}

// : await 키워드는 async 함수 내에서만 사용 가능
// : Promise가 완료될 때까지 기다림
//   , 프로미스가 성공적으로 완료되면 결과 값을 반환 
//     / 실패 시 예외를 발생

//? 비동기 작업과 예외 처리
// 비동기 작업은 외부 서버와의 통신 또는 다른 비즈니스 로직과의 결합이 많기 때문에 코드 실행의 예외 발생 가능성이 높음
// : 주로 예외 처리의 코드와 함께 사용
async function fetchCustomerData() {
  try {
    let data = await fetch('https://api.example.com/data');

    if (!data.ok) {
      throw new Error('네트워크 응답이 정상적이지 않습니다.');
    }

    let jsonData = await data.json();
    console.log(jsonData);

  } catch (error) {
    console.error('에러가 발생하였습니다.', error.message);
  }
}

// async 키워드로 명시된 함수 외에는 일반적인 코드 실행 순서에 따라 동작
// : 비동기 함수의 실행(통신을 통해 데이터를 가져옴)은 해당 로직의 실행 흐름에 따라 실행 

//& fetch('url') 함수
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