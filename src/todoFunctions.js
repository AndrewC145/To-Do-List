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

  console.log("Date:", date);
  console.log("Today's Date:", todaysDate);
  console.log("Tomorrow's Date:", tomorrowsDate);

  if (title === "" || priority === "Priority") {
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
    todoEditIcon.src = "../dist/svg/edit-3-svgrepo-com.svg";
    todoDeleteIcon.src = "../dist/svg/trash-bin-minimalistic-svgrepo-com.svg";

    
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


export function initializeTodoFunctions() {
  addTodoBtn.addEventListener("click", (event) => {
    event.preventDefault();
    createTodos();
    displayTodos();
    clearInputs();
    deleteTodos();
    console.log(inbox);
    console.log(today);
    console.log(tomorrow);
  });
}
