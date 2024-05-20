//# HTML 문서가 완전히 로드되고 파싱된 후 실행될 코드(이벤트)를 정의
// : 해당 함수는 비동기적으로 동작

document.addEventListener("DOMContentLoaded", async () => {
  //! 사용할 특정 사용자 ID를 정의
  // : 임의의 ID로 1값을 할당
  const userId = 1;

  //! 포스트를 표시할 HTML 요소를 선택
  const postsContainer = document.getElementById("posts");
  //! 검색 입력 필드를 선택
  const searchInput = document.getElementById("search");
  //! 에러 메시지를 표시할 HTML 요소를 선택
  const errorDiv = document.getElementById("error");

  //! 모든 포스트를 저장할 배열을 초기화
  let allPosts = [];

  //& 초기 포스트 로드를 시도
  // : 로드를 위해 외부 API와의 접촉 시 오류 방지를 위한 try-catch블럭 사용
  try {
    //! 비동기 함수를 사용하여 사용자의 포스트를 가져오기
    allPosts = await fetchPosts(userId);
    //! 가져온 포스트를 화면에 표시
    displayPosts(allPosts);
  } catch (error) {
    //! 오류 발생 시 오류 메시지를 표시
    showError("데이터를 불러오는 중 오류가 발생했습니다.");
  }

  //& 검색 입력 필드에 입력이 있을 때마다 실행되는 이벤트 리스너를 추가합니다.
  searchInput.addEventListener("input", () => {
    // 입력된 검색어를 공백 제거 후 소문자로 변환
    const searchTerm = searchInput.value.trim().toLowerCase();
    // 검색 입력 필드에 입력이 있는 경우
    if (!searchTerm) {
      // 검색어가 없으면 모든 포스트를 다시 표시
      displayPosts(allPosts);
      // 에러 메시지를 지우기
      clearError();
      return;
    }

    // 검색어에 맞는 포스트를 필터링
    const filteredPosts = filterPosts(allPosts, searchTerm);
    if (filteredPosts.length === 0) {
      // 필터링된 포스트가 없으면 에러 메시지를 표시
      showError("일치하는 포스트가 없습니다.");
    } else {
      // 필터링된 포스트를 화면에 표시
      displayPosts(filteredPosts);
      // 에러 메시지를 지우기
      clearError();
    }
  });

  // 포스트를 화면에 표시하는 함수를 정의
  function displayPosts(posts) {
    // 포스트 컨테이너를 초기화
    postsContainer.innerHTML = "";
    posts.forEach((post) => {
      // 각 포스트를 담을 div 요소를 생성
      const postDiv = document.createElement("div");
      // 생성된 div에 클래스를 추가
      postDiv.classList.add("post");
      // 각 포스트의 제목과 내용을 설정
      postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
      // 생성된 div를 포스트 컨테이너에 추가
      postsContainer.appendChild(postDiv);
    });
  }

  // 포스트를 필터링하는 함수를 정의
  function filterPosts(posts, searchTerm) {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) || // 제목에 검색어가 포함되어 있는지 확인
        post.body.toLowerCase().includes(searchTerm) // 내용에 검색어가 포함되어 있는지 확인
    );
  }

  // 사용자의 포스트를 비동기적으로 가져오는 함수를 정의
  async function fetchPosts(userId) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    ); // HTTP GET 요청을 보내기
    if (!response.ok) {
      // 응답이 정상이 아닐 경우 오류를 발생시킴
      throw new Error("네트워크 응답에 문제가 있습니다.");
    }
    return response.json(); // 응답을 JSON 형태로 파싱
  }

  // 에러 메시지를 표시하는 함수를 정의
  function showError(message) {
    errorDiv.textContent = message; // 에러 메시지를 설정
  }

  // 에러 메시지를 지우는 함수를 정의
  function clearError() {
    errorDiv.textContent = ""; // 에러 메시지를 지우기
  }
});
