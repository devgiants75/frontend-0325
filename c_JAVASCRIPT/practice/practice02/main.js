//# api.js 모듈에서 fetchMovies 함수를 가져옴
import { fetchMovies } from "./api.js";

//# 문서의 DOMContentLoaded 이벤트가 발생하면 실행
document.addEventListener("DOMContentLoaded", () => {
  // 검색 입력 필드 요소를 가져옴
  // 검색 버튼 요소를 가져옴
  // 영화 목록 요소를 가져옴
  // 즐겨찾기 목록 요소를 가져옴
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const movieList = document.getElementById("movieList");
  const favoritesList = document.getElementById("favoritesList");

  // 로컬 저장소에서 즐겨찾기 목록을 가져옴 (없으면 빈 배열) - favorites
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // 검색된 영화 목록을 저장할 배열 - movies
  let movies = [];

  // 영화 목록을 렌더링하는 함수
  const renderMovies = (moviesArray) => {
    movieList.innerHTML = ""; // 기존 영화 목록 초기화
    moviesArray.forEach((movie) => {
      // 각 영화를 순회하면서 처리
      const movieItem = document.createElement("div"); // div 요소 생성
      movieItem.classList.add("movie"); // movie 클래스 추가
      movieItem.innerHTML = `
                <h3>${movie.title}</h3> <!-- 영화 제목 표시 -->
                <button data-id="${movie.id}">Add to Favorites</button> <!-- 즐겨찾기 추가 버튼 -->
            `;
      movieList.appendChild(movieItem); // 영화 항목을 영화 목록에 추가
    });
  };

  // 즐겨찾기 목록을 렌더링하는 함수
  const renderFavorites = () => {
    favoritesList.innerHTML = ""; // 기존 즐겨찾기 목록 초기화
    favorites.forEach((movie) => {
      // 각 즐겨찾기 영화를 순회하면서 처리
      const favoriteItem = document.createElement("li"); // li 요소 생성
      favoriteItem.textContent = movie.title; // 영화 제목 설정
      favoritesList.appendChild(favoriteItem); // 즐겨찾기 항목을 즐겨찾기 목록에 추가
    });
  };

  // 즐겨찾기에 영화를 추가하는 함수
  const addToFavorites = (movieId) => {
    const movie = movies.find((movie) => movie.id === movieId); // 영화 목록에서 해당 영화 찾기
    if (movie && !favorites.some((fav) => fav.id === movieId)) {
      // 영화가 존재하고 즐겨찾기에 없으면
      favorites.push(movie); // 즐겨찾기에 추가
      localStorage.setItem("favorites", JSON.stringify(favorites)); // 로컬 저장소에 저장
      renderFavorites(); // 즐겨찾기 목록 갱신
    }
  };

  // 검색 버튼 클릭 이벤트 처리
  searchButton.addEventListener("click", async () => {
    const query = searchInput.value.toLowerCase(); // 입력된 검색어 가져오기 (소문자로 변환)
    const allMovies = await fetchMovies(); // fetchMovies 함수를 사용해 모든 영화 데이터 가져오기
    movies = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    ); // 검색어와 일치하는 영화 필터링
    renderMovies(movies); // 가져온 영화 데이터 렌더링
  });

  // 영화 목록 클릭 이벤트 처리
  movieList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      // 클릭된 요소가 버튼이면
      const movieId = parseInt(e.target.dataset.id); // 버튼의 데이터 속성에서 영화 ID 가져오기
      addToFavorites(movieId); // 즐겨찾기에 추가
    }
  });

  // 초기 즐겨찾기 목록 렌더링
  renderFavorites();
});
