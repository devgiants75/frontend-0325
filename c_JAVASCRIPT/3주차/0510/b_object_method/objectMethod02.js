//! 자바스크립트 내장 객체(Built-in Objects)

//# 3. JSON 객체
// JavaScript Object Notation (JS 객체 표기법)

//? JSON 구조
// : JSON 내부에는 JS에서 사용할 수 있는 기본 데이터 타입인 문자열, 숫자, 배열, 불리언, 그 밖의 다른 객체 또한 포함 가능
// : JS의 배열과 객체를 활용하여 어떠한 자료의 형태를 표현하는 형식

// 'key-value' 즉, '키-값'를 쌍으로 데이터를 구조화하는데 사용
// : 형태 자체는 js의 객체와 유사하지만, json은 순수한 텍스트 형식이기 때문에 키를 항상 따옴표로 묶어야 함.
// : 값에는 함수 등은 사용 불가
// : 문자열은 큰따옴표 사용을 권장

//? JSON 사용
// : 서로 다른 시스템 간에 구조화된 데이터를 전송하는데 사용

// json형태로 여러 자료형을 나타내는 방법
let data = [
  {
    name: '이승아',
    age: 27,
    job: 'developer',
    hobby: {
      first: 'exercise',
      second: 'music'
    },
    lecture: ['프론트엔드', '자바', 'DBMS']
  },
  {
    name: "이도경",
    age: 30,
    job: "employee",
    hobby: {
      first: 'baseball',
      second: 'health'
    },
    lecture: ['백엔드', '파이썬', 'Kotlin']
  }
];

//? 1) JSON.stringify()
// : 자바스크립트 객체를 JSON 문자열로 변환
// : 데이터에 바로 적용 X - JSON객체에 사용
//   >> JSON.stringify(자바스크립트 객체)

console.log('들여쓰기 되어있지 않은 JSON 문자열 데이터');
console.log(JSON.stringify(data));

// JSON.stringify()의 2번째 인자
// : 객체에서 어떤 속성만 선택해서 추출하고 싶을 때 사용
// : 거의 사용하지 X (일반적으로 null을 사용)
console.log('name과 age 속성만 포함하여 출력');
console.log(JSON.stringify(data, ['name', 'age'], 2));

// JSON.stringify()의 3번째 인자
// : 들여쓰기 N칸 설정

console.log('들여쓰기 설정된 JSON 데이터');
console.log(JSON.stringify(data, null, 2));

//? 2) JSON.parse()
// : JSON 문자열을 자바스크립트 객체로 전환
let jsonData = JSON.stringify(data);
console.log(jsonData);

console.log('===자바스크립트 객체 출력===');
console.log(JSON.parse(jsonData));

//! 4. Math 내장 객체
// : 수학과 관련된 기본적인 연산을 할 때 사용되는 객체
// 속성: PI, e
console.log(Math.PI);

// 0이상 1미만의 난수를 생성
console.log(Math.random()); 
console.log(Math.random() * 10);

// Math.ramdom()
// 0이상 10 미만의 무작위 수를 생성
console.log(Math.random()); // 0.5919407678602304 - 실수
console.log(Math.random() * 10);

// Math.floor()
// : 숫자를 가장 가까운 정수로 내림
// : 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
console.log(Math.floor(Math.random() * 10));

// 제곱근 계산: sqrt() - square root
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(144)); // 12

//! Date 객체
// : 자바스크립트에서 날짜와 시간을 관리하기 위해 사용되는 내장 객체
// : 날짜와 관련된 다양한 메소드를 제공하여 날짜 데이터를 쉽게 처리 가능

// 현재 날짜와 시간을 now 변수에 저장
let now = new Date();

// console.log를 사용하여 현재 날짜와 시간을 출력
console.log(now); // 예: 2023-05-10T12:34:56.789Z

// getDate 메소드를 사용하여 현재 '일'을 반환
console.log(now.getDate()); // 월의 일자를 반환 (1~31)

// getDay 메소드를 사용하여 현재 '요일'을 반환
// 이 값은 0부터 시작하여 일요일을 0, 월요일을 1로 표시
console.log(now.getDay()); // 요일을 반환 (0: 일요일, 1: 월요일, ..., 6: 토요일)

// --- 추가 자료 --- //
// getFullYear 메소드를 사용하여 현재 '년'을 반환
console.log(now.getFullYear()); // 예: 2023

// getMonth 메소드를 사용하여 현재 '월'을 반환
// +) getMonth는 0부터 시작하므로, 실제 월보다 1이 작음
console.log(now.getMonth() + 1); // 1부터 12까지의 월을 반환

// getHours, getMinutes, getSeconds 메소드를 사용하여 시, 분, 초를 반환
console.log(now.getHours()); // 현재 시간 (0~23)
console.log(now.getMinutes()); // 현재 분 (0~59)
console.log(now.getSeconds()); // 현재 초 (0~59)

// getTime 메소드는 1970년 1월 1일 00:00:00 UTC 이후 경과한 밀리초를 반환
console.log(now.getTime()); // 타임스탬프

// toLocaleDateString 메소드를 사용하여 현지화된 날짜 표현을 가져옴
console.log(now.toLocaleDateString()); // 예: '2023-05-10'

// toLocaleTimeString 메소드를 사용하여 현지화된 시간 표현을 가져옴
console.log(now.toLocaleTimeString()); // 예: '12:34:56'