// ts-node c_guard.ts 

{
  //& 1. 타입 가드의 정의 및 사용법
  // : 특정 범위 내에서 변수의 타입을 보다 구체적인 타입으로 좁히기 위해 사용하는 식(expression)
  // >> 컴파일러는 해당 범위 내에서 변수가 가질 수 있는 타입을 더 명확하게 인식
  //   , 타입 관련 에러를 예방
  //   , 타입에 특화된 속성이나 메소드를 안전하게 사용 가능

  function isNumber(x: any): x is number {
    return typeof x === 'number';
  }

  function double(x: any) {
    if (isNumber(x)) {
      console.log(x * 2);
    } else {
      console.log('Not a Number');
    }
  }

  double(5); // 10
  double('5'); // Not a Number

  //& 2. is 키워드와 타입 가드 함수 작성 방법
  // : is 키워드를 사용하여 타입 가드 함수를 정의 가능
  // >> 특정 타입이 맞는지를 검사하고, 그 결과를 불리언(boolean) 값으로 반환
  
  // : is 키워드를 사용
  // >> 타입스크립트 컴파일러는 이 함수가 참(true)을 반환할 경우 해당 변수를 특정 타입으로 간주

  // Bird 인터페이스 정의
  interface Bird {
    fly: () => void;
    layEggs: () => void;
  }

  // Fish 인터페이스 정의
  interface Fish {
    swim: () => void;
    layEggs: () => void;
  }

  // 타입 가드 함수 정의: 입력된 pet이 Fish 타입인지 확인
  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }

  // Fish 타입의 객체 생성
  const pet1: Fish = {
    swim: () => console.log('물고기가 헤엄칩니다.'),
    layEggs: () => console.log('물고기가 알을 낳습니다.'),
  }

  // Bird 타입의 객체 생성
  const pet2: Bird = {
    fly: () => console.log('새가 하늘을 날고 있습니다.'),
    layEggs: () => console.log('새가 알을 낳습니다.'),
  }

  // 타입에 따라 적절한 메서드를 호출하는 함수
  function checkPet(pet: Fish | Bird) {
    if (isFish(pet)) {
      pet.swim();
    } else {
      pet.fly();
    }
  }
  
  // checkPet 함수를 사용하여 pet1과 pet2에 대해 메서드 호출
  checkPet(pet1);
  checkPet(pet2);
}
