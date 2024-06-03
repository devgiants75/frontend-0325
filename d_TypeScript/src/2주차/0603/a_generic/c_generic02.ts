// c_generic02.ts
{
  //! 제네릭의 제약 조건

  //? 제약 조건(Constraints)
  // : 타입 매개변수가 특정 조건을 만족해야 한다는 것을 명시하는 방법
  // : 제네릭 타입의 사용 범위를 제한, 특정 속성이나 메서드에 접근 가능

  //? 제네릭 제약조건의 예시
  interface Lengthwise {
    // length 속성을 가지는 인터페이스
    length: number;
  }

  // 제약 조건 사용을 위해 T라는 제네릭 타입이 Lengthwise 인터페이스를
  // , 확장(상속)해야 함.
  // : length 속성을 포함하는 어떠한 객체든지 인자로 전달 가능
  function constraints<T extends Lengthwise>(arg: T): T { // T는 객체 타입(length 속성을 반드시 가지는)
    console.log(arg.length);
    // arg 매개변수는 반드시 .length 속성이 포함되어 있음

    return arg;
  }

  let variable = constraints({
    length: 10,
    // length 속성을 가진 객체
    // +) 추가로 기타 속성 명시가 가능 >> 확장!
    value: 3,
    addedOption: '안녕하세요'
  });

  console.log(variable); // { length: 10, value: 3, addedOption: '안녕하세요' }

  //? 최소한의 속성을 가진 객체 찾기

  // keyof 연산자
  // : 객체 형태의 타입을 따로 속성만 뽑아 유니온 타입으로 만들어주는 연산자
  // : 모든 키의 이름을 유니온 타입으로 반환

  type Type = {
    name: string;
    age: number;
  }

  type Union = keyof Type;
  // Union = name | age;

  //?
  interface Index {
    [key: string]: number;
  }

  function findMin<T extends Index, K extends keyof T>(array: T[], key: K) {
    // array 배열 내에서 최소 값을 가진 객체를 찾기
    return array.reduce((min, item) => {
      return item[key] < min[key] ? item : min;
    }, array[0]);
  }

  // 함수 사용 예시
  const result = findMin([{ a: 20 },  { b: 15 }, { a: 30 }, { a: 10 }], 'a');
  console.log(result); // { a: 10 }

  //! 조건부 타입
  // : 타입 매개변수에 대한 조건 표현식을 기반으로 타입을 결정하는 방식
  // : if문과 유사한 역할

  type Check<T> = T extends string ? 'String' : 'Not a String';

  type Type1 = Check<string>; // String
  type Type2 = Check<number>; // Not a String

  function checkType<T>(value: T): Check<T> {
    return typeof value === 'string' ? ('String' as Check<T>) : ('Not a String' as Check<T>);
  }

  console.log(checkType<string>('안녕하세요')); // String
  console.log(checkType<number>(500)); // Not a String

  //? 타입 단언
  // : 타입스크립트에게 개발자가 특정 값의 타입임을 알고 있음을 전달
  // : 컴파일러가 타입을 정확하게 추론하지 못하는 경우
  // : 개발자가 구체적인 타입을 프로그램에게 전달

  // 각주 문법(as 키워드)
  let someValue: any = 'this is a string';
  let strLength: number = (someValue as string).length;
  console.log(strLength); // 16

  someValue = true;
  strLength = (someValue as string).length;
  console.log(strLength); // undefined
  // : someValue를 boolean 값으로 변환하는 경우
  // : 해당 값의 길이가 측정되지 않아 undefined로 출력
  // undefined: 길이 측정은 문자열일 경우에만 사용 가능

  //? 타입 제한 예시
  // : 조건부 타입 명시와 타입 단언을 사용

  type IsNumber<T> = T extends number ? number : string;

  // processValue 함수
  // : 숫자 타입인 경우에는 그 숫자의 제곱근
  // : 숫자가 아닌 경우에는 Not a number 문자열을 반환

  function processValue<T>(value: T): IsNumber<T> {
    if (typeof value === 'number') {
      return Math.sqrt(value) as IsNumber<T>;
    } else {
      return 'Not a Number' as IsNumber<T>;
    }
  }

  console.log(processValue(9)); // 3
  console.log(processValue('hello')); // Not a Number
}
