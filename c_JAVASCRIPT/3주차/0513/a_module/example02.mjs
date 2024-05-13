//! 파일 생성 >> 모듈 생성

// 이름 붙여 내보내기 - export 키워드를 각각의 기능 맨 앞에 붙여 사용
export const PI = 3.14159;

export function multiply(x, y) {
  return x * y
}

// 기본 내보내기 - export default 키워드를 하나의 모듈 안에서 하나의 기능에만 맨 앞에 붙여 사용
export default function (x, y) {
  return x + y;
}

// Error
// export default function subtract(x, y) {
//   return x - y;
// }

export function myFunction01() {
  console.log('별칭으로 가져올 함수01');
}

export function myFunction02() {
  console.log('별칭으로 가져올 함수02');
}