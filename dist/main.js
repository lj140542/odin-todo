/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const ToDo = (id, title, done) => {
  const getId = () => id;
  const getTitle = () => title;
  const getDone = () => done;
  const setDone = (isDone) => done = isDone;
  const setTitle = (newTitle) => title = newTitle;
  const toString = () => `id : ${id} | title : ${title} | done : ${done}`;
  return { getId, getTitle, getDone, setDone, setTitle, toString };
}

const Project = (id, name, todos) => {
  const getId = () => id;
  const getName = () => name;
  const getTodos = () => todos;
  const setName = (newName) => name = newName;
  const addTodo = (todo) => todos.push(todo);
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
    buttonElement.addEventListener('click', () => displayNewTodo());
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
    checkElement.addEventListener('click', e => Controller.checkTodo(e))
    if (todo.getDone())
      checkElement.setAttribute('name', 'checkmark-circle');
    else
      checkElement.setAttribute('name', 'ellipse-outline');
    titleElement.classList.add('title');
    titleElement.textContent = todo.getTitle();
    titleElement.contentEditable = 'true';
    titleElement.addEventListener('blur', e => Controller.renameTodo(e));
    wrapperElement.append(checkElement, titleElement);
    iconElement.classList.add('delete-todo');
    iconElement.setAttribute('name', 'trash');
    iconElement.addEventListener('click', e => Controller.removeTodo(e));
    todoElement.append(wrapperElement, iconElement);
    todoElement.classList.add('todo');
    todoElement.setAttribute('todo-id', todo.getId());

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
    let newTodo = Controller.createTodo();

    document.getElementById('content').removeChild(document.getElementById('add-todo'));
    displayTodo(newTodo);
    displayAddTodoButton();
  };
  return { displayProjectList, displayTodoList, displayNewProject, displayNewTodo };
})();

const Controller = (() => {
  const createProject = () => {
    let newProject = Project(getNewProjectId(), 'New Project', []);
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
      currentProjectIndex = projectIndex;
    }
  };
  const createTodo = () => {
    let todo = ToDo(getNewTodoId(currentProjectIndex), 'New task', false);
    projects[currentProjectIndex].addTodo(todo);
    return todo;
  };
  const removeTodo = (event) => {
    let divElement = event.target.parentElement;
    let todoId = divElement.attributes['todo-id'].value;
    let todoIndex = getTodoIndex(currentProjectIndex, todoId);
    let todos = projects[currentProjectIndex].getTodos();

    if (todoIndex > -1 && todoIndex < todos.length) {
      todos.splice(todoIndex, 1);
      divElement.parentElement.removeChild(divElement);
    }
  };
  const getNewProjectId = () => {
    let maxId = 0;
    projects.forEach(project => {
      if (project.getId() > maxId) maxId = project.getId();
    });
    return maxId + 1;
  };
  const getNewTodoId = (projectId) => {
    let maxId = 0;
    if (projectId < 0 || projectId > projects.length) return -1;
    projects[projectId].getTodos().forEach(todo => {
      if (todo.getId() > maxId) maxId = todo.getId();
    });
    return maxId + 1;
  };
  const getProjectIndex = (id) => {
    return projects.findIndex((project) => project.getId() == id);
  };
  const getTodoIndex = (projectIndex, todoId) => {
    if (projectIndex < 0 || projectIndex > projects.length) return -1;
    return projects[projectIndex].getTodos().findIndex((todo) => todo.getId() == todoId);
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
  };
  const renameTodo = (event) => {
    let titleElement = event.target;
    let divElement = titleElement.parentElement.parentElement;
    let todoId = divElement.attributes['todo-id'].value;
    let todoIndex = getTodoIndex(currentProjectIndex, todoId);
    let todos = projects[currentProjectIndex].getTodos();

    if (todoIndex > -1 && todoIndex < todos.length) {
      let todo = todos[todoIndex];
      if (titleElement.innerHTML.replaceAll('&nbsp;', '') == '')
        titleElement.textContent = todo.getTitle();
      else
        todo.setTitle(titleElement.textContent);
    }
  };
  const checkTodo = (event) => {
    let checkElement = event.target;
    let divElement = checkElement.parentElement.parentElement;
    let todoId = divElement.attributes['todo-id'].value;
    let todoIndex = getTodoIndex(currentProjectIndex, todoId);
    let todos = projects[currentProjectIndex].getTodos();

    if (todoIndex > -1 && todoIndex < todos.length) {
      let todo = todos[todoIndex];
      todo.setDone(!todo.getDone());
      if (todo.getDone())
        checkElement.setAttribute('name', 'checkmark-circle');
      else
        checkElement.setAttribute('name', 'ellipse-outline');
    }
  };
  return { createProject, removeProject, selectProject, createTodo, removeTodo, renameProject, renameTodo, checkTodo };
})();

