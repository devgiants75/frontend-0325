//! 객체의 복사
// : 깊은 복사 & 얕은 복사

//? 얕은 복사
// : 객체의 최상위 속성을 복사하여 새 객체를 생성
// : , 중첩된 객체는 원본 객체를 참조

// - 속성 값이 원시 타입(문자열, 숫자, 불린 등)인 경우 그 값이 직접 복사
// - 속성 값이 참조 타입(다른 객체, 배열 등)인 경우 해당 참조(메모리 주소)만 복사

let animal1 =  {
  name: 'choco',
  owner: {
    name: '이승아',
    job: 'developer'
  }
}

let animal2 = animal1; // 동일한 객체를 참조
animal2.name = '초코';
animal2.owner.name = '이도경';

console.log(animal1.name); // 초코
console.log(animal1.owner.name); // 이도경
console.log(animal2); // { name: '초코', owner: { name: '이도경', job: 'developer' } }


//? 깊은 복사
// : 원본 객체의 값을 완전히 복제하여 새로운 객체를 생성
// : 원본 객체와 복사본이 서로 독립적
// JSON.parse(JSON.stringfy(obj)) 메서드를 사용

// JSON.stringify()
// : 입력받은 객체를 JSON 문자열로 변환

// JSON.parse()
// : JSON 문자열을 다시 JS 객체로 변환 >> 새로운 메모리 위치에 할당
let animal3 = JSON.parse(JSON.stringify(animal1));
console.log(animal1.name); // 초코
console.log(animal3.name); // 초코

animal3.name = '바나나';
console.log(animal1.name); // 초코
console.log(animal3.name); // 바나나

//! 자바스크립트 속성 존재 확인
// : 속성이 객체에 존재하는지 확인을 위해서 in 연산자 사용
let book = {
  title: '어린왕자',
  author: '생택쥐페리',
  publishYear: 1943
}

// >> 반환값은 존재의 유무에 따라 boolean 값으로 반환
console.log('title' in book); // true
console.log('publishYear' in book); // true
console.log('author' in book); // true
console.log('hello' in book); // false

//! 속성 삭제
// 속성 삭제 시 값이 자동으로 삭제
// : delete 연산자를 사용
delete book.author;
console.log('author' in book); // false

console.log(book); // { title: '어린왕자', publishYear: 1943 }