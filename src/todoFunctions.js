// Starting DOM Elements
const addTodoBtn = document.querySelector('.submit-btn');
const titleBox = document.querySelector('.title-box');
const descriptionBox = document.querySelector('.description-box');
const dateBox = document.querySelector('.date-box');
const priorityBox = document.querySelector('.priority-box');
const projectSelection = document.querySelector('#project-selection');
const submitProject = document.querySelector('.submit-project');

// Global Inbox Arrays
const inbox = [];
const today = [];
const tomorrow = [];
const week = [];
const projects = [];

// Class for Creating Todos
class Project {
  constructor(title, description, date, priority, locationInbox) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.locationInbox = locationInbox;
  }
}

// Class for Creating Projects in Project Section
class ProjectList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }
}

// Function to format date to yyyy-mm-dd
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Function to Create Todos for Inbox arrays
function createTodos() {
  // Get values from input fields from add todo dialog
  const title = titleBox.value;
  const description = descriptionBox.value;
  const date = dateBox.value;
  let priority = priorityBox.value;
  const locationInbox = projectSelection.value;

  // Get current date, tomorrow's date, and a week from now
  let todaysDate = formatDate(new Date());
  let tomorrowsDate = formatDate(new Date(Date.now() + 86400000));
  let weekDate = formatDate(new Date(Date.now() + 604800000));

  if (title === '' || priority === 'Priority' || !date) {
    alert('Please fill out the required fields');
    return;
  }

  // Capitalize the First Letter of Each Priority
  priority = priority.charAt(0).toUpperCase() + priority.slice(1);
  const newTodo = new Project(
    title,
    description,
    date,
    priority,
    locationInbox
  );
  inbox.push(newTodo); // Adds every todo to the main inbox array

  // If the date is today, tomorrow, or a week from now, add the todo to the respective array
  if (date === todaysDate) {
    today.push(newTodo);
  } else if (date === tomorrowsDate) {
    tomorrow.push(newTodo);
  } else if (date === weekDate) {
    week.push(newTodo);
  }

  // Searches for the project with the same title as the locationInbox and adds the todo to that project
  const project = projects.find((project) => project.title === locationInbox);
  if (project) {
    project.todos.push(newTodo);
  }

  // Display the todos in the inbox
  displayTodos(inbox);
}

function displayTodos(todos) {
  // Get the todo section and clear it
  const todoSection = document.querySelector('.todoSection');
  todoSection.innerHTML = '';

  if (!todos || todos.length === 0) {
    todoSection.innerHTML = '<h2>No todos to display</h2>';
    todoSection.style.color = 'white';
    return;
  }

  // Loop through the todos and create the todo elements
  todos.forEach((todo, index) => {
    const todoContainer = document.createElement('div');
    const todoItem = document.createElement('div');
    const todoHeader = document.createElement('div');
    const todoCheckbox = document.createElement('input');
    const todoTitle = document.createElement('h3');
    const todoPriority = document.createElement('span');
    const todoDate = document.createElement('h3');
    const todoBody = document.createElement('div');
    const todoDescription = document.createElement('p');
    const todoIcons = document.createElement('div');
    const todoDelete = document.createElement('button');
    const todoDeleteIcon = document.createElement('img');

    todoContainer.classList.add('todoContainer');
    todoItem.classList.add('todoList');
    todoHeader.classList.add('todoHeader');
    todoCheckbox.classList.add('check');
    todoTitle.classList.add('todoTitle');
    todoPriority.classList.add('todo-priority');

    if (todo.priority === 'High') {
      todoPriority.classList.add('high');
    } else if (todo.priority === 'Medium') {
      todoPriority.classList.add('medium');
    } else {
      todoPriority.classList.add('low');
    }

    todoDate.classList.add('date');
    todoBody.classList.add('todoBody');
    todoDescription.classList.add('todoDescription');
    todoIcons.classList.add('todoIcons');
    todoDelete.classList.add('todo-trash');

    todoCheckbox.type = 'checkbox';
    todoTitle.textContent = todo.title;
    todoPriority.textContent = todo.priority;
    todoDate.textContent = todo.date;
    todoDescription.textContent = todo.description;
    todoDeleteIcon.src = '../dist/svg/trash-bin-minimalistic-svgrepo-com.svg';

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

    // When the delete button is clicked, remove the todo from the inbox array and display the updated todos
    todoDelete.addEventListener('click', () => {
      todoContainer.remove();
      todos.splice(index, 1);

      // Finds the index of the todo item in the array that matches the title of the todo item being deleted
      const removeTodo = (array) => {
        if (!array) return;
        const index = array.findIndex(
          (arrayTodo) => arrayTodo.title === todo.title
        );
        // If found, remove the todo item from the array
        if (index !== -1) {
          array.splice(index, 1);
        }
      };

      // Ensures that the todo item is removed from all the inbox arrays
      removeTodo(inbox);
      removeTodo(today);
      removeTodo(tomorrow);
      removeTodo(week);

      // Finds the project that matches the locationInbox of the todo item being deleted
      const project = projects.find(
        (project) => project.title === todo.locationInbox
      );
      // If found, remove the todo item from the project
      if (project && project.todos) {
        removeTodo(project.todos);
      }

      // Display the updated todos
      displayTodos(todos);
    });

    // When the checkbox is clicked, add a line-through to the todo title and change the color to grey
    todoCheckbox.addEventListener('click', () => {
      if (todoCheckbox.checked) {
        todoContainer.style.textDecoration = 'line-through';
        todoContainer.style.color = 'grey';
      } else {
        todoContainer.style.textDecoration = 'none';
        todoContainer.style.color = 'black';
      }
    });
  });
}

