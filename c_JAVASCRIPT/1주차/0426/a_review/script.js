//! 문제 1: 온도 변환 및 상태 메시지 출력
//?  사용자가 입력한 섭씨 온도를 화씨로 변환하고, 온도 범위에 따라 적절한 한글 메시지를 출력하는 프로그램을 작성

// 1. 웹 브라우저에서 사용자에게 prompt 창을 통해 섭씨 온도를 입력 받기

// 2. 입력받은 섭씨 온도를 화씨 온도로 변환
// 변환 공식: 화씨 = 섭씨 X 9 / 5 + 32

// 3. 온도 범위에 따라 상태 메시지를 결정
// >> 섭씨 0도 이하일 경우: "매우 추워요!"
// >> 섭씨 0도 초과 25도 미만일 경우: "시원하네요."
// >> 섭씨 25도 이상일 경우: "꽤 덥습니다!"

// 4. 계산된 화씨 온도와 선택된 메시지를 콘솔에 출력

//& --------코드 작성--------//
// 사용자로부터 섭씨 온도 입력받기
let celsius = Number(prompt('섭씨 온도를 입력해주세요.'));

// 섭씨를 화씨로 변환(화씨 = 섭씨 X 9 / 5 + 32)
let fahrenheit = celsius * 9 / 5 + 32;

// 온도에 따른 메시지 결정
let message;

if (celsius <= 0) {
  message = '매우 추워요!';
} else if (celsius < 25) {
  message = '시원하네요!';
} else { // 25이상의 섭씨 기온
  message = '꽤 덥습니다!';
}

// 결과 출력
console.log(`화씨 온도 ${fahrenheit} - ${message}`);

//! 문제 2. 입력 값 검증 (if문)
// 1. age 변수에 prompt 창('Please enter your age.')에서 받아오기
// 2. 해당 age 변수 값이 0미만이거나 120초과일 경우
// 3. 콘솔창에 Invalid age.를 출력

let age = Number(prompt('나이를 입력해주세요.'));

if (age < 0 || age > 120) { // 점수 계산 로직과 유사
  console.log('Invalid age');
  console.error('Invalid age');
}
console.log('정상적인 코드 흐름');

//! 문제 3. 요일에 따른 활동 추천(switch문)
// 1. 현재 요일에 따라 다른 활동을 추천

// Date()함수의 getDay() 메서드를 사용
// : 주어진 날짜의 현지 시간을 기준으로 요일을 반환
// >> 0: 일요일 ~ 6: 토요일

let day = new Date().getDay();
console.log(day); // 오늘 날짜를 기준으로 5(금요일) 출력

// 0: 일요일 "일요일! 노는게 제일 좋아!"
// 1 ~ 5: 평일 "평일! 열심히 공부하자!"
// 6: 토요일 "토요일! 주말의 시작!"
// default: "Invalid day."

switch (day) { // day: number 타입
  case 0:
    console.log('일요일');
    break;
  case 1: // case 1 ~ 5까지는 break가 없는 동일한 코드를 출력
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('평일');
    break;
  case 6:
    console.log('토요일');
    break;
  default:
    console.log('유효하지 않은 요일입니다.');
}

//! 문제4: 삼항연산자 예제(배경색 변경)

const body = document.querySelector('body');
const select = document.querySelector('select');
const div = document.querySelector('div');

document.body.style.padding = '10px';
div.style.margintTop = '100px';

function update (bgColor, textColor) {
  body.style.backgroundColor = bgColor;
  body.style.color = textColor;
}

select.onchange = function () {
  select.value === 'black' 
    ? update('black', 'white') 
    : update('white', 'black');
}