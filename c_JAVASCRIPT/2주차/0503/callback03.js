// 문제 1
// : 성적 등급 계산기

const scores = [82, 95, 71, 60, 45];

// - 주어진 성적 배열을 기반으로 각 성적에 등급을 매기는 함수 작성
//   : map을 사용하여 각 점수를 등급으로 변환

const grades = scores.map(score => {
  if (score >= 90) return 'A';
  else if (score >= 80) return 'B';
  else if (score >= 70) return 'C';
  else if (score >= 60) return 'D';
  else return 'F';
});

console.log(grades);

// 문제 2
// 모든 수의 곱 계산
const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((total, current) => total * current, 1);
console.log(result); // 120