export function clearInputs() {
  titleBox.value = '';
  descriptionBox.value = '';
  dateBox.value = '';
  priorityBox.value = 'Priority';

  document.querySelector('.add-todo-dialog').close();
}

function switchInboxes() {
  const inboxBtn = document.querySelector('.inbox-button');
  const todayBtn = document.querySelector('.today-button');
  const tomorrowBtn = document.querySelector('.tomorrow-button');
  const weekBtn = document.querySelector('.week-button');
  const inboxName = document.querySelector('.inboxName');

  // When the respective inbox button is clicked, display the todos in the respective inbox
  inboxBtn.addEventListener('click', () => {
    inboxName.textContent = 'Inbox';
    displayTodos(inbox);
  });

  todayBtn.addEventListener('click', () => {
    inboxName.textContent = 'Today';
    displayTodos(today);
  });

  tomorrowBtn.addEventListener('click', () => {
    inboxName.textContent = 'Tomorrow';
    displayTodos(tomorrow);
  });

  weekBtn.addEventListener('click', () => {
    inboxName.textContent = 'Week';
    displayTodos(week);
  });
}

function createProject() {
  const projectTitle = document.querySelector('.project-title-box').value;

  // If at least one project with the same title exists, alert the user
  if (projects.some((project) => project.title === projectTitle)) {
    alert('Project already exists');
    return;
  }

  if (projectTitle === '' || projectTitle.length > 24) {
    alert('Please enter a valid project title');
    return;
  }

  // Create a new project and add it to the projects array
  const newProject = new ProjectList(projectTitle);
  projects.push(newProject);

  // Creates a new option in the project selection dropdown
  const projectOption = document.createElement('option');
  projectOption.textContent = projectTitle;
  projectOption.value = projectTitle;
  projectSelection.appendChild(projectOption);

  // Create a new project container and add it to the project section
  const projectContainer = document.createElement('div');
  const projectButton = document.createElement('button');
  const projectIcon = document.createElement('div');
  const deleteProject = document.createElement('button');
  const deleteIcon = document.createElement('img');
  const projectSection = document.querySelector('.projects-section');

  projectContainer.classList.add('project');
  projectButton.classList.add('project-button');
  projectIcon.classList.add('project-icons');
  deleteProject.classList.add('delete-project');

  projectButton.textContent = projectTitle;
  deleteIcon.src = '../dist/svg/trash-bin-minimalistic-svgrepo-com.svg';
  deleteProject.appendChild(deleteIcon);

  projectIcon.appendChild(deleteProject);
  projectContainer.appendChild(projectButton);
  projectContainer.appendChild(projectIcon);
  projectSection.appendChild(projectContainer);

  // When the project button is clicked, display the todos in the respective project
  projectButton.addEventListener('click', () => {
    const inboxName = document.querySelector('.inboxName');
    inboxName.textContent = projectTitle;
    displayTodos(newProject.todos);
  });
}

function deleteProject() {
  const deleteProjectButtons = document.querySelectorAll('.delete-project');

  deleteProjectButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Get the project container and the project title
      let projectContainer = button.parentElement.parentElement;
      const projectTitle =
        projectContainer.querySelector('.project-button').textContent;

      // Remove the project container from the project section DOM
      projectContainer.remove();

      // Find the project with the same title as the project being deleted
      const projectIndex = projects.findIndex(
        (project) => project.title === projectTitle
      );
      if (projectIndex !== -1) {
        const deletedProject = projects.splice(projectIndex, 1)[0];

        // Remove the todos from the respective inbox arrays
        const removeTodoFromInboxes = (todo) => {
          const removeFromArray = (array) => {
            const index = array.findIndex(
              (arrayTodo) => arrayTodo.title === todo.title
            );
            if (index !== -1) {
              array.splice(index, 1);
            }
          };

          // Remove the todo from other inbox arrays
          removeFromArray(inbox);
          removeFromArray(today);
          removeFromArray(tomorrow);
          removeFromArray(week);
        };

        deletedProject.todos.forEach(removeTodoFromInboxes);
      }

      // Remove the project from the project selection dropdown
      const projectSelection = document.querySelector('#project-selection');
      const projectOption = Array.from(projectSelection.options).find(
        (option) => option.textContent === projectTitle
      );
      if (projectOption) {
        projectOption.remove();
      }

      // If the inbox name is the same as the project being deleted, display the inbox todos
      const inboxName = document.querySelector('.inboxName').textContent;
      if (inboxName === projectTitle) {
        document.querySelector('.inboxName').textContent = 'Inbox';
        displayTodos(inbox);
      }

      // Refresh other todo inboxes
      refreshTodos();
    });
  });
}

function refreshTodos() {
  const selectedInbox = document.querySelector('.inboxName').textContent;
  if (selectedInbox === 'Inbox') {
    displayTodos(inbox);
  } else if (selectedInbox === 'Today') {
    displayTodos(today);
  } else if (selectedInbox === 'Tomorrow') {
    displayTodos(tomorrow);
  } else if (selectedInbox === 'Week') {
    displayTodos(week);
  } else {
    const project = projects.find((project) => project.title === selectedInbox);
    displayTodos(project.todos);
  }
}

export function initializeTodoFunctions() {
  displayTodos(inbox);
  switchInboxes();
  addTodoBtn.addEventListener('click', (event) => {
    event.preventDefault();
    createTodos();
    clearInputs();
    refreshTodos();
  });
  submitProject.addEventListener('click', (event) => {
    event.preventDefault();
    createProject();
    deleteProject();
    console.log(projects);
  });
}
