/*
  thumb-bar의 이미지를 클릭
  : 해당 이미지로 full-img 변경

  ! button 태그에 클릭 이벤트가 발생한 경우
  1. 다크 모드 버튼 클릭 시
    (버튼의 class 속성이 dark로 지정)
  : 버튼의 textContent가 '라이트모드'으로 변경
  : overlay의 배경 색이 'rgba(0, 0, 0, 0.5);로 지정

  2. 라이트모드 버튼 클릭 시
    (dark이 아닐 경우)
*/

//& 1) HTML 요소 선택
// querySelector('선택자');
// : CSS의 선택자를 사용하여 태그, class속성명, id속성명 등을 사용 가능

// 전체 이미지 요소와 버튼, 오버레이를 선택
const thumbBar = document.querySelector('.thumb-bar');
const displayedImage = document.querySelector('.displayed-img');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

//? 이미지 파일 이름 배열 선언
const images = [
  "cat01.jpg",
  "cat02.jpg",
  "dog01.jpg",
  "dog02.jpg",
  "dog03.jpg",
];

//? 이미지에 대한 대체 텍스트를 저장하는 객체 선언
const alts = {
  "cat01.jpg": "고양이1",
  "cat02.jpg": "고양이2",
  "dog01.jpg": "강아지1",
  "dog02.jpg": "강아지2",
  "dog03.jpg": "강아지3",
};

//& 2) 썸네일 바에 이벤트 리스너 추가
// thumbBar.addEventListener('click', function(e) {
//   // 클릭된 요소가 이미지일 경우
//   if (e.target.tagName === 'IMG') {
//     // displayedImage의 src와 alt를 업데이트
    
//     // console.log(e.target);
//     // console.log(e.currentTarget);
    
//     const imgSrc = e.target.src;
//     displayedImage.src = imgSrc;
//     displayedImage.alt = alts[imgSrc.split('/').pop()]; // 이미지 파일 이름 추출 및 대체 텍스트 설정
//   }
// });

//! ---------DOM 학습 후------------//
//? 썸네일 이미지를 동적으로 생성하고 클릭 이벤트 추가
images.forEach((image) => {
  const newImage = document.createElement('img');

  //? 생성된 요소에 속성 추가
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);

  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', () => {
    displayedImage.src = `images/${image}`;
    displayedImage.alt = alts[image];
  })
});

//* 이벤트 객체의 target VS currentTarget

// 1) target
//   : 이벤트가 발생한 가장 깊은 (즉, 가장 구체적인) 요소를 참조
//   : 이벤트가 발생한 실제 요소
//   EX) 사용자가 버튼을 클릭 - event.target은 해당 버튼 요소

// 2) currentTarget
//   : 이벤트 핸들러가 실제로 연결된 요소를 참조

//   : 부모 요소에 이벤트 리스너를 추가하고 그 요소의 자식 요소 중 하나를 클릭
//     - event.currentTarget은 부모 요소를 참조

// +) e.target의 tagName 속성
//    : 해당 요소의 태그 이름을 대문자 문자열로 반환
//    EX) DIV, SPAN, IMG, A, UL, OL, LI 등등 

//& 3) 다크/라이트 버튼의 기능 구현
// btn.addEventListener('click', function() {
//   // 클래스로 현재 상태 확인 (dark 클래스가 있는지)
//   if (btn.classList.contains('dark')) {
//     // Dark 모드에서 Light 모드로 전환
//     btn.textContent = '라이트모드';
//     overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//     btn.classList.remove('dark');
//   } else {
//     // Light 모드에서 Dark 모드로 전환
//     btn.textContent = '다크모드';
//     overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
//     btn.classList.add('dark');
//   }
// });

btn.addEventListener('click', () => {
  //? 속성 값 가져오기: getAttribute('속성명');
  const className = btn.getAttribute('class');

  if (className === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = '라이트 모드';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = '다크 모드';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
})
