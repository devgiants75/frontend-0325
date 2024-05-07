// 여행지 이름
const cityNames = ['파리', '런던', '뉴욕', '서울', '도쿄'];

// 각각의 여행지의 태그를 별도의 배열로 관리
const tags = [
  ['역사', '문화', '쇼핑'], // 파리
  ['역사', '극장', '문화', '쇼핑'], // 런던
  ['스카이라인', '공원', '쇼핑'], // 뉴욕
  ['역사', '문화', '음식'], // 서울
  ['기술', '문화', '쇼핑'] // 도쿄
]

// 사용자의 관심사 설정 - 쇼핑
const userInterest = '쇼핑';

// includes(): 해당 배열에 요소가 포함되어 있는 경우 true 반환, 그렇지 않으면 false 반환
// [0, 1, 2, -1, 3]
const matching = tags
  .map((tags, index) => tags.includes(userInterest) ? index : -1)
  .filter(index => index !== -1); // 유효한 인덱스만 필터링
  // [0, 1, 2, 3]

// 인덱스 번호를 사용하여 여행지 이름 추출
const destinations = matching.map(number => cityNames[number]);

// 최종적으로 추천된 여행지 출력
destinations.forEach(city => console.log(`추천 여행지 ${city}`));