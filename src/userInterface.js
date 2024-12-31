const sidebar = document.querySelector(".sidebar");

function toggleSidebar() {
  const mainContainer = document.querySelector(".main-container");
  sidebar.classList.toggle("hidden");
  mainContainer.classList.toggle("full-width");
}

export { toggleSidebar };