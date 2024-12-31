import { toggleSidebar } from "./userInterface";

const toggleSidebarBtns = document.querySelectorAll(".toggle-sidebar");

toggleSidebarBtns.forEach((btn) => {
  btn.addEventListener("click", toggleSidebar);
});