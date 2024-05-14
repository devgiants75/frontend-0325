//! 콜백을 사용한 비동기 코드 작성

// 데이터베이스 조회 모방
// findUserById / findUserPosts 함수를 작성
// : 사용자 ID를 인자로 받아, 해당 사용자 정보와 사용자의 게시물을 비동기적으로 조회

function findUserById(userId, callback) {
  setTimeout(() => {
    console.log(`사용자 아이디를 찾습니다. ${userId}`);

    const user = {
      id: userId,
      username: '이승아'
    };

    callback(null, user);
  }, 1000);
}

function findUserPosts(userId, callback) {
  setTimeout(() => {
    console.log(`사용자 게시물을 찾습니다. ${userId}`);

    const posts = [
      { postId: 1, content: '게시물1' },
      { postId: 2, content: '게시물2' },
    ];

    callback(null, posts);
  }, 3000);
}

findUserById(1, (error, user) => {
  if (error) {
    console.error(error); // 콘솔에 찍히는 에러 (디자인만 다름)
    return;
  }

  findUserPosts(user.id, (error, posts) => {
    if (error) {
      console.error(error); // 콘솔에 찍히는 에러 (디자인만 다름)
      return;
    }

    // 게시물 조회 성공 시, 게시물 정보를 콘솔에 출력
    console.log('사용자의 게시물', posts);
  })
});

// setTimeout()을 사용하여
// : 사용자 ID를 인자로 전달받아
// : 사용자 정보와 사용자의 게시물을 비동기적으로 조회
// >> 코드의 실행 시점을 개발자가 지정