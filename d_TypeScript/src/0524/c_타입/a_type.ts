{
  //! 타입스크립트의 타입 명시 방법
  // : (타입 명시는) 필수 사항 X
  // : 프로그램의 안정성과 가독성을 높이는 중요한 역할

  //! 타입 어노테이션(Type Annotation, 타입 주석)
  // : 변수명 뒤에 콜론을 이용하여 JS 코드에 타입을 정의하는 방식

  // 타입(Type)
  //? 1. 기본타입(원시 타입: string, number, boolean 등)
  //   : 변수명 뒤에 콜론을 첨부하고 타입을 명시
  //   : typeof 연산자를 사용했을 때 나타나는 변환값과 동일한 이름으로 명시

  // - String, Number, Boolean과 같이 대문자로 시작하는 타입 또한 동일한 방법으로 명시
  //   : 위의 형태는 JS의 '특수 내장 타입'
  //   : 소문자 형태의 타입 사용을 권장

  let name: string = '이승아';
  // 권장) 변수명: 타입명
  let height: number = 169;
  let isStudent: boolean = false;

  //? 2. Array 배열
  // : 순서가 있는 요소의 모음을 나타내는 자료구조

  // - 변수명 뒤에 콜론을 사용하여 타입명을 명시
  //   , 타입명 뒤에 배열을 나타내는 []를 첨부
  // - 제네릭 타입: Array<타입명>

  let list1: string[] = ['1', '2', '3'];
  let list2: Array<number> = [1, 2, 3];

  //? 3. Tuple 튜플
  // : 고정된 수의 요소 타입 & 순서가 있는 타입
  // : 원소의 수와 각 원소의 타입이 정확히 지정된 배열의 타입을 정의
  // : 명시된 개수 만큼만 원소를 지정 가능

  // - 배열과의 차이점
  //   : 튜플의 경우 Array<> 제네릭 타입 지정 방식 X

  // 타입을 지정할 때
  // : 원소의 타입을 순서대로 작성

  let nameAndHeight: [string, number] = ['이승아', 169];
  // nameAndHeight = [169, '이승아']; - Error
  // nameAndHeight = ['이승아', 169, 1]; - Error

  nameAndHeight.push(1);
  console.log(nameAndHeight); // [ '이승아', 169, 1 ]

  //? 4. void 타입
  // : '아무런 값이 없다'
  // : 주로 함수에서 반환 값이 없거나 return이 있더라도 반환하는 값이 없을 때 사용되는 타입

  // 함수의 타입 정의
  // : 파라미터(매개변수)와 반환값(return값) 정의가 가능
  // : TS의 경우 파라미터의 타입을 명시하지 않으면 오류가 발생
  // 함수의 반환값 정의는 파라미터를 정의하는 ()소괄호 뒤에
  // , 콜론을 붙여 정의

  function voidType(parameter: number): void {

    console.log('반환값이 없는 함수');

    // return parameter;
    return; // 해당 return문이 없어도 void 형식이 가능
  }

  console.log(voidType(3)); // 반환값이 없는 함수 - undefined 지정

  //? 5. null & undefined
  // : JS와 달리 TS에서 null과 undefined의 경우 각각의 값만을 가짐
  // : null과 undefined에 자기 자신의 타입 그리고 void 타입 외의 타입에 할당하는 경우 에러 발생

  // JS
  // - null과 undefined 변수에 다른 타입의 값이 할당 가능

  // TS
  // - null 타입의 변수에는 'null' 값만!
  // - undefined 타입의 변수에는 'undefined' 값만!

  // 타입 어노테이션을 통해 null | undefined로 명시하는 경우에만!
  let ufType: undefined = undefined;
  // ufType = 3; - Error
  // ufType = true; - Error

  let nullType: null = null;
  // nullType = '널 타입'; - Error

  // - null과 undefined의 값은 모든 타입의 하위 타입이기 때문에
  //   , 모든 타입에 할당 가능
  let nullNumber: number = 1;
  // nullNumber = null; - Error
  // >> 엄격한 타입 검사 실시의 경우 
  //    , null과 undefined 각각의 타입에만 값 할당이 가능

  //? 6. any
  // : 모든 타입에 대해서 허용하는 타입
  // : 타입 검사 오류가 발생하는 것을 방지
  // : 모든 타입과 호환 가능
  // >> TS를 JS처럼 사용

  // any타입의 경우 사전에 타입 오류를 계산할 수 X
  // >> 예상치 못한 에러 발생 가능성이 높음 (사용 X)
  let anyType: any = 3;
  anyType = '문자';
  anyType = true;
  anyType = []; // 배열
  anyType = {}; // 객체

  //? 7. never
  // : 절대 발생하지 않는 값의 타입
  // : 함수가 예외를 발생시키거나 끝나지 않을 때 사용
  function error(message: string):never {
    throw new Error(message);
  }

  // error('!에러발생!'); - Error

  //? 8. bigint (es2020)
  // : 큰 정수를 다루기 위한 원시 타입
  // : Bigint 함수를 사용하여 bigint 값을 생성

  // const oneHundred:bigint = BigInt(100);
  // 오류(lib 컴파일 옵션을 'es2020' 이상으로 변경)
}
