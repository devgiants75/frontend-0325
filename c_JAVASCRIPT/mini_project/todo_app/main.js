
//! 1. 태그 이름과 클래스 이름 리스트를 인수로 받아 HTML 요소를 생성하는 함수
function create(tag, classListArr = [], id='') {
  const newEl = document.createElement(tag);

  if (classListArr.length > 0) {
    classListArr.forEach(
      className => newEl.classList.add(className)
    );
  }

  // if (id !== '') {
  //   newEl.id = id;
  // }

  return newEl;
}

//! 부모 요소와 자식 요소 리스트를 인수로 받아
// , 모든 자식 요소를 부모 요소에 추가하는 함수
function append(parent, nodeList) {
  nodeList.forEach(
    el => parent.appendChild(el)
  );
}

//! 요소 생성
const $container = document.getElementById('container');

const main = create('section', ['main']);
const toDoList = create('ul', ['to-do-list']);

append($container, [main, toDoList]);

const form = create('form', ['task-form']);
const newInput = create('input', ['new-input']);
const submitLabel = create('label', ['submit-label']);
const submit = create('input', ['task-submit']);
const submitIcon = create('i', ['bi', 'bi-plus-square', 'submit-icon']);

submit.setAttribute('type', 'submit');
submit.setAttribute('value', '');

newInput.setAttribute('type', 'text');

append(submitLabel, [submit, submitIcon]);
append(form, [newInput, submitLabel]);

const mainMsg = create('div', ['main-msg']);
const clockContainer = create('div', ['clock-container']);

clockContainer.innerHTML = 
`
<div class="time-container">
  <div id="hr">00</div>
  <div class="divider">:</div>
  <div id="min">00</div>
  <div class="divider">:</div>
  <div id="sec">00</div>
</div>
<div class="mm-dd-day">
  <div id="mm">May</div>
  <div id="dd">22</div>
  <div id="day">Wednesday</div>
</div>
`;

mainMsg.innerHTML = `If you don't give up, you can do it.`;

const progressBar = create('div', ['progress']);
const progressDone = create('div', ['progress-done']);

append(progressBar, [progressDone]);

append(main, [clockContainer, mainMsg, form, progressBar]);

const $hour = document.getElementById('hr');
const $minute = document.getElementById('min');
const $second = document.getElementById('sec');

function renderTime() {
  let date = new Date();

  let hr = date.getHours(); // 1 ~ 23
  let min = date.getMinutes(); // 0 ~ 59
  let sec = date.getSeconds(); // 0 ~ 59

  if (hr < 10) hr = '0' + hr;
  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;

  $hour.innerHTML = hr;
  $minute.innerHTML = min;
  $second.innerHTML = sec;
}

const clock = setInterval(renderTime, 1000);

function displayDate(mm, dd, day) {
  let date = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // 월(0~11), 일(1~31), 요일(0~6)
  const todayMonth = months[date.getMonth()];
  const todayDate = date.getDate();
  const todayDay = days[date.getDay()];

  mm.innerHTML = todayMonth;
  dd.innerHTML = todayDate;
  day.innerHTML = todayDay;
}

const $curMonth = document.getElementById('mm');
const $curDate = document.getElementById('dd');
const $curDay = document.getElementById('day');

displayDate($curMonth, $curDate, $curDay);

let taskArr = [];

function taskEl(task, completed) {
  this.task = task;
  this.status = 'false';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (JSON.parse(localStorage.getItem('Tasks'))) {
    taskArr = JSON.parse(localStorage.getItem('Tasks'));
  }

  let newTask = newInput.value.trim();

  let alreadyIncluded = [];

  // taskArr = [{task: 'task1', status: false}, {}, {}, ...]
  // alreadyIncluded = [task1, task2, task3, ...]
  for (let i = 0; i < taskArr.length; i++) {
    alreadyIncluded.push(taskArr[i].task);
  }

  if (alreadyIncluded.includes(newTask)) {
    alert('This task already exists');
  } else if (newTask.length > 0) {
    let addedTaskEl = new taskEl(newTask, 'false');

    taskArr.push(addedTaskEl);

    localStorage.setItem('Tasks', JSON.stringify(taskArr));

    newInput.value = '';
    updateTaskList();
    updateProgress();
  }
});

function updateTaskList() {
  let list = JSON.parse(localStorage.getItem('Tasks'));
  
  if (list.length > 0) {
    toDoList.classList.add('active');
    toDoList.innerHTML +=
    `
    <li class="task">
      <span>${list[list.length - 1].task}</span>
      <i class='bi bi-x-square delete-btn'></i>
    </li>
    `;
  } else {
    toDoList.classList.remove('active');
  }

  updateProgress();
}

function initializeTaskList() {
  let list = JSON.parse(localStorage.getItem('Tasks'));

  if (list && list.length > 0) {
    toDoList.classList.add('active');

    for (let i = 0; i < list.length; i++) {
      if (list[i].status === 'false') {
        toDoList.innerHTML += 
        `
        <li class="task">
          <span>${list[i].task}</span>
          <i class='bi bi-x-square delete-btn'></i>
        </li>
        `;
      } else if (list[i].status === 'true') {
        toDoList.innerHTML += 
        `
        <li class="task completed">
          <span>${list[i].task}</span>
          <i class='bi bi-x-square delete-btn'></i>
        </li>
        `;
      } 
    }
  } else {
    toDoList.classList.remove('active');
  }

  updateProgress();
}

toDoList.addEventListener('click', (e) => {
  const lis = [...document.getElementsByClassName('task')];
  const dlt = [...document.getElementsByClassName('delete-btn')];

  let list = JSON.parse(localStorage.getItem('Tasks'));

  if (lis.includes(e.target)) {
    e.target.classList.toggle('completed');

    for (let i = 0; i < list.length; i++) {
      if (list[i].task === e.target.innerText && list[i].status === 'false') {
        list[i].status = 'true';
        localStorage.setItem('Tasks', JSON.stringify(list));
        break;
      } else if (list[i].task === e.target.innerText && list[i].status === 'true') {
        list[i].status = 'false';
        localStorage.setItem('Tasks', JSON.stringify(list));
        break;
      }
    }
  }

  if (dlt.includes(e.target)) {

    for (let i = 0; i < list.length; i++) {
      // /[\n\r]+|[\s]{2,}/g

      if (list[i].task.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim() === e.target.parentNode.innerText.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim()) {
        list.splice(i, 1);

        localStorage.setItem('Tasks', JSON.stringify(list));

        toDoList.innerHTML = '';

        initializeTaskList();
        break;
      }
    }
  }

  updateProgress();
})

function updateProgress() {
  let list = JSON.parse(localStorage.getItem('Tasks'));

  let count = 0;

  if (list && list.length > 0) {
    list.forEach(task => {
      if (task.status === 'true') {
        count++;
      }
    });

    let newWidth = `${(count / list.length) * 100}%`;

    progressDone.style.width = newWidth;
  } else {
    progressDone.style.width = '0%';
  }
}

initializeTaskList();
renderTime();