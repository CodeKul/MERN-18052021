let todoInput = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todo-tasks");
let completedList = document.getElementById("completed");
let clear = document.createElement("button");
clear.innerText = "Clear ALL";
completedList.append(clear);
addBtn.addEventListener("click", addTodo);

function addTodo() {
  let todoItem = document.createElement("li");
  let todoText = document.createElement("label");
  let delBtn = document.createElement("button");
  let completedBtn = document.createElement("button");

  completedBtn.innerText = "Done";
  completedBtn.addEventListener("click", completedTodo);

  delBtn.innerText = "Delete";
  todoText.innerText = todoInput.value;
  delBtn.addEventListener("click", deleteTodo);

  //appending label,button to LI
  todoItem.append(todoText);
  todoItem.append(delBtn);
  todoItem.append(completedBtn);
  //appending LI to UL
  todoList.append(todoItem);
  todoInput.value = "";
}

function deleteTodo(e) {
  let item = e.target;
  let tobeRemoved = item.parentElement;
  tobeRemoved.remove();
}

function completedTodo(e) {
  let completedItem = e.target;
  let tobeCompleted = completedItem.parentElement;
  completedList.append(tobeCompleted);
  tobeCompleted.style.textDecoration = "line-through";
  clear.addEventListener("click", () => {
    tobeCompleted.style.display = "none";
  });
}
//Edit functionality for todoItem
//Create edit button
//add input field so that the todoText can be edited
