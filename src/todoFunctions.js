const addTodoBtn = document.querySelector(".submit-btn");
const titleBox = document.querySelector(".title-box");
const descriptionBox = document.querySelector(".description-box");
const dateBox = document.querySelector(".date-box");
const priorityBox = document.querySelector(".priority-box");
const projectSelection = document.querySelector("#project-selection");
const submitProject = document.querySelector(".submit-project")

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
  let weekDate = formatDate(new Date(Date.now() + 604800000));

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
  } else if (date === weekDate) {
    week.push(newTodo);
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

  todos.forEach((todo, index) => {
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


    todoDelete.addEventListener("click", () => {
      todoContainer.remove();
      todos.splice(index, 1);
      const inboxIndex = inbox.findIndex((inboxTodo) => inboxTodo.title === todo.title);
      if (inboxIndex !== -1) {
        inbox.splice(inboxIndex, 1);
      }
      displayTodos(todos);
    });
    todoCheckbox.addEventListener("click", () => {
      if (todoCheckbox.checked) {
        todoContainer.style.textDecoration = "line-through";
        todoContainer.style.color = "grey";
      } else {
        todoContainer.style.textDecoration = "none";
        todoContainer.style.color = "black";
      }
    })
  });
}


export function clearInputs() {
  titleBox.value = "";
  descriptionBox.value = "";
  dateBox.value = "";
  priorityBox.value = "Priority";

  document.querySelector(".add-todo-dialog").close();
}

function switchInboxes() {
  const inboxBtn = document.querySelector(".inbox-button");
  const todayBtn = document.querySelector(".today-button");
  const tomorrowBtn = document.querySelector(".tomorrow-button");
  const weekBtn = document.querySelector(".week-button");
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

  weekBtn.addEventListener("click", () => {
    inboxName.textContent = "Week";
    displayTodos(week);
  });
}

function createProject() {
  const projectTitle = document.querySelector(".project-title-box").value;

  const projectContainer = document.createElement("div");
  const projectButton = document.createElement("button");
  const projectIcon = document.createElement("div");
  const deleteProject = document.createElement("button");
  const deleteIcon = document.createElement("img");
  const projectSection = document.querySelector(".projects-section");

  projectSection.innerHTML = "";

  projectContainer.classList.add("project");
  projectButton.classList.add("project-button");
  projectIcon.classList.add("project-icons");
  deleteProject.classList.add("delete-project");

  projectButton.textContent = projectTitle;
  deleteIcon.src = "../dist/svg/trash-bin-minimalistic-svgrepo-com.svg";
  deleteProject.appendChild(deleteIcon);

  projectIcon.appendChild(deleteProject);
  projectContainer.appendChild(projectButton);
  projectContainer.appendChild(projectIcon);
  projectSection.appendChild(projectContainer);
}


export function initializeTodoFunctions() {
  displayTodos(inbox);
  switchInboxes();
  addTodoBtn.addEventListener("click", (event) => {
    event.preventDefault();
    createTodos();
    const selectedInbox = document.querySelector(".inboxName").textContent;
    if (selectedInbox === "Inbox") {
      displayTodos(inbox);
    } else if (selectedInbox === "Today") {
      displayTodos(today);
    } else if (selectedInbox === "Tomorrow") {
      displayTodos(tomorrow);
    } else if (selectedInbox === "Week") {
      displayTodos(week);
    } 
    clearInputs();
    console.log(inbox);
    console.log(today);
    console.log(tomorrow);
  });
  submitProject.addEventListener("click", (event) => {
    event.preventDefault();
    createProject();
  });

}
