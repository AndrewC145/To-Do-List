import { toggleSidebar, showAddTodoDialog, closeTodoDialog } from "./userInterface";

const toggleSidebarBtns = document.querySelectorAll(".toggle-sidebar");
const addTodoBtn = document.querySelector(".add-todo");
const cancelTodoBtn = document.querySelector(".cancel-todo");
const addTodoDialog = document.querySelector(".add-todo-dialog");

toggleSidebarBtns.forEach((btn) => {
  btn.addEventListener("click", toggleSidebar);
});

addTodoBtn.addEventListener("click", showAddTodoDialog);
cancelTodoBtn.addEventListener("click", closeTodoDialog);

document.addEventListener("click", (event) => {
  if (event.target === addTodoDialog) {
    closeTodoDialog();
  }
});