const projectUL = document.getElementById('projects');
const contentDIV = document.getElementById('content');
let projects = [Project(0, '#Default', [ToDo(0, 'This is a default item', false)])];
let currentProjectIndex = 0;

Display.displayProjectList(projects);
Controller.selectProject(0);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxJQUFJLFlBQVksT0FBTyxXQUFXLEtBQUs7QUFDeEUsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxJQUFJLFdBQVcsS0FBSztBQUNyRCxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLEdBQUc7O0FBRXRFOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgVG9EbyA9IChpZCwgdGl0bGUsIGRvbmUpID0+IHtcbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZDtcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0RG9uZSA9ICgpID0+IGRvbmU7XG4gIGNvbnN0IHNldERvbmUgPSAoaXNEb25lKSA9PiBkb25lID0gaXNEb25lO1xuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4gdGl0bGUgPSBuZXdUaXRsZTtcbiAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiBgaWQgOiAke2lkfSB8IHRpdGxlIDogJHt0aXRsZX0gfCBkb25lIDogJHtkb25lfWA7XG4gIHJldHVybiB7IGdldElkLCBnZXRUaXRsZSwgZ2V0RG9uZSwgc2V0RG9uZSwgc2V0VGl0bGUsIHRvU3RyaW5nIH07XG59XG5cbmNvbnN0IFByb2plY3QgPSAoaWQsIG5hbWUsIHRvZG9zKSA9PiB7XG4gIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHRvZG9zO1xuICBjb25zdCBzZXROYW1lID0gKG5ld05hbWUpID0+IG5hbWUgPSBuZXdOYW1lO1xuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHRvZG9zLnB1c2godG9kbyk7XG4gIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4gYGlkIDogJHtpZH0gfCBuYW1lIDogJHtuYW1lfWA7XG4gIHJldHVybiB7IGdldElkLCBnZXROYW1lLCBnZXRUb2Rvcywgc2V0TmFtZSwgYWRkVG9kbywgdG9TdHJpbmcgfTtcbn1cblxuY29uc3QgRGlzcGxheSA9ICgoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlBZGRQcm9qZWN0QnV0dG9uID0gKCkgPT4ge1xuICAgIGxldCBsaUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGljb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW9uLWljb24nKTtcblxuICAgIGljb25FbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsICdhZGQtb3V0bGluZScpO1xuICAgIGJ1dHRvbkVsZW1lbnQuaWQgPSAnYWRkLXByb2plY3QnO1xuICAgIGJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwbGF5TmV3UHJvamVjdCgpKTtcbiAgICBidXR0b25FbGVtZW50LmFwcGVuZENoaWxkKGljb25FbGVtZW50KTtcbiAgICBsaUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIGxpRWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25FbGVtZW50KTtcblxuICAgIHByb2plY3RVTC5hcHBlbmRDaGlsZChsaUVsZW1lbnQpO1xuICB9O1xuICBjb25zdCBkaXNwbGF5QWRkVG9kb0J1dHRvbiA9ICgpID0+IHtcbiAgICBsZXQgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBpY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG5cbiAgICBpY29uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYWRkLWNpcmNsZScpO1xuICAgIGJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwbGF5TmV3VG9kbygpKTtcbiAgICBidXR0b25FbGVtZW50LmFwcGVuZENoaWxkKGljb25FbGVtZW50KTtcbiAgICBidXR0b25FbGVtZW50LmlkID0gJ2FkZC10b2RvJztcblxuICAgIGNvbnRlbnRESVYuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbWVudCk7XG4gIH07XG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0TGlzdCA9IChwcm9qZWN0TGlzdCkgPT4ge1xuICAgIGNsZWFyUHJvamVjdExpc3QoKTtcblxuICAgIHByb2plY3RMaXN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIGRpc3BsYXlBZGRQcm9qZWN0QnV0dG9uKCk7XG4gIH07XG4gIGNvbnN0IGRpc3BsYXlUb2RvTGlzdCA9ICh0b2RvTGlzdCkgPT4ge1xuICAgIGNsZWFyVG9kb0xpc3QoKTtcblxuICAgIHRvZG9MaXN0LmZvckVhY2godG9kbyA9PiB7XG4gICAgICBkaXNwbGF5VG9kbyh0b2RvKTtcbiAgICB9KTtcblxuICAgIGRpc3BsYXlBZGRUb2RvQnV0dG9uKCk7XG4gIH07XG4gIGNvbnN0IGNsZWFyUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgd2hpbGUgKHByb2plY3RVTC5maXJzdENoaWxkKSB7XG4gICAgICBwcm9qZWN0VUwucmVtb3ZlQ2hpbGQocHJvamVjdFVMLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBjbGVhclRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIHdoaWxlIChjb250ZW50RElWLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnRESVYucmVtb3ZlQ2hpbGQoY29udGVudERJVi5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZGlzcGxheVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGxldCBsaUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCB0bXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpID09ICcjRGVmYXVsdCcpIHtcbiAgICAgIGxpRWxlbWVudC5pZCA9ICdkZWZhdWx0LXByb2plY3QnO1xuICAgICAgdG1wRWxlbWVudC50ZXh0Q29udGVudCA9ICdEZWZhdWx0JztcbiAgICB9IGVsc2UgdG1wRWxlbWVudC50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuXG4gICAgdG1wRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gQ29udHJvbGxlci5zZWxlY3RQcm9qZWN0KHByb2plY3QuZ2V0SWQoKSkpO1xuICAgIHRtcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4gQ29udHJvbGxlci5yZW5hbWVQcm9qZWN0KGUsIHByb2plY3QuZ2V0SWQoKSkpO1xuICAgIGxpRWxlbWVudC5hcHBlbmRDaGlsZCh0bXBFbGVtZW50KTtcbiAgICB0bXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW9uLWljb24nKTtcbiAgICB0bXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0Jyk7XG4gICAgdG1wRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndHJhc2gnKTtcbiAgICB0bXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBDb250cm9sbGVyLnJlbW92ZVByb2plY3QoZSkpO1xuICAgIGxpRWxlbWVudC5hcHBlbmRDaGlsZCh0bXBFbGVtZW50KTtcbiAgICBsaUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIGxpRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3Byb2plY3QtaWQnLCBwcm9qZWN0LmdldElkKCkpO1xuXG4gICAgcHJvamVjdFVMLmFwcGVuZENoaWxkKGxpRWxlbWVudCk7XG4gIH07XG4gIGNvbnN0IGRpc3BsYXlUb2RvID0gKHRvZG8pID0+IHtcbiAgICBsZXQgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgd3JhcHBlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgY2hlY2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW9uLWljb24nKTtcbiAgICBsZXQgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGxldCBpY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG5cbiAgICB3cmFwcGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG4gICAgY2hlY2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBDb250cm9sbGVyLmNoZWNrVG9kbyhlKSlcbiAgICBpZiAodG9kby5nZXREb25lKCkpXG4gICAgICBjaGVja0VsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NoZWNrbWFyay1jaXJjbGUnKTtcbiAgICBlbHNlXG4gICAgICBjaGVja0VsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VsbGlwc2Utb3V0bGluZScpO1xuICAgIHRpdGxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICB0aXRsZUVsZW1lbnQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xuICAgIHRpdGxlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZSA9PiBDb250cm9sbGVyLnJlbmFtZVRvZG8oZSkpO1xuICAgIHdyYXBwZXJFbGVtZW50LmFwcGVuZChjaGVja0VsZW1lbnQsIHRpdGxlRWxlbWVudCk7XG4gICAgaWNvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRvZG8nKTtcbiAgICBpY29uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndHJhc2gnKTtcbiAgICBpY29uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gQ29udHJvbGxlci5yZW1vdmVUb2RvKGUpKTtcbiAgICB0b2RvRWxlbWVudC5hcHBlbmQod3JhcHBlckVsZW1lbnQsIGljb25FbGVtZW50KTtcbiAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgdG9kb0VsZW1lbnQuc2V0QXR0cmlidXRlKCd0b2RvLWlkJywgdG9kby5nZXRJZCgpKTtcblxuICAgIGNvbnRlbnRESVYuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQpO1xuICB9O1xuICBjb25zdCBkaXNwbGF5TmV3UHJvamVjdCA9ICgpID0+IHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IENvbnRyb2xsZXIuY3JlYXRlUHJvamVjdCgpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJykucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0JykucGFyZW50RWxlbWVudCk7XG4gICAgZGlzcGxheVByb2plY3QobmV3UHJvamVjdCk7XG4gICAgQ29udHJvbGxlci5zZWxlY3RQcm9qZWN0KG5ld1Byb2plY3QuZ2V0SWQoKSk7XG4gICAgZGlzcGxheUFkZFByb2plY3RCdXR0b24oKTtcbiAgfTtcbiAgY29uc3QgZGlzcGxheU5ld1RvZG8gPSAoKSA9PiB7XG4gICAgbGV0IG5ld1RvZG8gPSBDb250cm9sbGVyLmNyZWF0ZVRvZG8oKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10b2RvJykpO1xuICAgIGRpc3BsYXlUb2RvKG5ld1RvZG8pO1xuICAgIGRpc3BsYXlBZGRUb2RvQnV0dG9uKCk7XG4gIH07XG4gIHJldHVybiB7IGRpc3BsYXlQcm9qZWN0TGlzdCwgZGlzcGxheVRvZG9MaXN0LCBkaXNwbGF5TmV3UHJvamVjdCwgZGlzcGxheU5ld1RvZG8gfTtcbn0pKCk7XG5cbmNvbnN0IENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gUHJvamVjdChnZXROZXdQcm9qZWN0SWQoKSwgJ05ldyBQcm9qZWN0JywgW10pO1xuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gIH07XG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgbGlFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IHByb2plY3RJZCA9IGxpRWxlbWVudC5hdHRyaWJ1dGVzWydwcm9qZWN0LWlkJ10udmFsdWU7XG4gICAgbGV0IHByb2plY3RJbmRleCA9IGdldFByb2plY3RJbmRleChwcm9qZWN0SWQpO1xuXG4gICAgaWYgKHByb2plY3RJbmRleCA+IC0xICYmIHByb2plY3RJbmRleCA8IHByb2plY3RzLmxlbmd0aCkge1xuICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgICBpZiAobGlFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkgc2VsZWN0UHJvamVjdCgwKTtcbiAgICAgIGxpRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGxpRWxlbWVudCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgbGV0IGxpUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0W3Byb2plY3QtaWQ9XCIke2lkfVwiXWApO1xuXG4gICAgaWYgKGxpUHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHJldHVybjtcblxuICAgIC8vIHVuc2VsZWN0IHRoZSBjdXJyZW50IHNlbGVjdGVkIHByb2plY3RcbiAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdGVkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzZWxlY3RlZFByb2plY3RzW2ldLmZpcnN0RWxlbWVudENoaWxkLmNvbnRlbnRFZGl0YWJsZSA9ICdmYWxzZSc7XG4gICAgICBzZWxlY3RlZFByb2plY3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgLy8gc2VsZWN0IHRoZSBjb3JyZWN0IHByb2plY3RcbiAgICBsZXQgcHJvamVjdEluZGV4ID0gZ2V0UHJvamVjdEluZGV4KGlkKTtcbiAgICBpZiAocHJvamVjdEluZGV4ID4gLTEgJiYgcHJvamVjdEluZGV4IDwgcHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAvLyBibG9ja3MgdGhlIGVkaXRpb24gb2YgdGhlIGRlZmF1bHQgcHJvamVjdCBuYW1lXG4gICAgICBpZiAoaWQgPiAwKSBsaVByb2plY3QuZmlyc3RFbGVtZW50Q2hpbGQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xuICAgICAgbGlQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICBEaXNwbGF5LmRpc3BsYXlUb2RvTGlzdChwcm9qZWN0c1twcm9qZWN0SW5kZXhdLmdldFRvZG9zKCkpO1xuICAgICAgY3VycmVudFByb2plY3RJbmRleCA9IHByb2plY3RJbmRleDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAoKSA9PiB7XG4gICAgbGV0IHRvZG8gPSBUb0RvKGdldE5ld1RvZG9JZChjdXJyZW50UHJvamVjdEluZGV4KSwgJ05ldyB0YXNrJywgZmFsc2UpO1xuICAgIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLmFkZFRvZG8odG9kbyk7XG4gICAgcmV0dXJuIHRvZG87XG4gIH07XG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgZGl2RWxlbWVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIGxldCB0b2RvSWQgPSBkaXZFbGVtZW50LmF0dHJpYnV0ZXNbJ3RvZG8taWQnXS52YWx1ZTtcbiAgICBsZXQgdG9kb0luZGV4ID0gZ2V0VG9kb0luZGV4KGN1cnJlbnRQcm9qZWN0SW5kZXgsIHRvZG9JZCk7XG4gICAgbGV0IHRvZG9zID0gcHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0uZ2V0VG9kb3MoKTtcblxuICAgIGlmICh0b2RvSW5kZXggPiAtMSAmJiB0b2RvSW5kZXggPCB0b2Rvcy5sZW5ndGgpIHtcbiAgICAgIHRvZG9zLnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICAgICAgZGl2RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGRpdkVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0TmV3UHJvamVjdElkID0gKCkgPT4ge1xuICAgIGxldCBtYXhJZCA9IDA7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGlmIChwcm9qZWN0LmdldElkKCkgPiBtYXhJZCkgbWF4SWQgPSBwcm9qZWN0LmdldElkKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1heElkICsgMTtcbiAgfTtcbiAgY29uc3QgZ2V0TmV3VG9kb0lkID0gKHByb2plY3RJZCkgPT4ge1xuICAgIGxldCBtYXhJZCA9IDA7XG4gICAgaWYgKHByb2plY3RJZCA8IDAgfHwgcHJvamVjdElkID4gcHJvamVjdHMubGVuZ3RoKSByZXR1cm4gLTE7XG4gICAgcHJvamVjdHNbcHJvamVjdElkXS5nZXRUb2RvcygpLmZvckVhY2godG9kbyA9PiB7XG4gICAgICBpZiAodG9kby5nZXRJZCgpID4gbWF4SWQpIG1heElkID0gdG9kby5nZXRJZCgpO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXhJZCArIDE7XG4gIH07XG4gIGNvbnN0IGdldFByb2plY3RJbmRleCA9IChpZCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QuZ2V0SWQoKSA9PSBpZCk7XG4gIH07XG4gIGNvbnN0IGdldFRvZG9JbmRleCA9IChwcm9qZWN0SW5kZXgsIHRvZG9JZCkgPT4ge1xuICAgIGlmIChwcm9qZWN0SW5kZXggPCAwIHx8IHByb2plY3RJbmRleCA+IHByb2plY3RzLmxlbmd0aCkgcmV0dXJuIC0xO1xuICAgIHJldHVybiBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLmdldFRvZG9zKCkuZmluZEluZGV4KCh0b2RvKSA9PiB0b2RvLmdldElkKCkgPT0gdG9kb0lkKTtcbiAgfVxuICBjb25zdCByZW5hbWVQcm9qZWN0ID0gKGUsIGlkKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBpbmRleCA9IGdldFByb2plY3RJbmRleChpZCk7XG4gICAgaWYgKGluZGV4ID4gLTEgJiYgaW5kZXggPCBwcm9qZWN0cy5sZW5ndGgpIHtcbiAgICAgIGlmIChlLnRhcmdldC5pbm5lckhUTUwucmVwbGFjZUFsbCgnJm5ic3A7JywgJycpID09ICcnKVxuICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IHByb2plY3RzW2luZGV4XS5nZXROYW1lKCk7XG4gICAgICBlbHNlXG4gICAgICAgIHByb2plY3RzW2luZGV4XS5zZXROYW1lKGUudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbmFtZVRvZG8gPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgdGl0bGVFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGxldCBkaXZFbGVtZW50ID0gdGl0bGVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgdG9kb0lkID0gZGl2RWxlbWVudC5hdHRyaWJ1dGVzWyd0b2RvLWlkJ10udmFsdWU7XG4gICAgbGV0IHRvZG9JbmRleCA9IGdldFRvZG9JbmRleChjdXJyZW50UHJvamVjdEluZGV4LCB0b2RvSWQpO1xuICAgIGxldCB0b2RvcyA9IHByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLmdldFRvZG9zKCk7XG5cbiAgICBpZiAodG9kb0luZGV4ID4gLTEgJiYgdG9kb0luZGV4IDwgdG9kb3MubGVuZ3RoKSB7XG4gICAgICBsZXQgdG9kbyA9IHRvZG9zW3RvZG9JbmRleF07XG4gICAgICBpZiAodGl0bGVFbGVtZW50LmlubmVySFRNTC5yZXBsYWNlQWxsKCcmbmJzcDsnLCAnJykgPT0gJycpXG4gICAgICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdG9kby5zZXRUaXRsZSh0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY2hlY2tUb2RvID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IGNoZWNrRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBsZXQgZGl2RWxlbWVudCA9IGNoZWNrRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IHRvZG9JZCA9IGRpdkVsZW1lbnQuYXR0cmlidXRlc1sndG9kby1pZCddLnZhbHVlO1xuICAgIGxldCB0b2RvSW5kZXggPSBnZXRUb2RvSW5kZXgoY3VycmVudFByb2plY3RJbmRleCwgdG9kb0lkKTtcbiAgICBsZXQgdG9kb3MgPSBwcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS5nZXRUb2RvcygpO1xuXG4gICAgaWYgKHRvZG9JbmRleCA+IC0xICYmIHRvZG9JbmRleCA8IHRvZG9zLmxlbmd0aCkge1xuICAgICAgbGV0IHRvZG8gPSB0b2Rvc1t0b2RvSW5kZXhdO1xuICAgICAgdG9kby5zZXREb25lKCF0b2RvLmdldERvbmUoKSk7XG4gICAgICBpZiAodG9kby5nZXREb25lKCkpXG4gICAgICAgIGNoZWNrRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2hlY2ttYXJrLWNpcmNsZScpO1xuICAgICAgZWxzZVxuICAgICAgICBjaGVja0VsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VsbGlwc2Utb3V0bGluZScpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgY3JlYXRlUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgc2VsZWN0UHJvamVjdCwgY3JlYXRlVG9kbywgcmVtb3ZlVG9kbywgcmVuYW1lUHJvamVjdCwgcmVuYW1lVG9kbywgY2hlY2tUb2RvIH07XG59KSgpO1xuXG5jb25zdCBwcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcbmNvbnN0IGNvbnRlbnRESVYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xubGV0IHByb2plY3RzID0gW1Byb2plY3QoMCwgJyNEZWZhdWx0JywgW1RvRG8oMCwgJ1RoaXMgaXMgYSBkZWZhdWx0IGl0ZW0nLCBmYWxzZSldKV07XG5sZXQgY3VycmVudFByb2plY3RJbmRleCA9IDA7XG5cbkRpc3BsYXkuZGlzcGxheVByb2plY3RMaXN0KHByb2plY3RzKTtcbkNvbnRyb2xsZXIuc2VsZWN0UHJvamVjdCgwKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=