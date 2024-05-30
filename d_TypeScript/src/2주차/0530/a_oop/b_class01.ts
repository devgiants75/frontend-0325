// b_class01.ts
{
  //! 1. 클래스(Class)
  
  //? 클래스 정의
  // '객체'를 생성하기 위한 템플릿 또는 설계도
  // : 데이터와 해당 데이터를 조작하는 코드를 함께 캡슐화
  
  //? 클래스 특징
  // 캡슐화: 데이터(속성)와 데이터를 처리하는 함수(메서드)를 하나로 묶는 것
  // 추상화: 복잡한 세부사항X, 필수적인 부분만을 강조하는 것
  // 상속: 한 클래스의 속성과 메서드를 다른 클래스가 상속받을 수 있는 것
  // 다형성: 하나의 인터페이스를 통해 다른 클래스의 객체(인스턴스)를 다룰 수 있는 것
  
  //! 2. 객체(Object)
  
  //? 객체 정의
  // '클래스'에 의해서 생성된 인스턴스(instance)
  // : 실제 프로그램에서 사용되는 데이터와 기능의 집합체
  
  //? 객체 특징
  // 상태와 행동: 객체는 속성(상태)과 메서드(행동)를 갖는 것
  // 독립성: 각 객체는 독립적인 성격을 가지며 다른 객체와 상호 작용 가능
  
  //! 클래스 사용법
  // :클래스 '정의' & 객체 '생성'
  
  //? 클래스 정의
  // : class 키워드를 사용하여 정의
  // : 클래스명은 대문자로 시작
  
  // - 클래스의 기본 구조
  class ClassName {
    // 속성(상태): (멤버) 변수, 클래스의 상태 저장
  
    // 메서드(행동): 함수, 클래스의 동작을 정의

    //% 메서드 종류
    // - 인스턴스 메서드
    // : 일반적인 메서드, 클래스의 인스턴스를 통해 호출, 해당 객체의 속성에 접근 가능

    // - 정적 메서드
    // : 클래스 자체에 속하는 메서드, 인스턴스 없이 클래스명을 사용하여 호출
  
    //? 인스턴스(instance)
    // : 클래스를 통해 생성된 객체
    // : 실제로 생성된 객체이자 '컴퓨터 메모리에 할당된 객체'
  }
  
  //! 객체 VS 클래스 VS 인스턴스

  //? 객체
  // : 서로 많은 데이터를 하나로 묶어서 표현한 것
  // : 현실 세계의 사물이나 개념을 프로그램 내에서 표현한 것
  
  // EX) 웹 페이지에서 작성할 '게시글'
  // - 게시글 번호, 작성자, 제목, 내용, 작성일자, 수정일자,,, 등
  // : 데이터(속성)
  // - 위 데이터(속성)를 처리하는 기능(게시글 생성, 수정 등등)
  // : 기능(메서드, 행동)
  
  //? 클래스
  // : 객체를 만드는 도구
  // : 클래스를 정의하면 해당 클래스에 속한 객체들이 가져야 할 속성과 메서드를 명시
  
  // 붕어빵(객체) & 붕어빵 틀(클래스)
  // : 같은 클래스로 만든 객체라도 각각의 객체는 서로 다른 값을 가짐
  
  //? 인스턴스
  // : 클래스에 의해 생성되어 '메모리에 할당'된 객체
  // : 클래스로부터 객체를 생성하는 과정을 '인스턴스화'라고 부름
  
  // 붕어빵틀 클래스로 만든 붕어빵은 객체(object)
  // 붕어빵은 붕어빵 틀로 만든 인스턴스(instance)
  // : 객체 == 인스턴스
  
  //# 클래스 '정의' / 객체 '생성' 예제

  // '책' 클래스
  class Book {
    //? 속성 
    // : 멤버 변수로 정의
    // : 클래스에 속하는 변수
  
    //? 메서드
    // : 클래스 내부에서 정의된 함수
    // : 객체의 행동을 나타냄
    // : 클래스의 인스턴스를 통해 호출
  }
  
  //! 객체 생성
  // : 클래스의 인스턴스는 new 키워드를 사용하여 생성
  // new 클래스명(); 
  // : ()는 클래스의 생성자 함수를 호출
  // : 기본적으로 클래스에는 반드시 하나 이상의 생성자가 존재
  // : 명시하지 않을 경우 매개변수가 없는 빈 생성자가 생략
  
  // - new 키워드를 사용하여 인스턴스를 생성
  // - 생성된 인스턴스를 변수에 할당하여 사용
  
  // 생성된 인스턴스로 Book 클래스에 정의된 멤버변수와 메서드에 접근
  // : . 연산자를 사용하여 접근

  
  // 클래스를 통해 인스턴스 생성 시 
  // : 생성자를 통해 클래스의 멤버 변수를 초기화
  // : 해당 멤버 변수를 초기화 하지 않은 경우 undefined로 인식
  }