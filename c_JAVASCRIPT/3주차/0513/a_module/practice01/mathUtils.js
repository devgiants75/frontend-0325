// ES6 모듈 문법을 사용하여 함수를 내보내기
// : 사칙연산 구현

// add, subtract, multiply, divide
// 이름 붙여 내보내기
// 기본 내보내기(subtract)

export function add(x, y) {
  console.log(`덧셈: ${x + y}`);
}

export default function subtract(x, y) {
  console.log(`뺄셈: ${x - y}`);
}

export function multiply(x, y) {
  console.log(`곱셈: ${x * y}`);
}

export function divide(x, y) {
  if (y !== 0) {
    console.log(`나눗셈: ${x / y}`);
  } else {
    // 나누는 값이 0이라면 오류 발생
    throw new Error('0으로 나눌 수 없습니다.');
  }
}