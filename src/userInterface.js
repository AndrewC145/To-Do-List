const sidebar = document.querySelector(".sidebar");
const addTodoDialog = document.querySelector(".add-todo-dialog");


export function toggleSidebar() {
  const mainContainer = document.querySelector(".main-container");
  sidebar.classList.toggle("hidden");
  mainContainer.classList.toggle("full-width");
}

export function showAddTodoDialog() {
  addTodoDialog.showModal();
}

export function closeTodoDialog() {
  addTodoDialog.close();
}