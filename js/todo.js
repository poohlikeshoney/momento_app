const toDoForm = document.querySelector('#todo-form');
const toDoList = document.querySelector('#todo-list');
const toDoInput = toDoForm.querySelector('input');

const TODOS_KEY = "toDoList";
let toDoArr = [];

function saveToDo(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArr))
}

function deleteItem(event){
  const li = event.target.parentElement; // li
  li.remove();
  toDoArr = toDoArr.filter(item => item.id !== parseInt(li.id));
  //클릭한 li.id와 다른 item은 남겨두기 & li.id type변경
  saveToDo(); // 다시 localStorage에 업데이트
}

function paintToDo(newTodoObj){
  const li = document.createElement('li');
  const toDoItem = document.createElement('span');
  toDoItem.innerText = newTodoObj.text;
  li.id = newTodoObj.id;
  li.appendChild(toDoItem);
  const btn = document.createElement('span');
  btn.className = "delete-btn";
  btn.innerText = "❌"; 
  li.appendChild(btn);
  toDoList.appendChild(li);
  btn.addEventListener('click', deleteItem);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value; // input value 변수에 복사
  toDoInput.value = "";
  const newTodoObj = {
    text : newTodo,
    id : Date.now(),
  }
  toDoArr.push(newTodoObj); // toDoArr 안에 object 저장
  paintToDo(newTodoObj);
  saveToDo();
}
toDoForm.addEventListener('submit',handleToDoSubmit);

const savedToDoList = localStorage.getItem(TODOS_KEY);
if (savedToDoList !== null){ 
  const parsedToDoList = JSON.parse(savedToDoList); //string->array
  toDoArr = parsedToDoList; // update todo
  parsedToDoList.forEach(paintToDo);
}
