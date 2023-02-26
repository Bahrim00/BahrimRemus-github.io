// Selectors
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


// Event Listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click", deleteCheck); 

// Functions
function addTodo(event){
  //Prevent form from submitting
  event.preventDefault();
  //Todo DIV
  var todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create LI
  var newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Add todo to localstorage
  saveLocalTodos(todoInput.value);

  //Check mark button
  var completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

    //Check trash button
  var trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append to list
  todoList.appendChild(todoDiv)
  todoInput.value = "";
}


//Delete Todo
function deleteCheck(e){
  console.log(e.target)
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //animation
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function(){
      todo.remove();
    })
  }

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if(todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none"
        }
        break;
      case "uncompleted":
        if(!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

filterOption.addEventListener("click", filterTodo);


//Check Mark

if (item.classList[0] === "complete-btn") {
  const todo = item.parentElement;
  todo.classList.toggle("completed");
}

function saveLocalTodos(todo) {
  //check -- hey do i already have thing in there?
  let todos;
  if(localStorage.getItem("todos") === null) {
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}




  // if(item.classList[0] === "complete-btn") {
  //   const todo= item.parentElement;
  //   todo.classList.toggle("cpmpleted");
  // }
}














