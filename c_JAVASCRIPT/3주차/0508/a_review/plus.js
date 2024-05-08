// 화살표 함수는 자신이 생성된 그 순간의 실행 컨텍스트의 this를 "계승"
// >>  화살표 함수의 this는 함수가 정의된 위치의 코드 블록 내에서 사용 가능한 this의 값을 가리키게 됨

// 1. 객체의 메소드 안에서 화살표 함수를 사용
// : 그 화살표 함수의 this는 메소드를 호출한 객체를 가리킬 것

// 2. 전역 컨텍스트에서 화살표 함수를 정의
// : this는 전역 객체(브라우저에서는 window, Node.js에서는 global)를 가리킴

const person = {
  name: 'John',
  innerPerson: {
    name: '이승아',
    greet: function() {
      console.log(`해당 선언적 함수는 직접적인 this를 가집니다. ${this.name}`); // person.innerPerson.name
    }
  },

  greet: function() {
    console.log(`Hello, ${this.name}`); // person.name

    // 화살표 함수는 해당 함수가 포함된 녀석의 this를 가져옴
    const innerFunc = () => {
      console.log(`This inside arrow: ${this.name}`); // person.name
    };
    innerFunc();

    // 선언적 함수
    const innerFunc2 = function() {
      console.log(`This inside arrow: ${this.name}`); // undefined
    };
    innerFunc2();
  }
};

person.greet();  
person.innerPerson.greet();
// 출력: Hello, John
// This inside arrow: John

// >> 화살표 함수는 그 자신의 this를 생성하지 않기 때문에, greet 함수의 this를 계승하여 사용