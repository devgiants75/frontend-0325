// c_function.ts
{
  //& 타입스크립트 함수

  //! 함수의 선언과 호출
  // : 매개변수와 반환 값에 타입 지정 가능

  // - 기본 함수 선언
  function greet(name: string): string {
    return `Hello, ${name}`;
  }

  // - 화살표 함수
  // : 타입 속성으로 명시하여 첨부
  type ArrowGreetType = (name: string) => string;

  const arrowGreet: ArrowGreetType = (name) => `Hello ${name}`;
  console.log(arrowGreet('이승아')); // Hello 이승아
  // console.log(arrowGreet(1)); - Error

  //! 선택적 매개변수와 기본 매개변수
  // 선택적 매개변수
  // : 함수 호출 시 생략 가능, 매개변수를 선택적으로 허용
  // : 변수명 뒤에 ? 작성

  // 기본 매개변수
  // : 매개변수에 기본값을 할당
  // : 선택적 매개변수에 매개변수가 전달되지 않은 경우 해당 기본값을 할당
  // : 매개변수명 = '기본값'
  
  function select(name?: string, greeting: string = 'hi') {
    if (name) {
      console.log(`${greeting}, ${name}`);
    } else {
      console.log(`${greeting}, guest`);
    }
  }

  // name 생략, greeting 기본값 설정
  select(); // hi, guest

  // 인자를 1개 전달하는 경우: name의 값으로 지정
  select('hello'); // hi, hello
  select('이승아'); // hi, 이승아

  // name은 '이승아', gretting은 'hello'
  select('이승아', 'hello'); // hello, 이승아

  //? 선택적 매개변수와 기본 매개변수의 차이
  // : 두가지 모두 함수 호출 시 생략 가능
  // - 선택적 매개변수는 생략된 경우: undefined로 처리
  // - 기본 매개변수는 생략된 경우: 지정된 기본 값을 사용

  //? 주의사항
  // 1. 선택적 매개변수는 반드시 필수 매개변수 뒤에 작성
  // 2. 기본 매개변수는 필수 매개변수와 선택적 매개변수 양쪽에 작성 가능
  // 3. 기본 매개변수가 필수 매개변수 앞에 작성된 경우
  // : 기본 매개변수를 생략하려면 반드시 undefined를 전달
  select(undefined, '안녕'); // 안녕, guest

  //! Rest 매개변수
  // : 함수에 여러 개의 매개변수를 그룹화하여 배열로 전달하는 기능
  // : 함수에 가변적인 수의 인자를 안전하고 효율적으로 처리하도록 하는 기능

  // ...연산자를 매개변수 앞에 사용하여 정의
  function sum(...numbers: number[]) {
    // reduce 메서드
    // : 네 개의 매개변수를 가질 수 잇는 콜백 함수
    return numbers.reduce((a, b) => a + b); // a += b
  }

  const r1 = sum(1, 2, 3, 4, 5);
  console.log(r1); // 15
  const r2 = sum(11, 22, 33, 44, 55);
  console.log(r2); // 165
  const r3 = sum(10, 20, 30);
  console.log(r3); // 60

  // 첫 번째 인자는 name의 변수에
  // 두 번째 인자부터는 names 배열에 할당
  function greetEveryone(name: string, age: number, ...names: string[]) {
    // join 메서드
    return names.map((name) => `Hello ${name}`).join(', ');
    // : 메서드 체이닝
  }

  console.log(greetEveryone('이승아', 30, 'a', 'b', 'c', '안녕', '이도경'));
  // >> Hello a, Hello b, Hello c, Hello 안녕, Hello 이도경

  // Rest 매개변수 주의사항
  // : 항상 마지막에 위치
  // : 타입 명시를 주의

  //! 함수의 '오버로딩'
  // : 같은 이름의 함수에 대해
  //   여러 매개변수의 타입과 반환 타입을 정의하는 기능

  //? 특징
  // : 함수는 '하나 이상의 타입 시그니처'를 가질 수 있다.
  // >> function 함수명()

  // : 함수는 '단 하나의 구현'을 가질 수 있다.
  // >> {}

  // 기본 문법
  // : 함수 선언부는 여러 개가 될 수 있지만, 구현은 하나만 있어야 한다.
  // - 함수의 선언부: 중괄호 이전의 함수명, 매개변수 지정
  // - 함수의 구현부: 중괄호와 중괄호 내의 코드

  //? 함수의 오버로딩
  function add(a: number, b: number): number;
  function add(a: string, b: string): string;

  function add(a: any, b: any): any {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
      return a.concat(b);
    }

    throw new Error('Invalid arguments');
  }

  console.log(add(1, 2)); // 3
  console.log(add('이', '승아')); // 이승아

  // 함수의 오버로딩의 사용
  // : 함수에 대한 다양한 타입의 매개변수를 제공할 수 있도록 지정
  // : + 타입 안정성 유지
}
