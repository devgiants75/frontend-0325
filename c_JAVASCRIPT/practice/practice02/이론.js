//! 비동기 함수

// 1. 콜백 함수
function fetchData(callback) {
  setTimeout(() => {
    callback('Data load');
  }, 1000);
}

fetchData(data => {
  console.log(data);
}); // Data load

// 2. 프로미스
function pFetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data load');
    })
  })
}

pFetchData().then(data => {
  console.log(data); // data는 resolve 성공의 데이터 - Data load
}).catch(error => {
  console.error(error);
});

// 3. async/await
async function aFetchData() {
  try {
    // fetch('url')함수
    // : Promise 객체로 반환
    // const response = await fetch('url');
    // const data = await response.json();

    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data load');
      }, 1000);
    });

    console.log(data);
  } catch(error) {
    console.error(error);
  }
}

aFetchData();