const addTodoBtn = document.querySelector(".submit-btn");

const inbox = [];
const today = [];
const tomorrow = [];
const week = [];
const projects = [];

class Project {
  constructor(title, description, date, priority, locationInbox) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.locationInbox = locationInbox;
  }
}

function createTodos() {
  const title = document.querySelector(".title-box").value;
  const description = document.querySelector(".description-box").value;
  const date = document.querySelector(".date-box").value;
  let priority = document.querySelector(".priority-box").value;
  const locationInbox = document.querySelector("#project-selection").value;

  if (title === "" || priority === "Priority") {
    alert("Please fill out the proper fields");
  } else {
    priority = priority.charAt(0).toUpperCase() + priority.slice(1);
    const newTodo = new Project(title, description, date, priority, locationInbox);
    inbox.push(newTodo);
  }
}

function displayTodos() {
  const todoSection = document.querySelector(".todoSection");
  todoSection.innerHTML = "";

  inbox.forEach(todo => {
    const todoContainer = document.createElement("div");
    const todoItem = document.createElement("div");
    const todoHeader = document.createElement("div");
    const todoCheckbox = document.createElement("input");
    const todoTitle = document.createElement("h3");
    const todoPriority = document.createElement("span");
    const todoDate = document.createElement("h3");
    const todoBody = document.createElement("div");
    const todoDescription = document.createElement("p");
    const todoIcons = document.createElement("div");
    const todoEdit = document.createElement("button");
    const todoDelete = document.createElement("button");
    const todoEditIcon = document.createElement("img");
    const todoDeleteIcon = document.createElement("img");

    todoContainer.classList.add("todoContainer");
    todoItem.classList.add("todoList");
    todoHeader.classList.add("todoHeader");
    todoCheckbox.classList.add("check");
    todoTitle.classList.add("todoTitle");
    todoPriority.classList.add("todo-priority");

    if (todo.priority === "High") {
      todoPriority.classList.add("high");
    } else if (todo.priority === "Medium") {
      todoPriority.classList.add("medium");
    } else {
      todoPriority.classList.add("low");
    }

    todoDate.classList.add("date");
    todoBody.classList.add("todoBody");
    todoDescription.classList.add("todoDescription");
    todoIcons.classList.add("todoIcons");
    todoEdit.classList.add("todo-edit");
    todoDelete.classList.add("todo-trash");

    todoCheckbox.type = "checkbox";
    todoTitle.textContent = todo.title;
    todoPriority.textContent = todo.priority;
    todoDate.textContent = todo.date;
    todoDescription.textContent = todo.description;
    todoEditIcon.src = "../dist/svg/trash-bin-minimalistic-svgrepo-com.svg";
    todoDeleteIcon.src = "../dist/svg/edit-3-svgrepo-com.svg";
    
    
    todoEdit.appendChild(todoEditIcon);
    todoDelete.appendChild(todoDeleteIcon);
    todoIcons.appendChild(todoEdit);
    todoIcons.appendChild(todoDelete);

    todoBody.appendChild(todoDescription);
    todoBody.appendChild(todoIcons);
    
    todoHeader.appendChild(todoCheckbox);
    todoHeader.appendChild(todoTitle);
    todoHeader.appendChild(todoPriority);
    todoHeader.appendChild(todoDate);

    todoItem.appendChild(todoHeader);
    todoItem.appendChild(todoBody);
    todoContainer.appendChild(todoItem);

    todoSection.appendChild(todoContainer);
  });
}

function clearInputs() {
  document.querySelector(".title-box").value = "";
  document.querySelector(".description-box").value = "";
  document.querySelector(".date-box").value = "";
  document.querySelector(".priority-box").value = "Priority";
  document.querySelector("#project-selection").value = "Inbox";
}


export function initializeTodoFunctions() {
  addTodoBtn.addEventListener("click", () => {
    createTodos();
    displayTodos();
    clearInputs();
  });
  console.log(inbox);
}
