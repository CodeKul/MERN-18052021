let todoInput = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todo-tasks");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  let todoItem = document.createElement("li");
  let todoText = document.createElement("label");
  let delBtn = document.createElement("button");

  delBtn.innerText = "Delete";
  todoText.innerText = todoInput.value;
  delBtn.addEventListener("click", deleteTodo);

  //appending label,button to LI
  todoItem.append(todoText);
  todoItem.append(delBtn);

  //appending LI to UL
  todoList.append(todoItem);
  todoInput.value = "";
}

function deleteTodo(e) {
  console.log(e.target);
}
