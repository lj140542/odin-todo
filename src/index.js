import './style.css';

const ToDo = (id, title, done) => {
  const getId = () => id;
  const getTitle = () => title;
  const getDone = () => done;
  const setDone = (isDone) => done = isDone;
  return { getId, getTitle, getDone, setDone };
}

const Project = (id, name, todos) => {
  const getId = () => id;
  const getName = () => name;
  const getTodos = () => todos;
  const setName = (newName) => name = newName;
  const addTodo = (todo) => todos.add(todo);
  const toString = () => `id : ${id} | name : ${name}`;
  return { getId, getName, getTodos, setName, addTodo, toString };
}

const Display = (() => {
  const displayAddProjectButton = () => {
    let liElement = document.createElement('li');
    let buttonElement = document.createElement('button');
    let iconElement = document.createElement('ion-icon');

    iconElement.setAttribute('name', 'add-outline');
    buttonElement.id = 'add-project';
    buttonElement.addEventListener('click', () => displayNewProject());
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

    tmpElement.addEventListener('click', e => Controller.selectProject(project.getId()));
    tmpElement.addEventListener('blur', e => Controller.renameProject(e, project.getId()));
    liElement.appendChild(tmpElement);
    tmpElement = document.createElement('ion-icon');
    tmpElement.classList.add('delete-project');
    tmpElement.setAttribute('name', 'trash');
    tmpElement.addEventListener('click', e => Controller.removeProject(e));
    liElement.appendChild(tmpElement);
    liElement.classList.add('project');
    liElement.setAttribute('project-id', project.getId());

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
    let newProject = Controller.createProject();

    document.getElementById('projects').removeChild(document.getElementById('add-project').parentElement);
    displayProject(newProject);
    Controller.selectProject(newProject.getId());
    displayAddProjectButton();
  };
  const displayNewTodo = () => {

  };
  return { displayProjectList, displayTodoList, displayNewProject, displayNewTodo };
})();

const Controller = (() => {
  const createProject = () => {
    let newProject = Project(Controller.getNewProjectId(), 'New Project', []);
    projects.push(newProject);
    return newProject;
  };
  const removeProject = (event) => {
    let liElement = event.target.parentElement;
    let projectId = liElement.attributes['project-id'].value;
    let projectIndex = getProjectIndex(projectId);

    if (projectIndex > -1 && projectIndex < projects.length) {
      projects.splice(projectIndex, 1);
      if (liElement.classList.contains('selected')) selectProject(0);
      liElement.parentElement.removeChild(liElement);
    }
  };
  const selectProject = (id) => {
    let liProject = document.querySelector(`.project[project-id="${id}"]`);

    if (liProject.classList.contains('selected')) return;

    // unselect the current selected project
    let selectedProjects = document.getElementsByClassName('selected');
    for (let i = 0; i < selectedProjects.length; i++) {
      selectedProjects[i].firstElementChild.contentEditable = 'false';
      selectedProjects[i].classList.remove('selected');
    }

    // select the correct project
    let projectIndex = getProjectIndex(id);
    if (projectIndex > -1 && projectIndex < projects.length) {
      // blocks the edition of the default project name
      if (id > 0) liProject.firstElementChild.contentEditable = 'true';
      liProject.classList.add('selected');
      Display.displayTodoList(projects[projectIndex].getTodos());
    }
  };
  const createTodo = () => {

  };
  const removeTodo = () => {

  };
  const getNewProjectId = () => {
    let maxId = 0;
    projects.forEach(project => {
      if (project.getId() > maxId) maxId = project.getId();
    });
    return maxId + 1;
  };
  const getProjectIndex = (id) => {
    return projects.findIndex((project) => project.getId() == id);
  }
  const renameProject = (e, id) => {
    e.preventDefault();
    let index = getProjectIndex(id);
    if (index > -1 && index < projects.length) {
      if (e.target.innerHTML.replaceAll('&nbsp;', '') == '')
        e.target.textContent = projects[index].getName();
      else
        projects[index].setName(e.target.textContent);
    }
    console.log(projects.toString());
  }
  return { createProject, removeProject, selectProject, createTodo, removeTodo, getNewProjectId, renameProject };
})();

const projectUL = document.getElementById('projects');
const contentDIV = document.getElementById('content');

let projects = [Project(0, '#Default', [ToDo(0, 'This is a default item', false)])];

Display.displayProjectList(projects);
Controller.selectProject(0);