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
  let projectsJSON = JSON;
  let projectList = [];
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
      if (projectList[projectIndex].getTodos().length > 0) {
        Display.displayTodoList(projectList[projectIndex].getTodos());
      }
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
  const parseProjectsJSON = (json) => {
    projectsJSON = json;

    projectsJSON.forEach(project => {
      let todoList = [];
      if (project.id >= 0 && project.name != '' && getProjectIndex(project.id) == -1) {
        project.todos.forEach(todo => {
          if (todo.id >= 0 && todo.name != '' && todoList.findIndex((todoSearch) => todoSearch.getId() == todo.id) == -1) {
            todoList.push((0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.ToDo)(todo.id, todo.title, todo.done));
          }
        });
        projectList.push((0,_project_js__WEBPACK_IMPORTED_MODULE_1__.Project)(project.id, project.name, todoList));
      }
    });
  };
  return { createProject, removeProject, selectProject, createTodo, removeTodo, renameProject, renameTodo, checkTodo, getProjectList, parseProjectsJSON };
})();

// CHECK IF THERE IS NO KNOWN DATA TO CREATE THE DEFAULT ONE
if (localStorage.length == 0 || !localStorage.getItem('projects')) {
  localStorage.setItem("projects", '[{"id": "0","name": "#Default", "todos": [{"id": "0", "title": "This is a default item", "done": false}]}]')
}

// RECOVERY OF STORED DATA
Controller.parseProjectsJSON(JSON.parse(localStorage.getItem('projects')));

