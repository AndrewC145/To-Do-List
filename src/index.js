import { initializeUI } from "./userInterface";
import { initializeTodoFunctions } from "./todoFunctions";

document.addEventListener("DOMContentLoaded", () => {
  initializeUI();
  initializeTodoFunctions();
});