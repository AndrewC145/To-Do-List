import { clearInputs } from "./todoFunctions";

const sidebar = document.querySelector(".sidebar");
const addTodoDialog = document.querySelector(".add-todo-dialog");
const projectDialog = document.querySelector(".add-project-dialog");
const projectTitle = document.querySelector(".project-title-box");


function toggleSidebar() {
  const mainContainer = document.querySelector(".main-container");
  sidebar.classList.toggle("hidden");
  mainContainer.classList.toggle("full-width");
} 

function showAddTodoDialog() {
  addTodoDialog.showModal();
}

function closeTodoDialog() {
  addTodoDialog.close();
  clearInputs();
}

function showProjectDialog() {
  projectDialog.showModal();
  projectTitle.value = "";
}

function closeProjectDialog() {
  projectDialog.close();
}

export function initializeUI() {
  const toggleSidebarBtns = document.querySelectorAll(".toggle-sidebar");
  const addTodoBtn = document.querySelector(".add-todo");
  const cancelTodoBtn = document.querySelector(".cancel-todo");
  const addTodoDialog = document.querySelector(".add-todo-dialog");
  const addProjectDialog = document.querySelector(".add-project");
  const cancelProjectBtn = document.querySelector(".cancel-project");
  const submitProjectBtn = document.querySelector(".submit-project");

  toggleSidebarBtns.forEach((btn) => {
    btn.addEventListener("click", toggleSidebar);
  });

  addTodoBtn.addEventListener("click", showAddTodoDialog);
  cancelTodoBtn.addEventListener("click", closeTodoDialog);

  document.addEventListener("click", (event) => {
    if (event.target === addTodoDialog) {
      closeTodoDialog();
    }
    if (event.target === projectDialog) {
      closeProjectDialog();
    }
  });

  addProjectDialog.addEventListener("click", showProjectDialog);
  cancelProjectBtn.addEventListener("click", closeProjectDialog);
  submitProjectBtn.addEventListener("click", closeProjectDialog);
}