// 장바구니 상품 객체
// 장바구니 시스템에서는 사용자가 선택한 상품들을 관리하기 위해 다음과 같은 속성을 포함하는 객체를 사용합니다:

// id: 상품의 고유 식별자. 주로 숫자로 표현되며, 상품을 구분하는 데 사용됩니다.
// name: 상품의 이름을 문자열로 저장합니다. 이는 상품을 사용자에게 표시하기 위한 명칭입니다.
// price: 상품의 가격을 나타내는 숫자입니다. 이 값은 상품의 단위 가격을 의미합니다.
// quantity: 사용자가 선택한 해당 상품의 수량입니다. 이는 정수로 표현되며, 장바구니 내 상품의 총 개수를 나타냅니다.

let product = {
  id: 1,
  name: "Apple",
  price: 0.99,
  quantity: 3
}


// 요구 사항:

// 상품 객체 구조: 각 상품은 id, name (상품명), price (가격), quantity (수량) 속성을 가집니다.
// 장바구니 기능:
// 추가: 상품을 장바구니에 추가합니다. 이미 존재하는 상품이면 수량을 업데이트합니다.
// 삭제: 장바구니에서 상품을 제거합니다.
// 수량 변경: 특정 상품의 수량을 변경합니다.
// 조회: 현재 장바구니의 모든 상품 목록을 조회합니다.
// 추가 도전 과제:

// 총합 계산 기능을 추가하여 장바구니 내 모든 상품의 총 가격을 계산합니다.

// 장바구니를 저장할 배열 초기화
let cart = [];

// 장바구니에 상품 추가 또는 수량 업데이트 함수
function addToCart(id, name, price, quantity) {
    const index = cart.findIndex(item => item.id === id);
    if (index > -1) {
        // 상품이 이미 존재하면, 수량을 업데이트
        cart[index].quantity += quantity;
    } else {
        // 새 상품을 장바구니에 추가
        cart.push({ id, name, price, quantity });
    }
    displayCart();
}

// 장바구니에서 상품 삭제 함수
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    displayCart();
}

// 특정 상품의 수량 변경 함수
function updateQuantity(id, quantity) {
    const index = cart.findIndex(item => item.id === id);
    if (index > -1 && quantity > 0) {
        cart[index].quantity = quantity;
    } else {
        console.log("Invalid quantity or item not found.");
    }
    displayCart();
}

// 장바구니 내 모든 상품 조회 함수
function displayCart() {
    console.log("Cart Contents:");
    cart.forEach(item => {
        console.log(`${item.name} - Price: $${item.price}, Quantity: ${item.quantity}`);
    });
    calculateTotal();
}

// 장바구니 총합 계산 함수
function calculateTotal() {
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log(`Total: $${total}`);
}

// 함수 사용 예시
addToCart(1, "Apple", 0.99, 3);
addToCart(2, "Bread", 1.50, 2);
addToCart(1, "Apple", 0.99, 2); // 수량 업데이트
removeFromCart(2); // 상품 삭제
updateQuantity(1, 5); // 수량 변경
