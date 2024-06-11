document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("drawing-board");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth * 0.9;
  canvas.height = window.innerHeight * 0.8;

  // 그리기 상태에 대한 변수 초기화
  let drawing = false;
  let erasing = false;
  let penType = "round";
  let penSize = 5;
  let penColor = "#000000";

  // 캔버스에 이벤트 리스너 추가
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseout", stopDrawing);

  // toolbar에 따른 펜 설정 이벤트 리스너
  document.getElementById("pen-type").addEventListener("change", (e) => {
    penType = e.target.value;
  });

  document.getElementById("pen-size").addEventListener("input", (e) => {
    penSize = e.target.value;
  });

  document.getElementById("pen-color").addEventListener("input", (e) => {
    penColor = e.target.value;
  });

  // 버튼 모음에 대한 이벤트 리스너 설정
  document.getElementById("pencil").addEventListener("click", () => {
    erasing = false; // 지우기 모드 비활성화
    toggleActiveButton("pencil"); // 활성화 버튼 토글
  });

  document.getElementById("eraser").addEventListener("click", () => {
    erasing = true; // 지우기 모드 활성화
    toggleActiveButton("eraser"); // 활성화 버튼 토글
  });

  document.getElementById("clear").addEventListener("click", clearCanvas);
  document.getElementById("save").addEventListener("click", saveCanvas);
  document.getElementById("load-image").addEventListener("click", loadImage);

  // 그림 그리기를 시작하는 함수
  function startDrawing(e) {
    drawing = true;
    draw(e);
  }

  // 그림 그리기를 멈추는 함수
  function stopDrawing() {
    drawing = false;
    ctx.beginPath(); // 새로운 경로 시작
  }

  // 그림을 그리는 함수
  function draw(e) {
    if (!drawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidht = penSize;
    ctx.lineCap = penType;
    ctx.strokeStyle = erasing ? "#fff" : penColor;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  // 캔버스를 지우는 함수
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // 캔버스를 저장하는 함수
  function saveCanvas() {
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvas.toDataURL();
    link.click();
  }

  // 이미지를 불러오는 함수
  function loadImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.widht, canvas.height);
      };
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  }

  function toggleActiveButton(activeButtonId) {
    document.getElementById("pencil").classList.remove("active");
    document.getElementById("eraser").classList.remove("active");

    document.getElementById(activeButtonId).classList.add("active");
  }

  toggleActiveButton('pencil');
});
