//! 반복문 연습 예제

let fruits = ['apple', 'banana', 'mango']; // 3개의 요소가 담긴 문자열 배열

//? 1. 배열의 모든 요소를 출력
// 배열의 길이만큼 반복: fruits.length
let length = fruits.length; // 3

// for문
console.log('---for문---');
for (let i = 0; i < length; i++) { // 요소의 개수만큼 반복
  // 배열 요소 가져오기
  // : 배열명[요소 인덱스 번호]
  console.log(fruits[i]);
}

// while문
console.log('---while문---');

let i = 0;

while (i < length) {
  console.log(fruits[i]);
  i++;
}

// do-while문
console.log('---do-while문---');

i = 0;
do {
  console.log(fruits[i]);
  i++;
} while (i < length);

//! 반복문 사용하기 실습
// 사용자로부터 입력 받기(do while문)

// userInput 변수에 propmt('Enter a number greater than 10')
// userInput 변수가 10을 초과하는 수가 아닌 경우 반복

//! prompt창
// prompt 함수는 항상 문자열을 반환

let userInput;
do {
  userInput = prompt('10보다 큰 수를 입력해주세요.');
} while (userInput <= 10);

//! 반복문 실습

// JS에서 사용할 HTML요소를 불러오기
const para = document.querySelector('p');
const inputNumber = document.querySelector('input');
const btn = document.querySelector('button');

// 버튼 클릭 시 발생할 이벤트 등록
btn.addEventListener('click', function() {
  para.textContent = 'Output: ';
  // 입력 필드(input)에서 값을 가져와 변수에 저장
  let num = inputNumber.value;
  // 입력 필드 초기화(비움)
  inputNumber.value = '';
  // 입력 필드 포커싱
  inputNumber.focus();

  //& 1부터 사용자가 입력한 숫자(num)까지 반복
  for (let i = 1; i <= num; i++) {
    // 현재 숫자의 제곱근을 계산(Math.sqrt()사용)
    let sqRoot = Math.sqrt(i);

    // 해당 제곱근이 정수가 아닌 경우 반복을 계속
    // 8의 제곱근 2.828
    // 9의 제곱근 3
    // >> i가 완전 제곱수가 아닐 경우 건너뛰기

    // floor(): 내림 
    if (Math.floor(sqRoot) !== sqRoot) {
      continue; // continue를 만나면 반복 조건문으로 다시 이동
    }

    // i가 완전 제곱수 인 경우에는 
    // 현재 숫자를 단락(p)의 텍스트에 추가

    // 연산의 우선순위 덧셈과 뺄셈식이 할당 보다 우선시 됨!
    para.textContent += i + ' ';
  }
})