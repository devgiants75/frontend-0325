//! 요구사항 정리 - 사칙 연산 구현 (+, -, *, /)

// 1. 사용자로부터 두 개의 숫자를 입력받기
//  : prompt창을 통해 입력받기
//  : prompt창으로 입력받는 내용은 문자열로 인식!
//    >> 숫자로 변환하는 과정이 필요

// 2. 입력받은 두 숫자에 대해 사칙연산을 수행하고
//    , 각 결과를 저장(변수)

// 3. 각 연산의 결과를 출력
//   (alert, confirm, 웹 브라우저 화면, 콘솔창)

// - HTML 요소가 모두 로드된 이후에 해당 기능을 동작시킴!
document.addEventListener('DOMContentLoaded', function() {
  // 숫자 입력받기
  let num1 = prompt('첫 번째 숫자를 입력하세요.');
  let num2 = prompt('두 번째 숫자를 입력하세요.');

  // 문자열을 숫자로 변환
  num1 = Number(num1);
  num2 = Number(num2);

  // 사칙연산 수행
  let sum = num1 + num2;
  let difference = num1 - num2;
  let product = num1 * num2;

  // 컴퓨터 프로그래밍에서 수를 0으로 나눌 수 X
  // : 오류 발생
  let quotient = num1 / num2;

  // 결과 출력
  alert('덧셈 결과: ' + sum);

  console.log(`뺄셈 결과 ${difference}`);

  confirm('곱셈 결과: ' + product);
  
  // 웹 브라우저에 출력
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `<h2>나눗셈 결과: ${quotient}</h2>`;

});