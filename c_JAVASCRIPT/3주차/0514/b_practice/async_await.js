// JSONPlaceholder
// : 개발자들이 프론트엔드 코드를 테스트하고 프로토타이핑하는 데 사용할 수 있는 무료 REST API
// >> 가짜 데이터를 제공하여 실제 서버에 데이터를 요청하는 것처럼 연습하거나 코드를 테스트 함에 도움
// >> 게시글(posts), 댓글(comments), 사용자(users), 사진(photos) 등의 리소스를 JSON 형식으로 제공

// Async/Await를 사용하여 JSONPlaceholder에서 데이터를 가져오는 함수

//& https://jsonplaceholder.typicode.com
// 위의 url에서 사용하고자 하는 데이터를 /posts, /comments, /users 등을 붙여 사용
// : 각각의 데이터 속에서 원하고자하는 데이터를 검색할 경우 /id값(숫자)

// EX) id가 2인 posts를 가져오는 경우
// : https://jsonplaceholder.typicode.com/posts/2

async function fetchPosts(postId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    if (!response.ok) {
      throw new Error(`Http error! status: ${response.status}`);
    }

    const posts = await response.json();
    console.log(posts);

  } catch(error) {
    console.log('게시물 가져오기에 실패하였습니다.', error);
  }
}

fetchPosts(11);