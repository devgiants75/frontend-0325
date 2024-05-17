/*
! 로컬 스토리지(Local Storage)

& 1. 로컬 스토리지의 정의
: 웹 브라우저가 제공하는 저장 공간
: 사용자의 컴퓨터에 영구적으로 데이터를 저장 가능

- HTML5 웹 스토리지 사양의 일부로 도입, 쿠키의 한계를 극복하고 더 큰 저장 용량과 더 나은 보안을 제공

- 로컬 스토리지를 통해 저장된 데이터는 서버에 자동으로 전송되지 않으며
  , 웹 페이지가 로컬 데이터를 직접 제어 가능


& 2. 로컬 스토리지의 용도

- 사용자 경험 개선
  : 로컬 스토리지는 사용자의 기본 설정, 테마 선택, 언어 설정 등을 저장하여
  , 다음 방문 때 웹사이트가 이 설정들을 기억하도록 지정
- 상태 유지
  : 웹 어플리케이션에서 사용자의 세션 정보나 로그인 상태를 관리할 수 있어
  , 브라우저를 종료 후 재접속했을 때도 이전 상태를 유지 가능

- 오프라인 데이터 저장
  : 네트워크 연결이 끊겨도 접근 가능한 정보를 저장함으로써
  , 오프라인 기능을 제공하는 애플리케이션에서 활용

- 성능 향상
  : 서버 요청 없이 로컬에서 데이터를 빠르게 불러올 수 있어
  , 웹 애플리케이션의 반응 속도와 효율성을 향상

& 3. 로컬 스토리지의 장점
- 대용량 저장
  : 로컬 스토리지는 약 5MB의 데이터를 저장 가능
  , 쿠키의 4KB 제한에 비해 훨씬 큰 용량을 제공

- 간단한 API
  : 로컬 스토리지는 간단한 setItem, getItem, removeItem, clear 등의 메소드를 제공
  , 데이터의 저장 및 관리를 쉽게 가능

- 서버 부하 감소
  : 데이터를 서버가 아닌 클라이언트에 저장
  , 서버로의 요청이 줄어들어 서버 부하가 감소

- 영구 저장
  : 로컬 스토리지에 저장된 데이터는 브라우저 세션 간에도 유지
  , 사용자가 명시적으로 삭제하지 않는 한 계속 보존

- 보안성
  : 데이터가 클라이언트 측에만 저장되고 HTTP 요청을 통해 서버에 전송 X
  , 쿠키에 비해 보안성 높음
*/

//! JS 로컬 스토리지 데이터 저장
// : localStorage.setItem(key, value) 사용법

// 로컬 스토리지는 웹 브라우저가 제공하는 데이터 저장 공간
// , 사용자가 브라우저를 닫아도 저장된 데이터가 유지

// >> localStorage 객체를 통해 간단하게 데이터를 저장하고, 조회 가능 

//& localStorage.setItem(key, value)의 기본 사용법
// localStorage.setItem 메소드는 로컬 스토리지에 데이터를 저장하는 데 사
// : 두 개의 매개변수를 받으며
//   , 첫 번째 매개변수는 데이터에 접근할 때 사용할 키(key)
//   , 두 번째 매개변수는 저장할 데이터의 값(value)

//? 1. 데이터 저장하기
// 기본 형식

// : 'key'는 데이터에 접근하기 위한 식별자
//   'value'는 해당 키에 저장할 값
// >> 저장된 데이터는 브라우저 세션 간에 유지, 사용자가 브라우저를 닫았다가 다시 열어도 데이터를 잃지 X

//! 예제: 사용자 이름 저장하기
// 이 코드는 'username'이라는 키에 'John Doe'라는 값을 로컬 스토리지에 저장
// >> 해당 데이터는 이후에 localStorage.getItem('username')을 호출하여 언제든지 접근 가능

//! 데이터 유형과 직렬화
// 로컬 스토리지는 기본적으로 문자열 데이터만 저장 가능 
// >> 객체나 배열 같은 복잡한 데이터 유형을 저장하려면, 이를 문자열 형태로 직렬화
// >> JavaScript에서는 JSON.stringify() 메소드를 사용하여 객체를 문자열로 변환 가능

// 객체 저장 예제

//& 보안 및 사용 제한

// - 로컬 스토리지에 저장된 데이터는 HTTPS를 사용하지 않는 경우 탈취될 위험 가능성 존재 O
// - 크로스-사이트 스크립팅(XSS) 공격에 취약할 수 있으므로, 사용자 입력을 직접 저장하기 전에 적절히 검증하고 소독하는 것이 중요