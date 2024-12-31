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
  const priority = document.querySelector(".priority-box").value;
  const locationInbox = document.querySelector("#project-selection").value;

  if (title === "" || priority === "Priority") {
    alert("Please fill out the proper fields");
  } else {
    const newTodo = new Project(title, description, date, priority, locationInbox);
    inbox.push(newTodo);
  }
}


export function initializeTodoFunctions() {
  addTodoBtn.addEventListener("click", createTodos);
  console.log(inbox);
}
