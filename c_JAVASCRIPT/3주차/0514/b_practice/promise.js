//! fetchUserById: 주어진 ID를 가진 사용자의 정보를 비동기적으로 불러옴
// 사용자 ID를 인자로 받아 해당 사용자의 정보를 불러오는 함수
function fetchUserById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users =  {
        1: { name: '이승아', age: 30 },
        2: { name: '이도경', age: 20 },
      };

      const user = users[id];

      if (user) {
        resolve(user);
      } else {
        reject(new Error('User not found'));
      }
    }, 1000);
  });
}

//! getBirthdayMessage: 불러온 사용자 정보를 기반으로 다음 생일 축하 메시지를 생성
// 사용자의 나이를 기반으로 생일 메시지를 생성하는 함수
function getBirthdayMessage(user) {
  return new Promise((resolve) => {
    const message = `Happy ${user.age + 1}th birthday, ${user.name}님`;
    resolve(message);
  });
}

//! greetUserOnBirthday: 위의 함수들을 연결하여 최종 결과를 콘솔에 출력하거나 오류를 처리
// 사용자 ID로 사용자 정보를 조회하고 생일 메시지를 생성하는 로직
function greetUserOnBirthday(userId) {
  fetchUserById(userId)
    .then((user) => {
      return getBirthdayMessage(user);
    })
    .then((birthdayMessage) => {
      console.log(birthdayMessage);
    })
    .catch((error) => {
      console.error(error.message);
    })
}

// 함수 실행 예시: ID가 1인 사용자에 대한 인사
greetUserOnBirthday(1);
greetUserOnBirthday(2);
greetUserOnBirthday(3);