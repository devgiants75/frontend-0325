//! 로컬 스토리지(Local Storage)

//& localStorage.getItem(key)의 기본 사용법

// localStorage.getItem 메소드는 지정된 키에 해당하는 값을 로컬 스토리지에서 검색하여 반환
// : 키에 해당하는 데이터가 없으면 null을 반환
// : 해당 메소드는 데이터를 조회할 때 사용되며, 매우 간단하고 직관적인 API를 제공

// 'key'는 데이터에 접근하기 위해 사용되는 식별자
// : 해당 식별자를 통해 저장된 값을 검색 가능

let value = localStorage.getItem('key');
console.log(value);

//? 사용자 이름 조회 예제
let username = localStorage.getItem('username');
console.log(username);

//& 복잡한 데이터 타입 처리
// 로컬 스토리지는 기본적으로 문자열 데이터만을 저장
// >> 객체와 같은 복잡한 데이터 타입을 조회할 때는 문자열에서 다시 해당 타입으로 변환하는 과정이 필요
// >> JSON.parse() 메소드를 사용

//? 객체 데이터 조회 예제
let storedData = localStorage.getItem('사용자정보');
let userInfo = JSON.parse(storedData);
console.log(userInfo);
console.log(userInfo.name);
console.log(userInfo.age);

//& 주의 사항
// null 처리
// : localStorage.getItem이 null을 반환할 경우를 대비하여, 데이터를 사용하기 전에 이를 확인하고 적절히 처리

// 보안
// : 저장된 데이터는 사이트 간 스크립팅(XSS) 공격에 노출될 수 있으므로, 외부 입력을 직접 저장하거나 조회할 때는 주의가 필요

// ======================= //
//& JS 로컬 스토리지 데이터 삭제
// : localStorage.removeItem(key) 및 localStorage.clear() 사용법
// >> 개별 데이터 항목을 삭제하거나 저장된 모든 데이터를 한 번에 삭제 가능

//? localStorage.removeItem(key) 사용법
// localStorage.removeItem 메소드는 지정된 키에 해당하는 항목을 로컬 스토리지에서 삭제
// : 특정 키를 사용하여 로컬 스토리지에서 단일 데이터 항목을 제거할 때 사용

// localStorage.removeItem('key');
// : 'key'는 삭제하고자 하는 데이터의 식별자

// 예제: 사용자 이름 삭제하기
localStorage.removeItem('username');

//? localStorage.clear() 전체 삭제 사용법
// localStorage.clear() 메소드는 로컬 스토리지 내의 모든 데이터를 삭제
// : 로컬 스토리지를 완전히 초기화할 때 유용
//   , 특정 애플리케이션에서 사용자의 설정을 리셋하거나 개인 정보 보호를 위해 데이터를 클리어할 때 사용

// EX) 사용자가 로그아웃할 때 로컬 스토리지의 모든 데이터를 삭제
//     : 개인 정보 보호가 강화

localStorage.clear();