Display.displayProjectList(Controller.getProjectList());
Controller.selectProject(0);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsSUFBSSxXQUFXLEtBQUs7QUFDckQsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLElBQUksWUFBWSxPQUFPLFdBQVcsS0FBSztBQUN4RSxXQUFXO0FBQ1g7Ozs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2tCO0FBQ047O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvREFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxVQUFVOztBQUU3RTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDZCQUE2QjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4Q0FBSTtBQUM5QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUIsb0RBQU87QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esc0NBQXNDLHlDQUF5Qyw0REFBNEQsRUFBRTtBQUM3STs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBQcm9qZWN0ID0gKGlkLCBuYW1lLCB0b2RvcykgPT4ge1xuICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB0b2RvcztcbiAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiBuYW1lID0gbmV3TmFtZTtcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB0b2Rvcy5wdXNoKHRvZG8pO1xuICBjb25zdCB0b1N0cmluZyA9ICgpID0+IGBpZCA6ICR7aWR9IHwgbmFtZSA6ICR7bmFtZX1gO1xuICByZXR1cm4geyBnZXRJZCwgZ2V0TmFtZSwgZ2V0VG9kb3MsIHNldE5hbWUsIGFkZFRvZG8sIHRvU3RyaW5nIH07XG59XG5cbmV4cG9ydCB7IFByb2plY3QgfTsiLCJjb25zdCBUb0RvID0gKGlkLCB0aXRsZSwgZG9uZSkgPT4ge1xuICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBnZXREb25lID0gKCkgPT4gZG9uZTtcbiAgY29uc3Qgc2V0RG9uZSA9IChpc0RvbmUpID0+IGRvbmUgPSBpc0RvbmU7XG4gIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB0aXRsZSA9IG5ld1RpdGxlO1xuICBjb25zdCB0b1N0cmluZyA9ICgpID0+IGBpZCA6ICR7aWR9IHwgdGl0bGUgOiAke3RpdGxlfSB8IGRvbmUgOiAke2RvbmV9YDtcbiAgcmV0dXJuIHsgZ2V0SWQsIGdldFRpdGxlLCBnZXREb25lLCBzZXREb25lLCBzZXRUaXRsZSwgdG9TdHJpbmcgfTtcbn1cblxuZXhwb3J0IHsgVG9EbyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7IFRvRG8gfSBmcm9tICcuL3RvZG8uanMnO1xuXG5jb25zdCBEaXNwbGF5ID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG4gIGNvbnN0IGNvbnRlbnRESVYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBkaXNwbGF5QWRkUHJvamVjdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBsZXQgbGlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBpY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG5cbiAgICBpY29uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYWRkLW91dGxpbmUnKTtcbiAgICBidXR0b25FbGVtZW50LmlkID0gJ2FkZC1wcm9qZWN0JztcbiAgICBidXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheU5ld1Byb2plY3QoKSk7XG4gICAgYnV0dG9uRWxlbWVudC5hcHBlbmRDaGlsZChpY29uRWxlbWVudCk7XG4gICAgbGlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBsaUVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbWVudCk7XG5cbiAgICBwcm9qZWN0VUwuYXBwZW5kQ2hpbGQobGlFbGVtZW50KTtcbiAgfTtcbiAgY29uc3QgZGlzcGxheUFkZFRvZG9CdXR0b24gPSAoKSA9PiB7XG4gICAgbGV0IGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgaWNvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpb24taWNvbicpO1xuXG4gICAgaWNvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2FkZC1jaXJjbGUnKTtcbiAgICBidXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheU5ld1RvZG8oKSk7XG4gICAgYnV0dG9uRWxlbWVudC5hcHBlbmRDaGlsZChpY29uRWxlbWVudCk7XG4gICAgYnV0dG9uRWxlbWVudC5pZCA9ICdhZGQtdG9kbyc7XG5cbiAgICBjb250ZW50RElWLmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpO1xuICB9O1xuICBjb25zdCBkaXNwbGF5UHJvamVjdExpc3QgPSAocHJvamVjdExpc3QpID0+IHtcbiAgICBjbGVhclByb2plY3RMaXN0KCk7XG5cbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBkaXNwbGF5QWRkUHJvamVjdEJ1dHRvbigpO1xuICB9O1xuICBjb25zdCBkaXNwbGF5VG9kb0xpc3QgPSAodG9kb0xpc3QpID0+IHtcbiAgICBjbGVhclRvZG9MaXN0KCk7XG5cbiAgICB0b2RvTGlzdC5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgZGlzcGxheVRvZG8odG9kbyk7XG4gICAgfSk7XG5cbiAgICBkaXNwbGF5QWRkVG9kb0J1dHRvbigpO1xuICB9O1xuICBjb25zdCBjbGVhclByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIHdoaWxlIChwcm9qZWN0VUwuZmlyc3RDaGlsZCkge1xuICAgICAgcHJvamVjdFVMLnJlbW92ZUNoaWxkKHByb2plY3RVTC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY2xlYXJUb2RvTGlzdCA9ICgpID0+IHtcbiAgICB3aGlsZSAoY29udGVudERJVi5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50RElWLnJlbW92ZUNoaWxkKGNvbnRlbnRESVYubGFzdENoaWxkKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBsZXQgbGlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgdG1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PSAnI0RlZmF1bHQnKSB7XG4gICAgICBsaUVsZW1lbnQuaWQgPSAnZGVmYXVsdC1wcm9qZWN0JztcbiAgICAgIHRtcEVsZW1lbnQudGV4dENvbnRlbnQgPSAnRGVmYXVsdCc7XG4gICAgfSBlbHNlIHRtcEVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcblxuICAgIHRtcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IENvbnRyb2xsZXIuc2VsZWN0UHJvamVjdChwcm9qZWN0LmdldElkKCkpKTtcbiAgICB0bXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBlID0+IENvbnRyb2xsZXIucmVuYW1lUHJvamVjdChlLCBwcm9qZWN0LmdldElkKCkpKTtcbiAgICBsaUVsZW1lbnQuYXBwZW5kQ2hpbGQodG1wRWxlbWVudCk7XG4gICAgdG1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG4gICAgdG1wRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdCcpO1xuICAgIHRtcEVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RyYXNoJyk7XG4gICAgdG1wRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gQ29udHJvbGxlci5yZW1vdmVQcm9qZWN0KGUpKTtcbiAgICBsaUVsZW1lbnQuYXBwZW5kQ2hpbGQodG1wRWxlbWVudCk7XG4gICAgbGlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBsaUVsZW1lbnQuc2V0QXR0cmlidXRlKCdwcm9qZWN0LWlkJywgcHJvamVjdC5nZXRJZCgpKTtcblxuICAgIHByb2plY3RVTC5hcHBlbmRDaGlsZChsaUVsZW1lbnQpO1xuICB9O1xuICBjb25zdCBkaXNwbGF5VG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgbGV0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGNoZWNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG4gICAgbGV0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBsZXQgaWNvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpb24taWNvbicpO1xuXG4gICAgd3JhcHBlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICAgIGNoZWNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgIGNoZWNrRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gQ29udHJvbGxlci5jaGVja1RvZG8oZSkpXG4gICAgaWYgKHRvZG8uZ2V0RG9uZSgpKVxuICAgICAgY2hlY2tFbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsICdjaGVja21hcmstY2lyY2xlJyk7XG4gICAgZWxzZVxuICAgICAgY2hlY2tFbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsICdlbGxpcHNlLW91dGxpbmUnKTtcbiAgICB0aXRsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0b2RvLmdldFRpdGxlKCk7XG4gICAgdGl0bGVFbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcbiAgICB0aXRsZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4gQ29udHJvbGxlci5yZW5hbWVUb2RvKGUpKTtcbiAgICB3cmFwcGVyRWxlbWVudC5hcHBlbmQoY2hlY2tFbGVtZW50LCB0aXRsZUVsZW1lbnQpO1xuICAgIGljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10b2RvJyk7XG4gICAgaWNvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RyYXNoJyk7XG4gICAgaWNvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IENvbnRyb2xsZXIucmVtb3ZlVG9kbyhlKSk7XG4gICAgdG9kb0VsZW1lbnQuYXBwZW5kKHdyYXBwZXJFbGVtZW50LCBpY29uRWxlbWVudCk7XG4gICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgIHRvZG9FbGVtZW50LnNldEF0dHJpYnV0ZSgndG9kby1pZCcsIHRvZG8uZ2V0SWQoKSk7XG5cbiAgICBjb250ZW50RElWLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcbiAgfTtcbiAgY29uc3QgZGlzcGxheU5ld1Byb2plY3QgPSAoKSA9PiB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBDb250cm9sbGVyLmNyZWF0ZVByb2plY3QoKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdCcpLnBhcmVudEVsZW1lbnQpO1xuICAgIGRpc3BsYXlQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIENvbnRyb2xsZXIuc2VsZWN0UHJvamVjdChuZXdQcm9qZWN0LmdldElkKCkpO1xuICAgIGRpc3BsYXlBZGRQcm9qZWN0QnV0dG9uKCk7XG4gIH07XG4gIGNvbnN0IGRpc3BsYXlOZXdUb2RvID0gKCkgPT4ge1xuICAgIGxldCBuZXdUb2RvID0gQ29udHJvbGxlci5jcmVhdGVUb2RvKCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG9kbycpKTtcbiAgICBkaXNwbGF5VG9kbyhuZXdUb2RvKTtcbiAgICBkaXNwbGF5QWRkVG9kb0J1dHRvbigpO1xuICB9O1xuICByZXR1cm4geyBkaXNwbGF5UHJvamVjdExpc3QsIGRpc3BsYXlUb2RvTGlzdCB9O1xufSkoKTtcblxuY29uc3QgQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGxldCBwcm9qZWN0c0pTT04gPSBKU09OO1xuICBsZXQgcHJvamVjdExpc3QgPSBbXTtcbiAgbGV0IGN1cnJlbnRQcm9qZWN0SW5kZXggPSAwO1xuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gUHJvamVjdChnZXROZXdQcm9qZWN0SWQoKSwgJ05ldyBQcm9qZWN0JywgW10pO1xuICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gIH07XG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgbGlFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IHByb2plY3RJZCA9IGxpRWxlbWVudC5hdHRyaWJ1dGVzWydwcm9qZWN0LWlkJ10udmFsdWU7XG4gICAgbGV0IHByb2plY3RJbmRleCA9IGdldFByb2plY3RJbmRleChwcm9qZWN0SWQpO1xuXG4gICAgaWYgKHByb2plY3RJbmRleCA+IC0xICYmIHByb2plY3RJbmRleCA8IHByb2plY3RMaXN0Lmxlbmd0aCkge1xuICAgICAgcHJvamVjdExpc3Quc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgICBpZiAobGlFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkgc2VsZWN0UHJvamVjdCgwKTtcbiAgICAgIGxpRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGxpRWxlbWVudCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gKHByb2plY3RJZCkgPT4ge1xuICAgIGxldCBsaVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdFtwcm9qZWN0LWlkPVwiJHtwcm9qZWN0SWR9XCJdYCk7XG5cbiAgICBpZiAobGlQcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkgcmV0dXJuO1xuXG4gICAgLy8gdW5zZWxlY3QgdGhlIGN1cnJlbnQgc2VsZWN0ZWQgcHJvamVjdFxuICAgIGxldCBzZWxlY3RlZFByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0ZWQnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlbGVjdGVkUHJvamVjdHNbaV0uZmlyc3RFbGVtZW50Q2hpbGQuY29udGVudEVkaXRhYmxlID0gJ2ZhbHNlJztcbiAgICAgIHNlbGVjdGVkUHJvamVjdHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICAvLyBzZWxlY3QgdGhlIGNvcnJlY3QgcHJvamVjdFxuICAgIGxldCBwcm9qZWN0SW5kZXggPSBnZXRQcm9qZWN0SW5kZXgocHJvamVjdElkKTtcbiAgICBpZiAocHJvamVjdEluZGV4ID4gLTEgJiYgcHJvamVjdEluZGV4IDwgcHJvamVjdExpc3QubGVuZ3RoKSB7XG4gICAgICAvLyBibG9ja3MgdGhlIGVkaXRpb24gb2YgdGhlIGRlZmF1bHQgcHJvamVjdCBuYW1lXG4gICAgICBpZiAocHJvamVjdElkID4gMCkgbGlQcm9qZWN0LmZpcnN0RWxlbWVudENoaWxkLmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcbiAgICAgIGxpUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgaWYgKHByb2plY3RMaXN0W3Byb2plY3RJbmRleF0uZ2V0VG9kb3MoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIERpc3BsYXkuZGlzcGxheVRvZG9MaXN0KHByb2plY3RMaXN0W3Byb2plY3RJbmRleF0uZ2V0VG9kb3MoKSk7XG4gICAgICB9XG4gICAgICBjdXJyZW50UHJvamVjdEluZGV4ID0gcHJvamVjdEluZGV4O1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY3JlYXRlVG9kbyA9ICgpID0+IHtcbiAgICBsZXQgdG9kbyA9IFRvRG8oZ2V0TmV3VG9kb0lkKGN1cnJlbnRQcm9qZWN0SW5kZXgpLCAnTmV3IHRhc2snLCBmYWxzZSk7XG4gICAgcHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0uYWRkVG9kbyh0b2RvKTtcbiAgICByZXR1cm4gdG9kbztcbiAgfTtcbiAgY29uc3QgcmVtb3ZlVG9kbyA9IChldmVudCkgPT4ge1xuICAgIGxldCBkaXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IHRvZG9JZCA9IGRpdkVsZW1lbnQuYXR0cmlidXRlc1sndG9kby1pZCddLnZhbHVlO1xuICAgIGxldCB0b2RvSW5kZXggPSBnZXRUb2RvSW5kZXgoY3VycmVudFByb2plY3RJbmRleCwgdG9kb0lkKTtcbiAgICBsZXQgdG9kb3MgPSBwcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdEluZGV4XS5nZXRUb2RvcygpO1xuXG4gICAgaWYgKHRvZG9JbmRleCA+IC0xICYmIHRvZG9JbmRleCA8IHRvZG9zLmxlbmd0aCkge1xuICAgICAgdG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgICBkaXZFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZGl2RWxlbWVudCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXROZXdQcm9qZWN0SWQgPSAoKSA9PiB7XG4gICAgbGV0IG1heElkID0gMDtcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgaWYgKHByb2plY3QuZ2V0SWQoKSA+IG1heElkKSBtYXhJZCA9IHByb2plY3QuZ2V0SWQoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWF4SWQgKyAxO1xuICB9O1xuICBjb25zdCBnZXROZXdUb2RvSWQgPSAocHJvamVjdElkKSA9PiB7XG4gICAgbGV0IG1heElkID0gMDtcbiAgICBpZiAocHJvamVjdElkIDwgMCB8fCBwcm9qZWN0SWQgPiBwcm9qZWN0TGlzdC5sZW5ndGgpIHJldHVybiAtMTtcbiAgICBwcm9qZWN0TGlzdFtwcm9qZWN0SWRdLmdldFRvZG9zKCkuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICh0b2RvLmdldElkKCkgPiBtYXhJZCkgbWF4SWQgPSB0b2RvLmdldElkKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1heElkICsgMTtcbiAgfTtcbiAgY29uc3QgZ2V0UHJvamVjdEluZGV4ID0gKHByb2plY3RJZCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0TGlzdC5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QuZ2V0SWQoKSA9PSBwcm9qZWN0SWQpO1xuICB9O1xuICBjb25zdCBnZXRUb2RvSW5kZXggPSAocHJvamVjdEluZGV4LCB0b2RvSWQpID0+IHtcbiAgICBpZiAocHJvamVjdEluZGV4IDwgMCB8fCBwcm9qZWN0SW5kZXggPiBwcm9qZWN0TGlzdC5sZW5ndGgpIHJldHVybiAtMTtcbiAgICByZXR1cm4gcHJvamVjdExpc3RbcHJvamVjdEluZGV4XS5nZXRUb2RvcygpLmZpbmRJbmRleCgodG9kbykgPT4gdG9kby5nZXRJZCgpID09IHRvZG9JZCk7XG4gIH1cbiAgY29uc3QgcmVuYW1lUHJvamVjdCA9IChldmVudCwgcHJvamVjdElkKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgaW5kZXggPSBnZXRQcm9qZWN0SW5kZXgocHJvamVjdElkKTtcbiAgICBpZiAoaW5kZXggPiAtMSAmJiBpbmRleCA8IHByb2plY3RMaXN0Lmxlbmd0aCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5pbm5lckhUTUwucmVwbGFjZUFsbCgnJm5ic3A7JywgJycpID09ICcnKVxuICAgICAgICBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdFtpbmRleF0uZ2V0TmFtZSgpO1xuICAgICAgZWxzZVxuICAgICAgICBwcm9qZWN0TGlzdFtpbmRleF0uc2V0TmFtZShldmVudC50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVuYW1lVG9kbyA9IChldmVudCkgPT4ge1xuICAgIGxldCB0aXRsZUVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgbGV0IGRpdkVsZW1lbnQgPSB0aXRsZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGxldCB0b2RvSWQgPSBkaXZFbGVtZW50LmF0dHJpYnV0ZXNbJ3RvZG8taWQnXS52YWx1ZTtcbiAgICBsZXQgdG9kb0luZGV4ID0gZ2V0VG9kb0luZGV4KGN1cnJlbnRQcm9qZWN0SW5kZXgsIHRvZG9JZCk7XG4gICAgbGV0IHRvZG9zID0gcHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0uZ2V0VG9kb3MoKTtcblxuICAgIGlmICh0b2RvSW5kZXggPiAtMSAmJiB0b2RvSW5kZXggPCB0b2Rvcy5sZW5ndGgpIHtcbiAgICAgIGxldCB0b2RvID0gdG9kb3NbdG9kb0luZGV4XTtcbiAgICAgIGlmICh0aXRsZUVsZW1lbnQuaW5uZXJIVE1MLnJlcGxhY2VBbGwoJyZuYnNwOycsICcnKSA9PSAnJylcbiAgICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZSgpO1xuICAgICAgZWxzZVxuICAgICAgICB0b2RvLnNldFRpdGxlKHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBjaGVja1RvZG8gPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgY2hlY2tFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGxldCBkaXZFbGVtZW50ID0gY2hlY2tFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgdG9kb0lkID0gZGl2RWxlbWVudC5hdHRyaWJ1dGVzWyd0b2RvLWlkJ10udmFsdWU7XG4gICAgbGV0IHRvZG9JbmRleCA9IGdldFRvZG9JbmRleChjdXJyZW50UHJvamVjdEluZGV4LCB0b2RvSWQpO1xuICAgIGxldCB0b2RvcyA9IHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLmdldFRvZG9zKCk7XG5cbiAgICBpZiAodG9kb0luZGV4ID4gLTEgJiYgdG9kb0luZGV4IDwgdG9kb3MubGVuZ3RoKSB7XG4gICAgICBsZXQgdG9kbyA9IHRvZG9zW3RvZG9JbmRleF07XG4gICAgICB0b2RvLnNldERvbmUoIXRvZG8uZ2V0RG9uZSgpKTtcbiAgICAgIGlmICh0b2RvLmdldERvbmUoKSlcbiAgICAgICAgY2hlY2tFbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsICdjaGVja21hcmstY2lyY2xlJyk7XG4gICAgICBlbHNlXG4gICAgICAgIGNoZWNrRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZWxsaXBzZS1vdXRsaW5lJyk7XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdExpc3Q7XG4gIH07XG4gIGNvbnN0IHBhcnNlUHJvamVjdHNKU09OID0gKGpzb24pID0+IHtcbiAgICBwcm9qZWN0c0pTT04gPSBqc29uO1xuXG4gICAgcHJvamVjdHNKU09OLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBsZXQgdG9kb0xpc3QgPSBbXTtcbiAgICAgIGlmIChwcm9qZWN0LmlkID49IDAgJiYgcHJvamVjdC5uYW1lICE9ICcnICYmIGdldFByb2plY3RJbmRleChwcm9qZWN0LmlkKSA9PSAtMSkge1xuICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgaWYgKHRvZG8uaWQgPj0gMCAmJiB0b2RvLm5hbWUgIT0gJycgJiYgdG9kb0xpc3QuZmluZEluZGV4KCh0b2RvU2VhcmNoKSA9PiB0b2RvU2VhcmNoLmdldElkKCkgPT0gdG9kby5pZCkgPT0gLTEpIHtcbiAgICAgICAgICAgIHRvZG9MaXN0LnB1c2goVG9Ebyh0b2RvLmlkLCB0b2RvLnRpdGxlLCB0b2RvLmRvbmUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKFByb2plY3QocHJvamVjdC5pZCwgcHJvamVjdC5uYW1lLCB0b2RvTGlzdCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICByZXR1cm4geyBjcmVhdGVQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBzZWxlY3RQcm9qZWN0LCBjcmVhdGVUb2RvLCByZW1vdmVUb2RvLCByZW5hbWVQcm9qZWN0LCByZW5hbWVUb2RvLCBjaGVja1RvZG8sIGdldFByb2plY3RMaXN0LCBwYXJzZVByb2plY3RzSlNPTiB9O1xufSkoKTtcblxuLy8gQ0hFQ0sgSUYgVEhFUkUgSVMgTk8gS05PV04gREFUQSBUTyBDUkVBVEUgVEhFIERFRkFVTFQgT05FXG5pZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA9PSAwIHx8ICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsICdbe1wiaWRcIjogXCIwXCIsXCJuYW1lXCI6IFwiI0RlZmF1bHRcIiwgXCJ0b2Rvc1wiOiBbe1wiaWRcIjogXCIwXCIsIFwidGl0bGVcIjogXCJUaGlzIGlzIGEgZGVmYXVsdCBpdGVtXCIsIFwiZG9uZVwiOiBmYWxzZX1dfV0nKVxufVxuXG4vLyBSRUNPVkVSWSBPRiBTVE9SRUQgREFUQVxuQ29udHJvbGxlci5wYXJzZVByb2plY3RzSlNPTihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSk7XG5cbkRpc3BsYXkuZGlzcGxheVByb2plY3RMaXN0KENvbnRyb2xsZXIuZ2V0UHJvamVjdExpc3QoKSk7XG5Db250cm9sbGVyLnNlbGVjdFByb2plY3QoMCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9