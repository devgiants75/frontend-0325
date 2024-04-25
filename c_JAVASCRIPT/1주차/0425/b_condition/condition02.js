//? switch문
// : 하나의 표현식의 값을 확인하고 해당 값과 일치하는 case 문의 코드 블록을 실행
// : 여러 가지 경우 중 하나를 선택하는데 사용

// switch문은 여러 가지 가능한 케이스 중 하나를 선택하여
// 해당하는 코드 블록을 실행하는 제어 구조

//* switch문의 기본 형태(구조)
/*
switch (식) {
  case 값1:
    식이 값1과 일치할 때 실행되는 코드
  case 값2:
    식이 값2과 일치할 때 실행되는 코드
  case 값3:
    식이 값3과 일치할 때 실행되는 코드
  ...
  default:
    식이 어떤 값과도 일치하지 않을 때 실행되는 코드
}
*/

let fruit = 'apple'; // 문자열

// case 값의 경우 조건식의 데이터와 같은 데이터 타입을 가져야 함
switch (fruit) {
  // : 조건값과 일치한 case가 존재하면 그 이후의 코드를 모두 실행
  case 'apple':
    console.log('사과입니다.');
    break;
  case 'banana':
    console.log('바나나입니다.');
    break;
  case 'orange':
    console.log('오렌지입니다.');
    break;
    // break(필수 사항 X)
    // : 이전의 선택이 표현식의 값과 일치한다면
    //   , 브라우저는 해당 코드 블럭에서 실행을 멈추고, switch문 아래에 있는 코드로 이동
    // >> break를 만나면 switch문을 탈출!
  default:
    console.log('일치하는 과일이 없습니다.');
    // default(필수 사항 X)
    // : 어떤 case와도 일치하지 않는다면 실행하는 코드 블럭
}


//* 날씨 예보 예제 작성하기

const select = document.querySelector('select');
const para = document.querySelector('p');

select.onchange = setWeather;

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = '맑은 하루입니다.';
      console.log('맑은 하루');
      break;
    case 'rainy':
      para.textContent = '비가 내립니다.';
      console.log('비가 내림');
      break;
    case 'snowing':
      para.textContent = '눈이 내립니다.';
      console.log('눈이 내림');
      break;
    case 'overcast':
      para.textContent = '흐린 하루입니다.';
      console.log('흐린 하루');
      break;

    default:
      para.textContent = '날씨를 선택해주세요.';
  }
}

//! 삼항(조건) 연산자
// : 조건에 따라 값을 반환하는 세 개의 피연산자를 가지는 식(항이 3개 - 연산자 2개)

// 피연산자를 가지는 유일한 연산자
// : if-else문을 더 간결하게 표현

//* 삼항 연산자의 기본 형태(구조)
// 조건 ? 표현식1 : 표현식2
// : 주어진 조건을 평가한 후, 그 결과가 true면 표현식1을
// : , false면 표현식2를 실행

/*
if (조건) {
  표현식1
} else {
  표현식2
}
*/

let num = 11;
let message = num > 10 ? '10보다 큰 수' : '10보다 작거나 같은 수';

// if (num > 10) {
//   message = '10보다 큰 수';
// } else {
//   message = '10보다 작거나 같은 수'
// }

console.log(message);

// 중첩 else if문과 삼항 연산자
// : JS의 if조건문은 해당 조건들 내에서 또 다른 조건식을 작성할 수 있다.
/*
if (조건1) {
  조건1이 참일 때 실행될 코드

  if (조건 2) {
    조건 1과 조건 2가 모두 참일 때 실행될 코드
  } else {
    조건 1은 참이지만, 조건 2는 거짓일 때 실행될 코드
  }

} else {
  조건1이 거짓일 때 실행될 코드
}
*/

// 50점 이상일 경우에는 시험 합격
// >> 90점 이상 A
// >> 80점 이상 B
// >> 70점 이상 C
// 그외의 경우 D (69점 ~ 50점)

// 50점 미만일 경우 불합격
// 재시험을 치뤄야 함.
let score = 100;

if (score >= 50 && score <= 100) {
  console.log('시험 합격');

  if (score >= 90) { // 90 ~ 100
    console.log('A');
  } else if (score >= 80) { // 80 ~ 89
    console.log('B');
  } else if (score >= 70) { // 70 ~ 79
    console.log('C');
  } else { // 50 ~ 69
    console.log('D');
  }

} else {
  console.log('불합격');
}

// 위 중첩 if문을 삼항 연산자로 변환
score = 71;

// 100점 초과 0점 미만의 점수는 존재하지 X
// : OR 연산자(||)를 사용 - 두 조건을 동시에 부합하는 값이 존재하지 X

let grade = 
  score > 100 || score < 0 ? '존재하지 않는 점수' : 
  // 0점 이상 100점 이하인 수
  score >= 90 ? 'A' :
  score >= 80 ? 'B' :
  score >= 70 ? 'C' :
  score >= 60 ? 'D' : '불합격';

console.log(grade);

//! ------------------------- //
// 출력값 확인
true ? alert('출력A') : alert('출력B'); // - 출력A
true ? alert('출력B') : alert('출력A'); // - 출력B

true || console.log('출력A'); // - 출력되지 않음

//& A || B
// >> A가 참이면 A의 값을 바로 반환(true값 반환)
//    : B가 평가되지 않음(실행 X)

// >> A가 거짓이면 B의 값을 반환
let returnData = false || 'B의 값';
console.log(returnData); // B의 값

true && console.log('출력A'); // - 출력A

//& A && B
// >> A가 참이면 B의 값을 평가하여 반환

// >> A가 거짓이면 A의 값을 바로 반환(false값을 반환)
//    : B가 평가되지 않음(실행 X)
returnData = true && 'b의 값';
console.log(returnData); // b의 값

// OR 연산자
false || false == false;
false || true == true;
true || false == true;
true || true == true;

// AND 연산자
false && false == false;
false && true == false;
true && false == false;
true && true == true;

// and 연산자는 조건식이 둘 이상일 경우
// , 하나만 false여도 최종 결괏값이 false

// >> 첫 번째 조건식이 false면, 두 번째 조건식은 체크하지 않고 바로 false
// and 연산자 사용 시 false가 될 확률이 높은 조건을 첫 번째 조건식으로 사용하는 것을 권장

// or 연산자는 조건식이 둘 이상일 경우
// , 하나만 true여도 최종 결괏값이 true

// >> true가 될 확률이 높은 조건식을 
// 첫 번째 조건식으로 사용하는 것을 권장