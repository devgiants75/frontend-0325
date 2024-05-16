/*
& Error 객체
JavaScript의 모든 예외는 Error 객체 혹은 Error 객체를 상속받은 객체를 통해 표현

- Error 객체에는 여러 속성이 있지만 주로 사용되는 속성
>> name: 예외 이름
>> message: 예외 메시지

! 예외 객체
: 예외가 발생하면 예외와 발생된 정보를 확인 할 수 있는 객체

let myError = new Error("무언가 잘못되었습니다."); - 사용자 정의 에러를 생성
throw myError;

? 예외 객체는
catch 블럭의 괄호 안에 입력됨
: 주로 exception | e라는 식별자를 사용

! 예외 강제 발생
: throw 키워드를 사용
: >> 예외를 명시적으로 발생시키는 데 사용
: >> throw 다음에는 어떠한 값이나 표현식도 작성 가능 - 표현식의 평가 결과가 예외 값으로 사용

? 단순 예외 발생
throw 'Error2';   // 문자열을 예외로 던짐
throw 42;         // 숫자를 예외로 던짐
throw true;       // 불리언 값을 예외로 던짐

? 조금 더 자세하게 예외를 발생
throw new Error("문제가 발생했습니다!");

*/


// const array = new Array(999999999999999999);
try {
  const array = new Array(999999999999999999);
} catch(exception) {
  // 예외 객체 자체를 출력
  console.log(exception);
  console.log(); // 줄 바꿈
  
  // 예외 이름
  console.log(`예외 이름: ${exception.name}`);
  console.log(`예외 메시지: ${exception.message}`);
}

// throw("문자열"); // 문자열
// throw new Error("문자열"); // throw new Error("문자열"); - 실행 중단

function divide(a, b) {
  if (b === 0) {
    throw '0으로는 나눌 수 없습니다.'; // 사용자 정의 실행 중단
  }

  return a / b;
}

// console.log(divide(10, 2));
// console.log(divide(10, 0));

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch(e) {
  console.log(e); // error 객체가 아니라, 문자열이 출력
}

//? 프로그래밍 구현 중 비즈니스 로직에 따라 개발자가 코드의 흐름을 제어하기 위해서 적절한 예외를 사용하는 것을 권장
// ex) 회원가입 시 비밀번호 설정을 문자 + 숫자로 8 ~ 10자 이내로 지정
// : 그 외로 지정하는 경우 회원가입 로직이 실행되지 않도록 예외를 발생

function text(object) {
  if (!object || object.a === undefined || object.b === undefined) {
    throw new Error('함수를 호출할 때 object 인자와 그의 a및 b 속성을 지정해야 합니다.');
  }

  console.log(object.a + object.b);
}


try {
  text({ a: 5, b: 10 });
  text({ a: '이', b: '승아' });
  text();
} catch(e) {
  console.error('에러 발생: ', e.message);
}

console.log('다음 로직');