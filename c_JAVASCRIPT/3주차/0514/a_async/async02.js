//! JS 비동기 프로그래밍 - 콜백 함수

//! 1. 콜백 함수
//? 다른 함수에 인자로 전달되어, 그 함수에 의해 어느 시점에 호출되는 함수

// : 외부 함수의 내부에서 호출(실행)
// : 어떤 작업이 완료된 후에 실행되어야 하는 함수
// : 비동기 작업의 결과를 다루거나, 특정 이벤트가 발생한 후 추가 작업을 수행

//! 2. 콜백 함수 예시

//? 콜백함수
function greeting(name) {
  console.log("Hello " + name);
}

//? 메인 함수
// : 사용자 입력을 처리하는 함수
function getUserInput(callback) {
  let name = prompt("please enter your name");
  callback(name);
}

getUserInput(greeting);

//! 3. 콜백 함수를 사용하는 비동기 요청 예시
// : 웹 API 요청 - 사용자의 데이터를 콜백 함수로 전달하여 호출

// fetch
// : 가서 어떤 것 또는 어떤 이를 다시 가져오는 것이다.
// == 데이터를 가져오다.

// 사용자 데이터를 비동기적으로 가져오는 함수
function fetchUserData(userId, callback) {
  // 시간에 대한 비동기 작업을 처리하는 setTimeout() 콜백함수를 사용
  // : setTimeout()은 사용자가 임의로 코드의 실행 흐름을 제어하는 비동기 코드
  setTimeout(() => {
    // 서버로부터 가지고 오는 데이터를 명시적으로 구현
    // : 콜백 함수에 전달할 사용자 데이터
    const userData = {
      // 가상의 사용자 데이터
      id: userId,
      name: "이승아",
      email: "이승아이메일",
    };
    callback(userData);
  }, 3000);
}

// 사용자 데이터 처리를 위한 콜백 함수
function handleUserData(user) {
  console.log("사용자 출력: " + user);
}

fetchUserData(1, handleUserData);
console.log("비동기적인 출력");

//! 4. 비동기 프로그래밍으로써 콜백 함수의 단점
// 콜백함수는 비동기 작업이 중첩 될수록 코드의 인자로 전달되는 코드의 중복이 늘어남

//? 콜백 지옥(callback hell)
// : 중첩된 콜백 함수들이 여러 단계에 걸쳐서 깊게 중복되는 문제점
// - 가독성 저하: 콜백 함수가 여러 겹으로 중첩되면, 코드의 흐름을 이해하기 어려워짐
// - 디버깅 어려움: 에러 발생 시, 어느 콜백에서 문제가 발생했는지 추적하기 어려움
// - 유지 관리 어려움: 중첩된 콜백 구조는 수정하기 어렵고, 오류 가능성을 높임

//* ================ //
// 이메일과 비밀번호를 입력받아 사용자를 인증하는 loginUser 함수
// : 사용자 데이터베이스에서 해당 사용자를 찾은 후
//   , 콜백 함수를 호출하여 사용자 정보를 반환하거나 오류 메시지를 반환
function loginUser(email, password, callback) {
  // 예시 데이터베이스 사용자 정보
  // : 실제 프로그램에서는 프론트엔드 단위가 아닌 DB에 저장된 데이터
  const databaseUsers = [
    {
      email: "이메일1",
      password: "비밀번호1",
      name: "이승아",
      roles: ["admin"], // 역할 추가
    },
    {
      email: "이메일2",
      password: "비밀번호2",
      name: "이도경",
      roles: ["user"], // 역할 추가
    },
  ];

  // 매개변수로 전달받는 email과 password를
  // , 데이터베이스 정보와 비교
  const user = databaseUsers.find(
    (user) => user.email === email && user.password === password
  );

  // 사용자 찾기 성공
  if (user) {
    // 비밀번호 정보를 제외한 사용자 정보를 반환
    const { password, ...userWithoutPassword } = user;
    // const password = user.password;
    // const userWithoutPassword = {
    // name = user.name;
    // email = user.email;
    // roles = user.roles;
    // }

    // 사용자의 역할을 기반으로 특정 접근 권한 확인
    // : 애러가 존재하지 않기 때문에 null 반환
    // : 사용자 객체를 반환
    callback(null, userWithoutPassword);
  } else {
    callback(new Error("유효하지 않은 이메일 또는 비밀번호 입니다."));
  }
}

// 사용자의 역할(roles)을 기반으로 사용자에게 특정 접근 권한이 있는지 확인하는 함수
// : 콜백을 통해 결과를 반환

function checkAccess(roles, callback) {
  // 접근 권한을 확인하는 로직
  // : ex) 'admin' 역할이 있으면 접근 허용

  const accessGranted = roles.includes("admin");

  if (accessGranted) {
    callback(null, true); // 접근 권한 있음
  } else {
    callback(null, false); // 접근 권한 없음
  }
}

// 함수 호출
// : 로그인이 완료되기 전에 첫 번째 익명함수를 호출
// : 첫 번째 익명함수는 로그인 시 발생하는 오류를 실행
// : 두 번째 콜백함수(checkAccess)는 해당 사용자가 해당 페이지에 접근이 가능한지에 대한 기능을 판단

// loginUser 함수 호출 후, 사용자 인증이 성공하면 그 결과를 사용하여 checkAccess 함수를 호출

//? loginUser 실행 완료 전 익명 함수 실행 시작
loginUser("이메일1", "비밀번호1", function (error, user) {
  if (error) {
    return console.error(error);
  }

  checkAccess(user.roles, function (error, access) {
    if (error) {
      return console.error(error);
    }

    if (access) {
      console.log("접근 가능한 관리자입니다.");
    } else {
      console.log("접근이 불가합니다.");
    }
  });
});

//? 콜백 지옥
// : 계단식 코드가 순차적으로 이어짐
