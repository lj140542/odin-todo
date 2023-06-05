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


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
const Project = (id, name, todos) => {
  const getId = () => id;
  const getName = () => name;
  const getTodos = () => todos;
  const setName = (newName) => name = newName;
  const addTodo = (todo) => todos.push(todo);
  const toString = () => `id : ${id} | name : ${name}`;
  return { getId, getName, getTodos, setName, addTodo, toString };
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDo": () => (/* binding */ ToDo)
/* harmony export */ });
const ToDo = (id, title, done) => {
  const getId = () => id;
  const getTitle = () => title;
  const getDone = () => done;
  const setDone = (isDone) => done = isDone;
  const setTitle = (newTitle) => title = newTitle;
  const toString = () => `id : ${id} | title : ${title} | done : ${done}`;
  return { getId, getTitle, getDone, setDone, setTitle, toString };
}



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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");




const Display = (() => {
  const projectUL = document.getElementById('projects');
  const contentDIV = document.getElementById('content');
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
  return { displayProjectList, displayTodoList };
})();

const Controller = (() => {
  let projectList = [(0,_project_js__WEBPACK_IMPORTED_MODULE_1__.Project)(0, '#Default', [(0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.ToDo)(0, 'This is a default item', false)])];
  let currentProjectIndex = 0;
  const createProject = () => {
    let newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.Project)(getNewProjectId(), 'New Project', []);
    projectList.push(newProject);
    return newProject;
  };
  const removeProject = (event) => {
    let liElement = event.target.parentElement;
    let projectId = liElement.attributes['project-id'].value;
    let projectIndex = getProjectIndex(projectId);

    if (projectIndex > -1 && projectIndex < projectList.length) {
      projectList.splice(projectIndex, 1);
      if (liElement.classList.contains('selected')) selectProject(0);
      liElement.parentElement.removeChild(liElement);
    }
  };
  const selectProject = (projectId) => {
    let liProject = document.querySelector(`.project[project-id="${projectId}"]`);

    if (liProject.classList.contains('selected')) return;

    // unselect the current selected project
    let selectedProjects = document.getElementsByClassName('selected');
    for (let i = 0; i < selectedProjects.length; i++) {
      selectedProjects[i].firstElementChild.contentEditable = 'false';
      selectedProjects[i].classList.remove('selected');
    }

    // select the correct project
    let projectIndex = getProjectIndex(projectId);
    if (projectIndex > -1 && projectIndex < projectList.length) {
      // blocks the edition of the default project name
      if (projectId > 0) liProject.firstElementChild.contentEditable = 'true';
      liProject.classList.add('selected');
      Display.displayTodoList(projectList[projectIndex].getTodos());
      currentProjectIndex = projectIndex;
    }
  };
  const createTodo = () => {
    let todo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.ToDo)(getNewTodoId(currentProjectIndex), 'New task', false);
    projectList[currentProjectIndex].addTodo(todo);
    return todo;
  };
  const removeTodo = (event) => {
    let divElement = event.target.parentElement;
    let todoId = divElement.attributes['todo-id'].value;
    let todoIndex = getTodoIndex(currentProjectIndex, todoId);
    let todos = projectList[currentProjectIndex].getTodos();

    if (todoIndex > -1 && todoIndex < todos.length) {
      todos.splice(todoIndex, 1);
      divElement.parentElement.removeChild(divElement);
    }
  };
  const getNewProjectId = () => {
    let maxId = 0;
    projectList.forEach(project => {
      if (project.getId() > maxId) maxId = project.getId();
    });
    return maxId + 1;
  };
  const getNewTodoId = (projectId) => {
    let maxId = 0;
    if (projectId < 0 || projectId > projectList.length) return -1;
    projectList[projectId].getTodos().forEach(todo => {
      if (todo.getId() > maxId) maxId = todo.getId();
    });
    return maxId + 1;
  };
  const getProjectIndex = (projectId) => {
    return projectList.findIndex((project) => project.getId() == projectId);
  };
  const getTodoIndex = (projectIndex, todoId) => {
    if (projectIndex < 0 || projectIndex > projectList.length) return -1;
    return projectList[projectIndex].getTodos().findIndex((todo) => todo.getId() == todoId);
  }
  const renameProject = (event, projectId) => {
    event.preventDefault();
    let index = getProjectIndex(projectId);
    if (index > -1 && index < projectList.length) {
      if (event.target.innerHTML.replaceAll('&nbsp;', '') == '')
        event.target.textContent = projectList[index].getName();
      else
        projectList[index].setName(event.target.textContent);
    }
  };
  const renameTodo = (event) => {
    let titleElement = event.target;
    let divElement = titleElement.parentElement.parentElement;
    let todoId = divElement.attributes['todo-id'].value;
    let todoIndex = getTodoIndex(currentProjectIndex, todoId);
    let todos = projectList[currentProjectIndex].getTodos();

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
    let todos = projectList[currentProjectIndex].getTodos();

    if (todoIndex > -1 && todoIndex < todos.length) {
      let todo = todos[todoIndex];
      todo.setDone(!todo.getDone());
      if (todo.getDone())
        checkElement.setAttribute('name', 'checkmark-circle');
      else
        checkElement.setAttribute('name', 'ellipse-outline');
    }
  };
  const getProjectList = () => {
    return projectList;
  };
  return { createProject, removeProject, selectProject, createTodo, removeTodo, renameProject, renameTodo, checkTodo, getProjectList };
})();

