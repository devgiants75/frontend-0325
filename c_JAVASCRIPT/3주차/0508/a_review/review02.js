// 장바구니 상품 객체
// 장바구니 시스템에서는 사용자가 선택한 상품들을 관리하기 위해 다음과 같은 속성을 포함하는 객체를 사용

// id: 상품의 고유 식별자. 주로 숫자로 표현되며, 상품을 구분하는 데 사용

// name: 상품의 이름을 문자열로 저장
// >> 이는 상품을 사용자에게 표시하기 위한 명칭

// price: 상품의 가격을 나타내는 숫자
// >> 이 값은 상품의 단위 가격을 의미

// quantity: 사용자가 선택한 해당 상품의 수량
// >> 정수로 표현되며, 장바구니 내 상품의 총 개수를 나타냄

// let product = {
//   id: 1,
//   name: "Apple",
//   price: 0.99,
//   quantity: 3,
// };

// 요구 사항

// 상품 객체 구조: 각 상품은 id, name (상품명), price (가격), quantity (수량) 속성을 가짐

//! 장바구니 기능
// 추가: 상품을 장바구니에 추가
// >> 이미 존재하는 상품이면 수량을 업데이트

// 삭제: 장바구니에서 상품을 제거

// 수량 변경: 특정 상품의 수량을 변경

// 조회: 현재 장바구니의 모든 상품 목록을 조회

//? 추가 도전 과제
// 총합 계산 기능을 추가하여 장바구니 내 모든 상품의 총 가격을 계산

//! =====코드 작성===== //

// 장바구니를 저장할 배열 초기화
let cart = [];

// 장바구니에 상품 추가 또는 수량 업데이트 함수
function addToCart(id, name, price, quantity) {
  // 배열.findIndex();
  // : 해당 배열에 일치하는 인덱스가 있을 경우 - 해당 인덱스를 반환
  // : 해당 배열에 일치하는 인덱스가 없을 경우 - -1
  const index = cart.findIndex(item => item.id === id); // 상품의 id가 일치하는 상품의 인덱스 반환

  if (index > -1) { // 상품이 이미 장바구니에 있을 경우
    cart[index].quantity += quantity; // 해당 상품의 수량을 업데이트
  } else { // 상품이 장바구니에 없을 경우
    cart.push({ id, name, price, quantity }); // 새 상품을 장바구니에 추가
  }

  displayCart(); // 장바구니 내용을 출력
}

// 장바구니에서 상품 삭제 함수
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id); // id가 일치하지 않는 상품만 남겨 장바구니를 업데이트

  displayCart();
}

// 특정 상품의 수량 변경 함수
function updateQuantity(id, quantity) {
  const index = cart.findIndex(item => item.id === id); // 상품의 id가 일치하는 상품의 인덱스를 찾음

  // 수량을 변경하는 로직
  // : 상품이 존재 + 변경할 수량이 0보다 큰 경우에만 변경 가능
  if (index > -1 && quantity > 0) {
    // 상품 수량 업데이트
    cart[index].quantity = quantity;
  } else {
    // 수량이 유효하지 않거나 상품이 존재하지 않을 경우 
    console.log('유효하지 않은 수량이거나 아이템을 찾을 수 없습니다.');
  }

  displayCart();
}

// 장바구니 내 모든 상품 조회 함수
function displayCart() {
  console.log('Cart Contents: ');
  cart.forEach(item => {
    // 각 상품의 이름, 가격, 수량 출력
    console.log(`${item.name} - Price: $${item.price}, Quantity: ${item.quantity}`);
  });
}


// 함수 사용 예시
addToCart(1, '사과', 0.99, 3);
addToCart(2, '빵', 1.50, 2);

addToCart(1, '사과', 0.99, 2);
addToCart(3, '과자', 2.55, 1);

removeFromCart(2);
updateQuantity(1, 4);
// updateQuantity(5, 4); - 유효하지 않은 id