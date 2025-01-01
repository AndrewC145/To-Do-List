import { clearInputs } from "./todoFunctions";

const sidebar = document.querySelector(".sidebar");
const addTodoDialog = document.querySelector(".add-todo-dialog");
const projectDialog = document.querySelector(".add-project-dialog");
const editDialog = document.querySelector(".edit-todo-dialog");


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

function showEditDialog() {
  editDialog.showModal();
}

function closeEditDialog() {
  editDialog.closeModal();
}

function showProjectDialog() {
  projectDialog.showModal();
}

function closeProjectDialog() {
  projectDialog.close();
}

export function initializeUI() {
  const toggleSidebarBtns = document.querySelectorAll(".toggle-sidebar");
  const addTodoBtn = document.querySelector(".add-todo");
  const cancelTodoBtn = document.querySelector(".cancel-todo");
  const addTodoDialog = document.querySelector(".add-todo-dialog");
  const editTodoBtn = document.querySelector(".edit-todo");
  const cancelEditBtn = document.querySelector(".cancel-edit");
  const addProjectBtn = document.querySelector(".add-project");
  const cancelProjectBtn = document.querySelector(".cancel-project");

  toggleSidebarBtns.forEach((btn) => {
    btn.addEventListener("click", toggleSidebar);
  });

  addTodoBtn.addEventListener("click", showAddTodoDialog);
  cancelTodoBtn.addEventListener("click", closeTodoDialog);

  editTodoBtn.forEach((editBtn) => {
    editBtn.addEventListener("click", showEditDialog);
  })

  cancelEditBtn.addEventListener("click", closeEditDialog);

  document.addEventListener("click", (event) => {
    if (event.target === addTodoDialog) {
      closeTodoDialog();
    }
    if (event.target === projectDialog) {
      closeProjectDialog();
    }
    if (event.target === editDialog) {
      closeEditDialog();
    }
  });

  addProjectBtn.addEventListener("click", showProjectDialog);
  cancelProjectBtn.addEventListener("click", closeProjectDialog);

}