Display.displayProjectList(Controller.getProjectList());
Controller.selectProject(0);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0EsNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBQcm9qZWN0ID0gKGlkLCBuYW1lLCB0b2RvcykgPT4ge1xuICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB0b2RvcztcbiAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiBuYW1lID0gbmV3TmFtZTtcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB0b2Rvcy5wdXNoKHRvZG8pO1xuICBjb25zdCB0b1N0cmluZyA9ICgpID0+IGBpZCA6ICR7aWR9IHwgbmFtZSA6ICR7bmFtZX1gO1xuICByZXR1cm4geyBnZXRJZCwgZ2V0TmFtZSwgZ2V0VG9kb3MsIHNldE5hbWUsIGFkZFRvZG8sIHRvU3RyaW5nIH07XG59XG5cbmV4cG9ydCB7IFByb2plY3QgfTsiLCJjb25zdCBUb0RvID0gKGlkLCB0aXRsZSwgZG9uZSkgPT4ge1xuICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBnZXREb25lID0gKCkgPT4gZG9uZTtcbiAgY29uc3Qgc2V0RG9uZSA9IChpc0RvbmUpID0+IGRvbmUgPSBpc0RvbmU7XG4gIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB0aXRsZSA9IG5ld1RpdGxlO1xuICBjb25zdCB0b1N0cmluZyA9ICgpID0+IGBpZCA6ICR7aWR9IHwgdGl0bGUgOiAke3RpdGxlfSB8IGRvbmUgOiAke2RvbmV9YDtcbiAgcmV0dXJuIHsgZ2V0SWQsIGdldFRpdGxlLCBnZXREb25lLCBzZXREb25lLCBzZXRUaXRsZSwgdG9TdHJpbmcgfTtcbn1cblxuZXhwb3J0IHsgVG9EbyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7IFRvRG8gfSBmcm9tICcuL3RvZG8uanMnO1xuXG5jb25zdCBEaXNwbGF5ID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG4gIGNvbnN0IGNvbnRlbnRESVYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBkaXNwbGF5QWRkUHJvamVjdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBsZXQgbGlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBpY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG5cbiAgICBpY29uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYWRkLW91dGxpbmUnKTtcbiAgICBidXR0b25FbGVtZW50LmlkID0gJ2FkZC1wcm9qZWN0JztcbiAgICBidXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheU5ld1Byb2plY3QoKSk7XG4gICAgYnV0dG9uRWxlbWVudC5hcHBlbmRDaGlsZChpY29uRWxlbWVudCk7XG4gICAgbGlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBsaUVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbWVudCk7XG5cbiAgICBwcm9qZWN0VUwuYXBwZW5kQ2hpbGQobGlFbGVtZW50KTtcbiAgfTtcbiAgY29uc3QgZGlzcGxheUFkZFRvZG9CdXR0b24gPSAoKSA9PiB7XG4gICAgbGV0IGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgaWNvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpb24taWNvbicpO1xuXG4gICAgaWNvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2FkZC1jaXJjbGUnKTtcbiAgICBidXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheU5ld1RvZG8oKSk7XG4gICAgYnV0dG9uRWxlbWVudC5hcHBlbmRDaGlsZChpY29uRWxlbWVudCk7XG4gICAgYnV0dG9uRWxlbWVudC5pZCA9ICdhZGQtdG9kbyc7XG5cbiAgICBjb250ZW50RElWLmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpO1xuICB9O1xuICBjb25zdCBkaXNwbGF5UHJvamVjdExpc3QgPSAocHJvamVjdExpc3QpID0+IHtcbiAgICBjbGVhclByb2plY3RMaXN0KCk7XG5cbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBkaXNwbGF5QWRkUHJvamVjdEJ1dHRvbigpO1xuICB9O1xuICBjb25zdCBkaXNwbGF5VG9kb0xpc3QgPSAodG9kb0xpc3QpID0+IHtcbiAgICBjbGVhclRvZG9MaXN0KCk7XG5cbiAgICB0b2RvTGlzdC5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgZGlzcGxheVRvZG8odG9kbyk7XG4gICAgfSk7XG5cbiAgICBkaXNwbGF5QWRkVG9kb0J1dHRvbigpO1xuICB9O1xuICBjb25zdCBjbGVhclByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIHdoaWxlIChwcm9qZWN0VUwuZmlyc3RDaGlsZCkge1xuICAgICAgcHJvamVjdFVMLnJlbW92ZUNoaWxkKHByb2plY3RVTC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY2xlYXJUb2RvTGlzdCA9ICgpID0+IHtcbiAgICB3aGlsZSAoY29udGVudERJVi5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50RElWLnJlbW92ZUNoaWxkKGNvbnRlbnRESVYubGFzdENoaWxkKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBsZXQgbGlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgdG1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PSAnI0RlZmF1bHQnKSB7XG4gICAgICBsaUVsZW1lbnQuaWQgPSAnZGVmYXVsdC1wcm9qZWN0JztcbiAgICAgIHRtcEVsZW1lbnQudGV4dENvbnRlbnQgPSAnRGVmYXVsdCc7XG4gICAgfSBlbHNlIHRtcEVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcblxuICAgIHRtcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IENvbnRyb2xsZXIuc2VsZWN0UHJvamVjdChwcm9qZWN0LmdldElkKCkpKTtcbiAgICB0bXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBlID0+IENvbnRyb2xsZXIucmVuYW1lUHJvamVjdChlLCBwcm9qZWN0LmdldElkKCkpKTtcbiAgICBsaUVsZW1lbnQuYXBwZW5kQ2hpbGQodG1wRWxlbWVudCk7XG4gICAgdG1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG4gICAgdG1wRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdCcpO1xuICAgIHRtcEVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RyYXNoJyk7XG4gICAgdG1wRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gQ29udHJvbGxlci5yZW1vdmVQcm9qZWN0KGUpKTtcbiAgICBsaUVsZW1lbnQuYXBwZW5kQ2hpbGQodG1wRWxlbWVudCk7XG4gICAgbGlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBsaUVsZW1lbnQuc2V0QXR0cmlidXRlKCdwcm9qZWN0LWlkJywgcHJvamVjdC5nZXRJZCgpKTtcblxuICAgIHByb2plY3RVTC5hcHBlbmRDaGlsZChsaUVsZW1lbnQpO1xuICB9O1xuICBjb25zdCBkaXNwbGF5VG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgbGV0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGNoZWNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG4gICAgbGV0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBsZXQgaWNvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpb24taWNvbicpO1xuXG4gICAgd3JhcHBlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICAgIGNoZWNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgIGNoZWNrRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gQ29udHJvbGxlci5jaGVja1RvZG8oZSkpXG4gICAgaWYgKHRvZG8uZ2V0RG9uZSgpKVxuICAgICAgY2hlY2tFbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsICdjaGVja21hcmstY2lyY2xlJyk7XG4gICAgZWxzZVxuICAgICAgY2hlY2tFbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsICdlbGxpcHNlLW91dGxpbmUnKTtcbiAgICB0aXRsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0b2RvLmdldFRpdGxlKCk7XG4gICAgdGl0bGVFbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcbiAgICB0aXRsZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4gQ29udHJvbGxlci5yZW5hbWVUb2RvKGUpKTtcbiAgICB3cmFwcGVyRWxlbWVudC5hcHBlbmQoY2hlY2tFbGVtZW50LCB0aXRsZUVsZW1lbnQpO1xuICAgIGljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10b2RvJyk7XG4gICAgaWNvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RyYXNoJyk7XG4gICAgaWNvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IENvbnRyb2xsZXIucmVtb3ZlVG9kbyhlKSk7XG4gICAgdG9kb0VsZW1lbnQuYXBwZW5kKHdyYXBwZXJFbGVtZW50LCBpY29uRWxlbWVudCk7XG4gICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgIHRvZG9FbGVtZW50LnNldEF0dHJpYnV0ZSgndG9kby1pZCcsIHRvZG8uZ2V0SWQoKSk7XG5cbiAgICBjb250ZW50RElWLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcbiAgfTtcbiAgY29uc3QgZGlzcGxheU5ld1Byb2plY3QgPSAoKSA9PiB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBDb250cm9sbGVyLmNyZWF0ZVByb2plY3QoKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdCcpLnBhcmVudEVsZW1lbnQpO1xuICAgIGRpc3BsYXlQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIENvbnRyb2xsZXIuc2VsZWN0UHJvamVjdChuZXdQcm9qZWN0LmdldElkKCkpO1xuICAgIGRpc3BsYXlBZGRQcm9qZWN0QnV0dG9uKCk7XG4gIH07XG4gIGNvbnN0IGRpc3BsYXlOZXdUb2RvID0gKCkgPT4ge1xuICAgIGxldCBuZXdUb2RvID0gQ29udHJvbGxlci5jcmVhdGVUb2RvKCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG9kbycpKTtcbiAgICBkaXNwbGF5VG9kbyhuZXdUb2RvKTtcbiAgICBkaXNwbGF5QWRkVG9kb0J1dHRvbigpO1xuICB9O1xuICByZXR1cm4geyBkaXNwbGF5UHJvamVjdExpc3QsIGRpc3BsYXlUb2RvTGlzdCB9O1xufSkoKTtcblxuY29uc3QgQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGxldCBwcm9qZWN0TGlzdCA9IFtQcm9qZWN0KDAsICcjRGVmYXVsdCcsIFtUb0RvKDAsICdUaGlzIGlzIGEgZGVmYXVsdCBpdGVtJywgZmFsc2UpXSldO1xuICBsZXQgY3VycmVudFByb2plY3RJbmRleCA9IDA7XG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBQcm9qZWN0KGdldE5ld1Byb2plY3RJZCgpLCAnTmV3IFByb2plY3QnLCBbXSk7XG4gICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgfTtcbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChldmVudCkgPT4ge1xuICAgIGxldCBsaUVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgcHJvamVjdElkID0gbGlFbGVtZW50LmF0dHJpYnV0ZXNbJ3Byb2plY3QtaWQnXS52YWx1ZTtcbiAgICBsZXQgcHJvamVjdEluZGV4ID0gZ2V0UHJvamVjdEluZGV4KHByb2plY3RJZCk7XG5cbiAgICBpZiAocHJvamVjdEluZGV4ID4gLTEgJiYgcHJvamVjdEluZGV4IDwgcHJvamVjdExpc3QubGVuZ3RoKSB7XG4gICAgICBwcm9qZWN0TGlzdC5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICAgIGlmIChsaUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSBzZWxlY3RQcm9qZWN0KDApO1xuICAgICAgbGlFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobGlFbGVtZW50KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNlbGVjdFByb2plY3QgPSAocHJvamVjdElkKSA9PiB7XG4gICAgbGV0IGxpUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0W3Byb2plY3QtaWQ9XCIke3Byb2plY3RJZH1cIl1gKTtcblxuICAgIGlmIChsaVByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSByZXR1cm47XG5cbiAgICAvLyB1bnNlbGVjdCB0aGUgY3VycmVudCBzZWxlY3RlZCBwcm9qZWN0XG4gICAgbGV0IHNlbGVjdGVkUHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0c1tpXS5maXJzdEVsZW1lbnRDaGlsZC5jb250ZW50RWRpdGFibGUgPSAnZmFsc2UnO1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIH1cblxuICAgIC8vIHNlbGVjdCB0aGUgY29ycmVjdCBwcm9qZWN0XG4gICAgbGV0IHByb2plY3RJbmRleCA9IGdldFByb2plY3RJbmRleChwcm9qZWN0SWQpO1xuICAgIGlmIChwcm9qZWN0SW5kZXggPiAtMSAmJiBwcm9qZWN0SW5kZXggPCBwcm9qZWN0TGlzdC5sZW5ndGgpIHtcbiAgICAgIC8vIGJsb2NrcyB0aGUgZWRpdGlvbiBvZiB0aGUgZGVmYXVsdCBwcm9qZWN0IG5hbWVcbiAgICAgIGlmIChwcm9qZWN0SWQgPiAwKSBsaVByb2plY3QuZmlyc3RFbGVtZW50Q2hpbGQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xuICAgICAgbGlQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICBEaXNwbGF5LmRpc3BsYXlUb2RvTGlzdChwcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLmdldFRvZG9zKCkpO1xuICAgICAgY3VycmVudFByb2plY3RJbmRleCA9IHByb2plY3RJbmRleDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAoKSA9PiB7XG4gICAgbGV0IHRvZG8gPSBUb0RvKGdldE5ld1RvZG9JZChjdXJyZW50UHJvamVjdEluZGV4KSwgJ05ldyB0YXNrJywgZmFsc2UpO1xuICAgIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLmFkZFRvZG8odG9kbyk7XG4gICAgcmV0dXJuIHRvZG87XG4gIH07XG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgZGl2RWxlbWVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIGxldCB0b2RvSWQgPSBkaXZFbGVtZW50LmF0dHJpYnV0ZXNbJ3RvZG8taWQnXS52YWx1ZTtcbiAgICBsZXQgdG9kb0luZGV4ID0gZ2V0VG9kb0luZGV4KGN1cnJlbnRQcm9qZWN0SW5kZXgsIHRvZG9JZCk7XG4gICAgbGV0IHRvZG9zID0gcHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0uZ2V0VG9kb3MoKTtcblxuICAgIGlmICh0b2RvSW5kZXggPiAtMSAmJiB0b2RvSW5kZXggPCB0b2Rvcy5sZW5ndGgpIHtcbiAgICAgIHRvZG9zLnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICAgICAgZGl2RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGRpdkVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0TmV3UHJvamVjdElkID0gKCkgPT4ge1xuICAgIGxldCBtYXhJZCA9IDA7XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGlmIChwcm9qZWN0LmdldElkKCkgPiBtYXhJZCkgbWF4SWQgPSBwcm9qZWN0LmdldElkKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1heElkICsgMTtcbiAgfTtcbiAgY29uc3QgZ2V0TmV3VG9kb0lkID0gKHByb2plY3RJZCkgPT4ge1xuICAgIGxldCBtYXhJZCA9IDA7XG4gICAgaWYgKHByb2plY3RJZCA8IDAgfHwgcHJvamVjdElkID4gcHJvamVjdExpc3QubGVuZ3RoKSByZXR1cm4gLTE7XG4gICAgcHJvamVjdExpc3RbcHJvamVjdElkXS5nZXRUb2RvcygpLmZvckVhY2godG9kbyA9PiB7XG4gICAgICBpZiAodG9kby5nZXRJZCgpID4gbWF4SWQpIG1heElkID0gdG9kby5nZXRJZCgpO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXhJZCArIDE7XG4gIH07XG4gIGNvbnN0IGdldFByb2plY3RJbmRleCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdExpc3QuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldElkKCkgPT0gcHJvamVjdElkKTtcbiAgfTtcbiAgY29uc3QgZ2V0VG9kb0luZGV4ID0gKHByb2plY3RJbmRleCwgdG9kb0lkKSA9PiB7XG4gICAgaWYgKHByb2plY3RJbmRleCA8IDAgfHwgcHJvamVjdEluZGV4ID4gcHJvamVjdExpc3QubGVuZ3RoKSByZXR1cm4gLTE7XG4gICAgcmV0dXJuIHByb2plY3RMaXN0W3Byb2plY3RJbmRleF0uZ2V0VG9kb3MoKS5maW5kSW5kZXgoKHRvZG8pID0+IHRvZG8uZ2V0SWQoKSA9PSB0b2RvSWQpO1xuICB9XG4gIGNvbnN0IHJlbmFtZVByb2plY3QgPSAoZXZlbnQsIHByb2plY3RJZCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGluZGV4ID0gZ2V0UHJvamVjdEluZGV4KHByb2plY3RJZCk7XG4gICAgaWYgKGluZGV4ID4gLTEgJiYgaW5kZXggPCBwcm9qZWN0TGlzdC5sZW5ndGgpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuaW5uZXJIVE1MLnJlcGxhY2VBbGwoJyZuYnNwOycsICcnKSA9PSAnJylcbiAgICAgICAgZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID0gcHJvamVjdExpc3RbaW5kZXhdLmdldE5hbWUoKTtcbiAgICAgIGVsc2VcbiAgICAgICAgcHJvamVjdExpc3RbaW5kZXhdLnNldE5hbWUoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbmFtZVRvZG8gPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgdGl0bGVFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGxldCBkaXZFbGVtZW50ID0gdGl0bGVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgdG9kb0lkID0gZGl2RWxlbWVudC5hdHRyaWJ1dGVzWyd0b2RvLWlkJ10udmFsdWU7XG4gICAgbGV0IHRvZG9JbmRleCA9IGdldFRvZG9JbmRleChjdXJyZW50UHJvamVjdEluZGV4LCB0b2RvSWQpO1xuICAgIGxldCB0b2RvcyA9IHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLmdldFRvZG9zKCk7XG5cbiAgICBpZiAodG9kb0luZGV4ID4gLTEgJiYgdG9kb0luZGV4IDwgdG9kb3MubGVuZ3RoKSB7XG4gICAgICBsZXQgdG9kbyA9IHRvZG9zW3RvZG9JbmRleF07XG4gICAgICBpZiAodGl0bGVFbGVtZW50LmlubmVySFRNTC5yZXBsYWNlQWxsKCcmbmJzcDsnLCAnJykgPT0gJycpXG4gICAgICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdG9kby5zZXRUaXRsZSh0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY2hlY2tUb2RvID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IGNoZWNrRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBsZXQgZGl2RWxlbWVudCA9IGNoZWNrRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IHRvZG9JZCA9IGRpdkVsZW1lbnQuYXR0cmlidXRlc1sndG9kby1pZCddLnZhbHVlO1xuICAgIGxldCB0b2RvSW5kZXggPSBnZXRUb2RvSW5kZXgoY3VycmVudFByb2plY3RJbmRleCwgdG9kb0lkKTtcbiAgICBsZXQgdG9kb3MgPSBwcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdEluZGV4XS5nZXRUb2RvcygpO1xuXG4gICAgaWYgKHRvZG9JbmRleCA+IC0xICYmIHRvZG9JbmRleCA8IHRvZG9zLmxlbmd0aCkge1xuICAgICAgbGV0IHRvZG8gPSB0b2Rvc1t0b2RvSW5kZXhdO1xuICAgICAgdG9kby5zZXREb25lKCF0b2RvLmdldERvbmUoKSk7XG4gICAgICBpZiAodG9kby5nZXREb25lKCkpXG4gICAgICAgIGNoZWNrRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2hlY2ttYXJrLWNpcmNsZScpO1xuICAgICAgZWxzZVxuICAgICAgICBjaGVja0VsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VsbGlwc2Utb3V0bGluZScpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RMaXN0O1xuICB9O1xuICByZXR1cm4geyBjcmVhdGVQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBzZWxlY3RQcm9qZWN0LCBjcmVhdGVUb2RvLCByZW1vdmVUb2RvLCByZW5hbWVQcm9qZWN0LCByZW5hbWVUb2RvLCBjaGVja1RvZG8sIGdldFByb2plY3RMaXN0IH07XG59KSgpO1xuXG5EaXNwbGF5LmRpc3BsYXlQcm9qZWN0TGlzdChDb250cm9sbGVyLmdldFByb2plY3RMaXN0KCkpO1xuQ29udHJvbGxlci5zZWxlY3RQcm9qZWN0KDApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==