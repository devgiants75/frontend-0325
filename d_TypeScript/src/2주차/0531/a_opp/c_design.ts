{
  //& 디자인 패턴이란?

  // : 소프트웨어 디자인에서 자주 발생하는 문제들을 해결하기 위한 잘 정립된 해결책
  // >> 패턴들은 개발 과정을 보다 효율적으로 생성하게 함
  //    , 코드의 재사용성, 유지보수성, 커뮤니케이션의 효율성을 증가
  
  //! 자주 사용되는 디자인 패턴

  //? 1. 싱글톤 패턴(Singleton Pattern)

  // 목적
  // : 클래스의 인스턴스가 하나만 생성
  //   , 어디서든 그 인스턴스에 접근할 수 있도록 하는 패턴

  // 사용 예: 데이터베이스 연결, 로거 설정 등

  class Singleton {
    private static instance: Singleton;

    private constructor() {
      // 생성자는 private으로 선언하여 외부에서 인스턴스를 생성 X
    }

    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  }

  //? 2) 팩토리 패턴(Factory Pattern)

  // 목적
  // : 객체의 생성 과정을 캡슐화
  //   , 클라이언트가 구체적인 클래스에 의존하지 않도록 하는 패턴
  
  // 사용 예: 다양한 타입의 객체를 생성할 때

  interface Product {
    operate(): void;
  }

  class ConcreteProductA implements Product {
    operate() {
      console.log("Product A is operating");
    }
  }

  class ConcreteProductB implements Product {
    operate() {
      console.log("Product B is operating");
    }
  }

  class Factory {
    public static createProduct(type: "A" | "B"): Product {
      if (type === "A") {
        return new ConcreteProductA();
      } else {
        return new ConcreteProductB();
      }
    }
  }
  
}
