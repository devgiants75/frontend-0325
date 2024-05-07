//! 객체(Object) 개요

//? 객체의 정의
// : 관련된 데이터와 함수를 모아 놓은 집합
// : 객체 내부에서는 데이터와 함수를 프로퍼티(속성)과 메서드(기능)라고 불림

// - 자바스크립트는 '객체'지향 프로그래밍 언어
// : 실세계에 존재하고 인지하는 모든 것을 객체로 표현

//? 객체의 특징
// - 객체는 데이터 타입 중 하나, 다양한 값을 담을 수 있는 컨테이너

// : EX) 배열도 여러 타입의 자료를 담는 것이 가능한 객체의 일부
// - typeof(데이터): 해당 데이터의 형태를 반환

//! 객체의 구조

//? 객체 지향 프로그램의 객체
// : 고유한 특성과 동작을 가지는 것

//& 1. 사람

// 특성 (속성, 프로퍼티)
// - 객체의 속성은 객체가 가진 데이터
// - 객체를 구성하는 정보의 일부로, 해당 객체의 상태를 나타냄

// EX) 이름, 나이, 직업 등

// 기능 (동작, 메서드)
// - 객체가 수행할 수 있는 행동이나 기능을 정의
// - 일반적으로 함수 형태로 정의되며, 객체의 속성을 활용하거나 조작 가능

// EX) 걷다, 말하다, 먹다 등

//& 2. 책

// 특성 (속성, 프로퍼티)

// 기능 (동작, 메서드)

//& 3. 자동차

// 특성 (속성, 프로퍼티)

// 기능 (동작, 메서드)

//& 4. 스마트폰

// 특성 (속성, 프로퍼티)

// 기능 (동작, 메서드)

//? 객체의 기본 형태
let objectName = {
  // 키1: 값1,
  // 키2: 값2,
  // ...
  // : 값의 데이터 형식에는 제한 X 
    // (배열, 또 다른 객체, 함수 모두 사용 가능)
}

//? 객체의 멤버
// : 객체는 다양한 프로퍼티와 메서드로 구성

// - 각 멤버는 다른 이름값을 갖는 복수 개의 멤버로 구성
// - 멤버의 구조
// : 한 쌍의 이름과 값은 쉼표(,)로 구분
// : 이름과 값은 : (콜론)으로 분리

//! 객체 생성 방법
// 변수를 정의하고 초기화하여 시작
// : 객체는 중괄호({})를 사용하여 초기화

//& 1. 리터럴 방식
// : 가장 간단하고 일반적인 객체 생성 방식
// : 중괄호를 사용한 생성

// - 중괄호 {}를 사용하여 객체를 초기화
// - 그 안에 객체의 프로퍼티와 메서드를 정의 가능

//& 2. 생성자 함수 사용 방식
// : new 키워드와 함께 사용자 정의 생성자 함수를 사용하여 객체를 생성
// : 같은 형태의 객체를 여러 개 생성해야 할 때 유용

// : 함수 내부에서 this 키워드를 사용해 객체의 속성(프로퍼티)을 정의
