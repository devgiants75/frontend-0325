//# api.js 모듈에서 fetchMovies 함수를 가져옴

//# 문서의 DOMContentLoaded 이벤트가 발생하면 실행
document.addEventListener('DOMContentLoaded', () => { 
    // 검색 입력 필드 요소를 가져옴
    // 검색 버튼 요소를 가져옴
    // 영화 목록 요소를 가져옴
    // 즐겨찾기 목록 요소를 가져옴

    // 로컬 저장소에서 즐겨찾기 목록을 가져옴 (없으면 빈 배열) - favorites
    
    // 검색된 영화 목록을 저장할 배열 - movies

    // 영화 목록을 렌더링하는 함수
    const renderMovies = (moviesArray) => { 
        // 기존 영화 목록 초기화
        
        // 각 영화를 순회하면서 처리
            // div 요소 생성 - movieItem

            // movie 클래스 추가

            // 내부 요소로 영화 제목과 즐겨찾기 버튼 추가
            // <h3>${movie.title}</h3>
            // <button data-id="${movie.id}">Add to Favorites</button>

            // 영화 항목을 영화 목록에 추가
    };

    // 즐겨찾기 목록을 렌더링하는 함수
    const renderFavorites = () => { 
        // 기존 즐겨찾기 목록 초기화
        
        // 각 즐겨찾기 영화를 순회하면서 처리
            // li 요소 생성 - favoriteItem
            // 영화 제목 설정
            // 즐겨찾기 항목을 즐겨찾기 목록에 추가

    };

    // 즐겨찾기에 영화를 추가하는 함수
    const addToFavorites = (movieId) => { 
        // 영화 목록에서 해당 영화 찾기: find 메서드 - movie

        // 영화가 존재하고 즐겨찾기에 없으면: if 조건문
            // 즐겨찾기에 추가
            // 로컬 저장소에 저장
            // 즐겨찾기 목록 갱신

    };

    // 검색 버튼 클릭 이벤트 처리
    searchButton.addEventListener('click', async () => { 
        // 입력된 검색어 가져오기 (소문자로 변환) - query
        
        // fetchMovies 함수를 사용해 모든 영화 데이터 가져오기 - allMovies
        
        // 검색어와 일치하는 영화 필터링 - movies
        
        // 가져온 영화 데이터 렌더링
        
    });

    // 영화 목록 클릭 이벤트 처리
    movieList.addEventListener('click', (e) => { 
         // 클릭된 요소가 버튼이면
            // 버튼의 데이터 속성에서 영화 ID 가져오기 - movieId
            // 즐겨찾기에 추가
    });

    // 초기 즐겨찾기 목록 렌더링
});
