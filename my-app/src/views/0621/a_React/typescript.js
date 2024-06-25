//! 타입스크립트를 사용한 카운터 제작
var _a, _b;
// 카운터 숫자를 생성하는 함수
// : 객체값을 생성해내는 Class의 생성자와 동일
function createCounter() {
    var state = { count: 0 };
    // 카운트 증가 함수
    function increment() {
        state.count += 1;
        displayCount();
    }
    function decrement() {
        state.count -= 1;
        displayCount();
    }
    // 변경된 카운트 값을 화면에 보여주는 함수
    function displayCount() {
        var counterValue = document.getElementById('counterValue');
        if (counterValue) {
            counterValue.textContent = "Counter: ".concat(state.count);
        }
    }
    return { increment: increment, decrement: decrement };
}
// createCounter 함수 호출
var counter = createCounter();
(_a = document.getElementById('incrementBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    counter.increment();
});
(_b = document.getElementById('decrementBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    counter.decrement();
});
