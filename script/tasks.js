window.onload = () =>{

let taskBtn = document.querySelector('.addTasks');
let taskListDiv = document.querySelector('.taskList');
let completeDiv = document.querySelector('.complete');

let taskListArr = [];

if (localStorage.getItem('task') != undefined) {
  taskListArr = JSON.parse(localStorage.getItem('task'));
  outputInfo();
}

taskBtn.onclick = function() {
  let taskInput = document.querySelector('.tasks');
  let taskInputValue = taskInput.value;
  let allTasks = {};
  allTasks.task = taskInputValue;
  allTasks.check = false;
  let i = taskListArr.length;
  taskListArr[i] = allTasks;
  taskInput.value = '';
  outputInfo();
  localStorage.setItem('task', JSON.stringify(taskListArr));
};

function outputInfo() {
  taskListDiv.innerHTML = '';
  completeDiv.innerHTML = '';

  for (let key in taskListArr) {
    let div = document.createElement('div');
    div.style.display = 'flex';
    let checkInput = document.createElement('input');
    let p = document.createElement('p');
    checkInput.setAttribute('type', 'checkbox');
    checkInput.className = 'checkTask';
    p.innerHTML = taskListArr[key].task;

    checkInput.addEventListener('change', function() {
      if (this.checked) {
        p.classList.add('strike-through-text');
        completeDiv.appendChild(div);
        taskListArr[key].check = true;
      } else {
        p.classList.remove('strike-through-text');
        taskListDiv.appendChild(div);
        taskListArr[key].check = false;
      }

      localStorage.setItem('task', JSON.stringify(taskListArr));
    });

    div.appendChild(checkInput);
    div.appendChild(p);

    if (taskListArr[key].check) {
      p.classList.add('strike-through-text');
      completeDiv.appendChild(div);
      checkInput.checked = true;
    } else {
      taskListDiv.appendChild(div);
    }
  }
}

}