const addTodoBtn = document.querySelector(".submit-btn");
const titleBox = document.querySelector(".title-box");
const descriptionBox = document.querySelector(".description-box");
const dateBox = document.querySelector(".date-box");
const priorityBox = document.querySelector(".priority-box");
const projectSelection = document.querySelector("#project-selection");

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

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`
}

function createTodos() {
  const title = titleBox.value
  const description = descriptionBox.value
  const date = dateBox.value;
  let priority = priorityBox.value;
  const locationInbox = projectSelection.value;

  let todaysDate = formatDate(new Date());
  let tomorrowsDate = formatDate(new Date(Date.now() + 86400000));

  if (title === "" || priority === "Priority" || !date) {
    alert("Please fill out the required fields");
    return;
  }

  priority = priority.charAt(0).toUpperCase() + priority.slice(1);
  const newTodo = new Project(title, description, date, priority, locationInbox);
  inbox.push(newTodo);


  if (date === todaysDate) {
    today.push(newTodo);
  } else if (date === tomorrowsDate) {
    tomorrow.push(newTodo);
  }

  displayTodos(inbox);
}


function displayTodos(todos) {
  const todoSection = document.querySelector(".todoSection");
  todoSection.innerHTML = "";

  if (!todos || todos.length === 0) {
    todoSection.innerHTML = "<h2>No todos to display</h2>";
    todoSection.style.color = "white";
    return;
  } 

  todos.forEach(todo => {
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
    const todoDelete = document.createElement("button");
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
    todoDelete.classList.add("todo-trash");

    todoCheckbox.type = "checkbox";
    todoTitle.textContent = todo.title;
    todoPriority.textContent = todo.priority;
    todoDate.textContent = todo.date;
    todoDescription.textContent = todo.description;
    todoDeleteIcon.src = "../dist/svg/trash-bin-minimalistic-svgrepo-com.svg";

    
    todoDelete.appendChild(todoDeleteIcon);
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

export function clearInputs() {
  titleBox.value = "";
  descriptionBox.value = "";
  dateBox.value = "";
  priorityBox.value = "Priority";

  document.querySelector(".add-todo-dialog").close();
}

function deleteTodos() {
  const checkboxes = document.querySelectorAll(".check");
  const todoDeleteBtns = document.querySelectorAll(".todo-trash");
  const todoContainers = document.querySelectorAll(".todoContainer");

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        todoContainers[index].remove();
        inbox.splice(index, 1);
      }
    });
  });

  todoDeleteBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      todoContainers[index].remove();
      inbox.splice(index, 1);
    })
  })
}

export function switchInboxes() {
  const inboxBtn = document.querySelector(".inbox-button");
  const todayBtn = document.querySelector(".today-button");
  const tomorrowBtn = document.querySelector(".tomorrow-button");
  const inboxName = document.querySelector(".inboxName");

  inboxBtn.addEventListener("click", () => {
    inboxName.textContent = "Inbox";
    displayTodos(inbox);
  });

  todayBtn.addEventListener("click", () => {
    inboxName.textContent = "Today";
    displayTodos(today);
  });

  tomorrowBtn.addEventListener("click", () => {
    inboxName.textContent = "Tomorrow";
    displayTodos(tomorrow);
  });
}


export function initializeTodoFunctions() {
  displayTodos(inbox);
  switchInboxes();
  addTodoBtn.addEventListener("click", (event) => {
    event.preventDefault();
    createTodos();
    displayTodos(inbox);
    clearInputs();
    deleteTodos();
    console.log(inbox);
    console.log(today);
    console.log(tomorrow);
  });
}
