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
  let editBtn = document.createElement("button");

  let editInput = document.createElement("input");
  editInput.classList.add("editinput");

  completedBtn.innerText = "Done";
  completedBtn.addEventListener("click", completedTodo);

  delBtn.innerText = "Delete";
  todoText.innerText = todoInput.value;
  delBtn.addEventListener("click", deleteTodo);

  editBtn.innerText = "Edit";
  editBtn.addEventListener("click", editTodo);

  // <li>
  //   <label>abc</label>
  //   <button>Delete</button>
  //   <button>Done</button>
  // </li>
  //appending label,button to LI
  todoItem.append(todoText);
  todoItem.append(editInput);
  todoItem.append(delBtn);
  todoItem.append(completedBtn);
  todoItem.append(editBtn);
  let yes = editInput.classList.contains("editmode");
  console.log(yes);
  //appending LI to UL
  todoList.append(todoItem);
  todoInput.value = "";
}

function deleteTodo(e) {
  let item = e.target;
  console.log(item);
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

function editTodo(e) {
  let editTarget = e.target;
  let editItem = editTarget.parentElement;
  console.log(editItem);
  let editInput = editItem.querySelector(".editinput");
  console.log(editInput);
  let editLabel = editItem.querySelector("label");

  console.log(editLabel);
  editInput.classList.toggle("editmode");
  let yes = editInput.classList.contains("editmode");
  console.log(yes);
  let x = editInput.getAttribute("class");
  let y = x.split(" ");
  console.log(y);
  let z = y.includes("editmode");
  console.log(z);
  console.log(x);
  if (!yes) {
    editLabel.innerText = editInput.value;
    editLabel.style.display = "block";
  } else {
    editLabel.style.display = "none";
    editInput.value = editLabel.innerText;
  }
}
