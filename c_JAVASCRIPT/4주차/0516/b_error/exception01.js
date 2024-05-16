/*
! 구문 오류와 예외

? 오류(Error, 에러): 부정확하거나 유효하지 않은 동작

? 1. 오류의 종류
: 프로그래밍 언어의 오류(2가지)
  - 프로그램 실행 전에 발생하는 "구문 오류"
  - 프로그램 실행 중에 발생하는 "런타임 오류(예외)"

? 2. 구문 오류
- 프로그램 코드를 작성할 때 발생하는 오류
- 프로그램의 문법이 언어의 정의된 규칙을 따르지 않을 때 발생

EX) 괄호를 닫지 않거나, 잘못된 키워드를 사용하는 경우 등
    : 구문 자체의 오류가 있으면 웹 브라우저가 코드를 분석 조차 하지 X >> 실행 X

? 3. 런타임 오류(예외)
- 프로그램의 실행 중에 발생하는 오류
- 예측 가능한 비정상적인 조건 또는 예외적인 사건을 의미
: 코드가 순차적으로 실행되다가 오류가 위치하는 부분 이후에는 실행이 중단

EX) 파일을 찾을 수 없거나, 잘못된 입력이 주어지는 경우, 네트워크 연결 오류 등
*/

//! 구문 오류 예제
console.log('=== 구문 오류 예제 ===');
console.log('# 프로그램이 시작되었습니다!');

//? SyntaxError 발생 - 구문 오류
// : 오류 자체에 어떤 파일의 어느 위치에서 오류가 발생했는지 명시

// console.log('괄호를 닫지 않는 실수를 했습니다.'
console.log('괄호를 닫지 않는 실수를 했습니다.');

// 터미널 실행 단축키: ctrl + shift + `(백틱)

//! 런타임 오류(예외) 예제
console.log('=== 런타임 오류(예외) 예제 ===');
console.log("@ 프로그램이 시작되었습니다!");

//? TypeError
// : 자바스크립트는 SyntaxError라고 출력되는 오류 이외의 모든 오류가 예외(런타임 에러)로 분류
// ex) TypeError, ReferenceError, RangeError 등

// console.rog('log를 rog로 잘못 입력하였습니다.');
console.log('런타임 오류 발생 이후의 코드는 실행되지 X');

//! JS 실행 중 발생하는 예외를 다루는 방법
// : 예외 처리

//? 1. 기본 예외 처리
// : 조건문을 사용해서 예외가 발생하지 않도록 지정
// : 권장하지 X
// : 로직의 복잡성이 증가

document.addEventListener('DOMContentLoaded', () => {
  // HTML에 h1요소가 존재하지 X
  // : ReferenceError 발생
  // : HTML 웹문서(document)에서 참조할 h1 요소가 존재하지 않음
  const h1 = document.querySelector('h1'); // null
  // h1.textContent = '안녕하세요';

  if (h1) {
    h1.textContent = '안녕하세요';
  } else {
    console.log('h1 태그를 추출할 수 없습니다.');
  }

  console.log('다음 문장을 실행합니다.');
});

//? 2. 고급 예외 처리
// : try catch (finally) 구문

// try: 블록 내에서 실행된 코드는 예외 발생 여부를 감시
//      예외가 발생하면 즉시 실행이 중단되고 catch 블록으로 제어가 이동

// catch: 예외가 발생했을 때 실행되는 블록
//        catch 블록에 전달되는 예외 객체를 통해 오류 정보를 얻는 것이 가능

// finally: 예외 발생 여부와 관계없이 try 또는 catch 블록 실행 후 항상 실행
//          주로 자원을 정리하는 코드(예: 파일을 닫는 등)를 포함

/*
try {
  : 예외가 발생할 가능성이 있는 코드
  : 일반 로직
} catch (exception) {
  : 예외가 발생했을 때 실행할 코드
} finally {
  : 무조건 실행할 코드
  : 필요한 경우에만 사용(선택사항)
}
*/

function riskyOperation() {
  // 50% 확률로 예외 발생
  if (Math.random() < 0.5) { // 1/2 확률로 에러를 발생
      throw new Error("Something went wrong!");
  }
  return "Operation successful";
}

try {
  // 예외가 발생될 코드 || 일반 로직의 코드를 작성
  const result = riskyOperation();
  console.log(result);

  console.log('try 블럭의 마지막 줄');
} catch(e) { // e: exception
  console.log('catch 블럭의 마지막 줄');
} finally {
  console.log('finally 블럭의 마지막 줄');
}

//? finally 구문을 사용하는 이유
function test() {
  try {
    alert('A 위치입니다.');
    throw '예외 강제 발생';
  } catch(exception) {
    alert('B 위치입니다.');
    return
  }

  alert('C 위치입니다.');
}

test();

function sample() {
  try {
    console.log('A 위치입니다.');
    throw '예외 강제 발생';
  } catch(exception) {
    console.log('B 위치입니다.');
    return
  } finally {
    console.log('C 위치입니다.');
  }
}

sample();