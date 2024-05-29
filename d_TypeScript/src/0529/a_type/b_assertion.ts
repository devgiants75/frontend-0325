// ts-node b_assertion.ts

{
  //& 1. 타입 단언의 개념
  // : 개발자가 타입스크립트 컴파일러보다 해당 값의 타입을 더 잘 알고 있음을 명시적으로 선언하는 방법
  // : 컴파일러에게 "이 변수의 타입을 내가 지정한 타입으로 간주해라"라고 지시
  // >> 타입 체크 과정에서 강제로 타입을 지정하는 것이므로 주의해서 사용

  //& 2. as 키워드를 사용하여 타입 단언하기
  // 주로 as 키워드를 사용하여 타입 단언
  // >> JSX와 함께 사용될 때 충돌을 피하기 위해 추천되는 방식

  //? 사용 예제
  let someValue: any = 'this is a string';
  someValue = false;

  //? someValue를 string으로 단언
  let length: number = (someValue as string).length;

  //& 3. 실제 프로젝트에서의 타입 단언 사용

  //! 1) DOM API 사용 시 타입 단언을 활용하여 HTMLElement 조작

  // 예제: HTMLButtonElement로 단언하기

  // 버튼 요소 가져오기
  const button = document.getElementById('myButton');

  // button이 null이 아니라고 가정하고 HTMLButtonElement로 단언
  if (button) {
    (button as HTMLButtonElement).disabled = true;
  }

  // ts 파일 컴파일
  // : tsc b_assertion.ts

  const divElement = document.getElementById('myDiv') as HTMLDivElement;

  type customElement = HTMLDivElement;
  let container: customElement = document.createElement('div');
  
  //* 주의사항
  // 타입 단언은 컴파일러를 속이는 행위일 수 있으므로, 실제 타입과 단언한 타입이 일치하지 않는 경우 런타임 오류가 발생 가능
  // >> 타입 단언을 사용할 때는 해당 요소의 실제 타입을 확실히 알고 사용 권장

  //? HTML 요소의 타입
  // 1. HTMLElement 타입

  // 각각의 HTML 요소 타입 정의
  // HTMLInputElement
  // HTMLSelectElement
  // HTMLFormElement
  // HTMLUlElement ...

  //! 2) 서버로부터 받아온 데이터에 대한 명시
  // JSON 문자열
  const jsonString = '{"name": "이승아", "age": 30}';

  interface IUser {
    name: string;
    age: number;
  }

  // JSON을 파싱하고, 결과를 User 타입으로 단언
  const userData = JSON.parse(jsonString) as IUser;

  console.log(userData.name);
  console.log(userData.age);

  //! 3) 이벤트 객체에 대한 타입 단언
  // : 이벤트 핸들러 내에서 이벤트 객체의 타입을 단언하여 추가적인 속성에 접근 가능

  document.getElementById('myButton2')!.addEventListener('click', (event) => {
    // MouseEvent
    // KeyboardEvent
    // FocusEvent
    const mouseEvent = event as MouseEvent;
    console.log(mouseEvent.clientX, mouseEvent.clientY);
  });

  //* "non-null assertion operator" (null이 아님을 단언하는 연산자)
  // : 표현식의 결과값이 null 또는 undefined가 아님을 컴파일러에게 알려주는 역할
  // >> 타입스크립트가 기본적으로 엄격한 null 검사를 수행하기 때문에
  //    , null 가능성을 명시적으로 제거해야 할 때 유용
  
}
