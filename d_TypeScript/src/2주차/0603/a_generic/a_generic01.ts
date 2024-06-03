// a_generic01.ts
{
  //! 제네릭(Generic)

  //? 1. 제네릭 정의
  // : 재사용 가능한 컴포넌트(코드 단위)를 만드는데 사용
  // : 컴포넌트가 처리할 데이터 타입을 미리 지정하지 않고
  //   , 해당 컴포넌트를 사용하는 시점에서 
  //     원하는 데이터 타입 지정 가능

  //? 2. 제네릭의 필요성
  // - 코드 중복을 줄임, 재사용 가능한 컴포넌트 생성
  //  : 다양한 타입을 처리하는 함수나 클래스 생성 가능

  // - 타입 안정성 보장
  //  : '컴파일' 시점에 타입을 체크
  //  : '런타임'에서 발생할 수 있는 에러를 방지

  // 컴파일(Compile)
  // : 소스코드를 작성하고 편집하는 과정

  // 런타임(Runtime)
  // : 컴파일 과정을 마친 프로그램이 사용자에 의해 실행되어 동작되어지는 때

  //? 3. 제네릭 기본 문법
  // : 사용할 컴포넌트(변수, 함수, 클래스 등)의 이름뒤에 꺽쇠괄호(<>) 안에 타입 변수를 넣는 것
  // : 함수나 클래스 등에서 사용할 타입을 명시
  // : 임의의 키워드를 사용하여 명시
  // : , 일반적으로 대문자 알파벳 하나를 사용 (T: Type)
  // - 해당 타입 변수는 컴포넌트 내에서 실제 데이터 타입의 자리를 대신

  function generic<T>(arg: T): T {
    // T(Type)는 타입 변수 (단일 타입 변수)
    // : 해당 타입 변수는 입력 인수의 타입을 T로 지정
    //   , 함수의 반환 타입을 T로 지정
    return arg;
  }

  let stringOutput = generic<string>('안녕하세요');
  // let stringOutput = generic('안녕하세요'); // (오류 나지 않는 코드)
  // let stringOutput2 = generic<string>(500); - Error

  let numberOutput = generic<number>(500);
  // let numberOutput = generic(500); // (오류 나지 않는 코드)
  // let numberOutput2 = generic<number>('반갑습니다'); - Error

  console.log(stringOutput); // 안녕하세요
  console.log(numberOutput); // 500

  //? 4. 여러 제네릭 타입 변수 지정
  // : 여러 개의 독립적인 타입을 처리해야 할 때 여러 타입 변수를 활용
  function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second]
  }

  let pairOutput = pair('안녕', 5);
  // let pairOutput2 = pair<string, number>(5, '안녕'); - Error
  console.log(pairOutput); // [ '안녕', 5 ]

  //? 5. 제네릭을 사용하는 컴포넌트들 예시
  //# 1) 제네릭 함수
  function genericFunc<T>(args: T[]): T[] { // string[], number[]
    console.log('배열의 길이: ', args.length);
    return args;
  }

  let resultFunc = genericFunc<boolean>([true, false, false]); // 배열의 길이:  3
  console.log(`함수의 반환값: ${resultFunc}`); // 함수의 반환값: true,false,false

  //# 2) 제네릭 인터페이스
  // : 타입 매개변수<T>를 가지는 인터페이스
  interface IGeneric<T> {
    (arg: T): T; // 객체의 메서드 인터페이스 명시
  }

  function identity<T>(arg: T): T {
    return arg;
  }

  let myIdentity: IGeneric<number> = identity;
  console.log(identity(5)); // 5
  console.log(identity('안녕')); // 안녕

  console.log(myIdentity(5)); // 5

  //# 3) 제네릭 클래스
  // : 타입 매개변수<T>를 가지는 클래스
  // : 다양한 타입의 속성이나 메소드를 지정 가능
  class GenericClass<T> {
    value: T;
    add: (x: T, y: T) => T;

    constructor(value: T, addFunction: (x: T, y: T) => T) {
      this.value = value;
      this.add = addFunction;
    }
  }

  let myGenericNumber = new GenericClass<number>(0, function(x, y) { return x + y });
  let myGenericString = new GenericClass<string>('', function(x, y) { return `${x}, ${y}` });

  console.log(myGenericNumber.add(5, 3)); // 8
  console.log(myGenericString.add('이', '승아')); // 이, 승아
}