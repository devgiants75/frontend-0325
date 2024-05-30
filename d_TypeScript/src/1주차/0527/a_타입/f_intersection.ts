{
  //! 1. Intersection 타입이란?
  // : 여러 타입을 하나로 결합하여 모든 타입의 기능을 갖춘
  //   , 단일 타입을 생성하는 방법
  // : 여러 타입을 모두 만족하는 하나의 타입
  // : AND 연산자 (A 그리고 B)
  // : & 기호를 사용하여 구현

  //! 2. Intersection 타입 사용
  // type IntersectionType = Type1 & Type2 & Type3;

  type Employee = {
    name: string;
    startDate: Date;
  };

  type Manager = Employee & { group: string }; // 부서명
  // type Manager = {
  //   name: string;
  //   startDate: Date;
  //   group: string; // 부서명
  // }

  let managerA: Manager = {
    name: '이승아',
    startDate: new Date(),
    group: 'developer',
  };

  //! 인터섹션 타입의 특징
  // 1. 타입 결합
  // : 여러 타입의 속성을 결합하여 새로운 타입을 생성
  // : 코드의 재사용성과 복잡한 타입의 조합 가능

  // 2. 유연성과 정확성
  // : 필요한 모든 타입의 속성을 조합
  // : 유연하면서도 정확한 타입 정의 가능

  //! 인터섹션 타입 예시
  type Admin = {
    isAdmin: boolean;
  };

  // 일반 사용자
  type User = {
    id: string;
    password: string;
  };

  // 관리 사용자
  type AdminUser = User & Admin;

  function createAdminUser(user: User): AdminUser {
    // 스프레드 연산자를 사용하는 새로운 객체 생성
    return { ...user, isAdmin: true };
  }

  let newAdminUser: User = {
    id: 'qwe123',
    password: 'qwe123!',
  };

  let adminUser1 = createAdminUser(newAdminUser);
  console.log(adminUser1); // { id: 'qwe123', password: 'qwe123!', isAdmin: true }
}
