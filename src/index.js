import './style.css';

const ToDo = (title, done) => {
  const getTitle = () => title;
  const getDone = () => done;
  const setDone = (isDone) => done = isDone;
  return { getTitle, getDone, setDone };
}

const Project = (name, todos) => {
  const getName = () => name;
  const getTodos = () => todos;
  const addTodo = (todo) => todos.add(todo);
  return { getName, getTodos, addTodo };
}

const Display = (() => {
  const displayAddProjectButton = () => {
    let liElement = document.createElement('li');
    let buttonElement = document.createElement('button');
    let iconElement = document.createElement('ion-icon');

    iconElement.setAttribute('name', 'add-outline');
    buttonElement.id = 'add-project';
    buttonElement.appendChild(iconElement);
    liElement.classList.add('project');
    liElement.appendChild(buttonElement);

    projectUL.appendChild(liElement);
  };
  const displayAddTodoButton = () => {
    let buttonElement = document.createElement('button');
    let iconElement = document.createElement('ion-icon');

    iconElement.setAttribute('name', 'add-circle');
    buttonElement.appendChild(iconElement);
    buttonElement.id = 'add-todo';

    contentDIV.appendChild(buttonElement);
  };
  const displayProjectList = (projectList) => {
    clearProjectList();

    projectList.forEach(project => {
      displayProject(project);
    });

    displayAddProjectButton();
  };
  const displayTodoList = (todoList) => {
    clearTodoList();

    todoList.forEach(todo => {
      displayTodo(todo);
    });

    displayAddTodoButton();
  };
  const clearProjectList = () => {
    while (projectUL.firstChild) {
      projectUL.removeChild(projectUL.lastChild);
    }
  };
  const clearTodoList = () => {
    while (contentDIV.firstChild) {
      contentDIV.removeChild(contentDIV.lastChild);
    }
  };
  const displayProject = (project) => {
    let liElement = document.createElement('li');
    let tmpElement = document.createElement('a');

    if (project.getName() == '#Default') {
      liElement.id = 'default-project';
      tmpElement.textContent = 'Default';
    } else tmpElement.textContent = project.getName();

    liElement.appendChild(tmpElement);
    tmpElement = document.createElement('ion-icon');
    tmpElement.classList.add('delete-project');
    tmpElement.setAttribute('name', 'trash');
    liElement.appendChild(tmpElement);
    liElement.classList.add('project');

    projectUL.appendChild(liElement);
  };
  const displayTodo = (todo) => {
    let todoElement = document.createElement('div');
    let wrapperElement = document.createElement('div');
    let checkElement = document.createElement('ion-icon');
    let titleElement = document.createElement('section');
    let iconElement = document.createElement('ion-icon');

    wrapperElement.classList.add('wrapper');
    checkElement.classList.add('checkbox');
    if (todo.getDone())
      checkElement.setAttribute('name', 'checkmark-circle');
    else
      checkElement.setAttribute('name', 'ellipse-outline');
    titleElement.classList.add('title');
    titleElement.textContent = todo.getTitle();
    wrapperElement.append(checkElement, titleElement);
    iconElement.classList.add('delete-todo');
    iconElement.setAttribute('name', 'trash');
    todoElement.append(wrapperElement, iconElement);
    todoElement.classList.add('todo');

    contentDIV.appendChild(todoElement);
  };
  const displayNewProject = () => {

  };
  const displayNewTodo = () => {

  };
  return { displayProjectList, displayTodoList, displayNewProject, displayNewTodo };
})();

const Controller = (() => {
  const createProject = () => {

  };
  const removeProject = () => {

  };
  const selectProject = (event) => {

  };
  const selectDefaultProject = () => {
    let defaultProject = document.getElementById('default-project');
    if (!defaultProject.classList.contains('selected')) {
      defaultProject.classList.add('selected');
      Display.displayTodoList(projects[0].getTodos());
    }
  };
  const createTodo = () => {

  };
  const removeTodo = () => {

  };
  return { createProject, removeProject, selectProject, selectDefaultProject, createTodo, removeTodo };
})();

const projectUL = document.getElementById('projects');
const contentDIV = document.getElementById('content');

let defaultProject = Project('#Default', [ToDo('This is a default item', false)]);
let projects = [defaultProject, Project('New Project', [ToDo('This is a new item', false)])];

Display.displayProjectList(projects);
Controller.selectDefaultProject();