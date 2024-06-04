/*
! 외부 API를 활용한 비동기 작업 프로젝트
- jsonplaceholder의 photos 데이터를 사용
- https://jsonplaceholder.typicode.com/photos

! 요구사항 정리
- 각 페이지에 photos 데이터의 사진을 4개씩 첨부
- 사진의 이름(title)은 사진 아래 작성
- 페이지 간의 이동은 버튼(Previous, Next)으로 이동

- async/await를 사용하여 작성
*/ 

//? Photo 타입 정의
type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// 현재 페이지 번호를 추적하기 위한 변수 선언
// : 1로 초기화
let currentPage = 1;

// 한 페이지에 표시할 사진의 수
const photoPerPage = 4;

//? 지정된 페이지의 사진들을 비동기적으로 불러오는 함수 선언
async function fetchPhotos(page: number): Promise<Photo[]> {
  // fetch 함수를 사용하여 사진 데이터 가져오기 (비동기)
  // albumId가 1인 데이터만 가져오기 (50개)
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/albumId=1`);

  // 불러온 데이터를 JSON 형식으로 변환
  // : Photo 타입으로 타입 명시
  const photos = await response.json() as Photo[];

  // 현재 페이지에 해당하는 사진들만 잘라내서 반환
  // slice 메서드
  // : slice(시작, 끝)
  //   === '시작'은 포함 '끝'은 미포함 (시작 <= x < 끝)

  // (page - 1) * photoPerPage / page * photoPerPage
  // EX) 1번 페이지: 0 / 4 ( 0 ~ 3 )
  //   , 2번 페이지: 4 / 8 ( 4 ~ 7 )

  return photos.slice((page - 1) * photoPerPage, page * photoPerPage);
}

//! 사진을 페이지에 렌더링하는 함수
function renderPhotos(photos: Photo[]) {
  const container = document.getElementById('photo-container') as HTMLElement;

  container.innerHTML = '';

  photos.forEach(photo => {
    const photoElement = document.createElement('div');
    photoElement.className = 'photo-item';
    photoElement.innerHTML = `
      <img src='${photo.thumbnailUrl}' alt='${photo.title}' />
      <p>${photo.title}</p>    
    `;
    container.appendChild(photoElement);
  })
}

//! 이전 버튼 이벤트
// ! 연산자의 경우: 해당 객체가 null이나 undefined가 아님을 단언하는데 사용
document.getElementById('prev-button')!.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updatePhotos();
  }
})

//! 다음 버튼 이벤트
document.getElementById('next-button')!.addEventListener('click', () => {
  currentPage++;
  updatePhotos();
})

//!
async function updatePhotos() {
  const photos = await fetchPhotos(currentPage);
  renderPhotos(photos);
}

//! 초기 사진 로드
updatePhotos();