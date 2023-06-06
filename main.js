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
  const toJSON = () => {
    let json = JSON;

    json.id = id;
    json.name = name;
    json.todos = [];

    todos.forEach(todo => {
      json.todos.push(todo.toJSON());
    });

    return json;
  };
  return { getId, getName, getTodos, setName, addTodo, toString, toJSON };
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
  const toJSON = () => JSON.parse(`{"id":"${id}","title":"${title}","done":${done}}`);
  return { getId, getTitle, getDone, setDone, setTitle, toString, toJSON };
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

    if (todoList.length > 0) {
      todoList.forEach(todo => {
        displayTodo(todo);
      });
    }

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
    projectsJSON.push(newProject.toJSON());
    localStorage.setItem("projects", JSON.stringify(projectsJSON));
    return newProject;
  };
  const removeProject = (event) => {
    let liElement = event.target.parentElement;
    let projectId = liElement.attributes['project-id'].value;
    let projectIndex = getProjectIndex(projectId);

    if (projectIndex > -1 && projectIndex < projectList.length) {
      projectList.splice(projectIndex, 1);
      projectsJSON.splice(projectIndex, 1);
      localStorage.setItem("projects", JSON.stringify(projectsJSON));
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
    projectsJSON[currentProjectIndex] = projectList[currentProjectIndex].toJSON();
    localStorage.setItem("projects", JSON.stringify(projectsJSON));
    return todo;
  };
  const removeTodo = (event) => {
    let divElement = event.target.parentElement;
    let todoId = divElement.attributes['todo-id'].value;
    let todoIndex = getTodoIndex(currentProjectIndex, todoId);
    let todos = projectList[currentProjectIndex].getTodos();

    if (todoIndex > -1 && todoIndex < todos.length) {
      todos.splice(todoIndex, 1);
      projectsJSON[currentProjectIndex] = projectList[currentProjectIndex].toJSON();
      localStorage.setItem("projects", JSON.stringify(projectsJSON));
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
      else {
        projectList[index].setName(event.target.textContent);
        projectsJSON[index].name = event.target.textContent;
        localStorage.setItem("projects", JSON.stringify(projectsJSON));
      }
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
      else {
        todo.setTitle(titleElement.textContent);
        projectsJSON[currentProjectIndex] = projectList[currentProjectIndex].toJSON();
        localStorage.setItem("projects", JSON.stringify(projectsJSON));
      }
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
      projectsJSON[currentProjectIndex] = projectList[currentProjectIndex].toJSON();
      localStorage.setItem("projects", JSON.stringify(projectsJSON));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsSUFBSSxXQUFXLEtBQUs7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsSUFBSSxZQUFZLE9BQU8sV0FBVyxLQUFLO0FBQ3hFLG9DQUFvQyxRQUFRLEdBQUcsYUFBYSxNQUFNLFdBQVcsTUFBTTtBQUNuRixXQUFXO0FBQ1g7Ozs7Ozs7O1VDVEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2tCO0FBQ047O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxVQUFVOztBQUU3RTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDZCQUE2QjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOENBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhDQUFJO0FBQzlCO0FBQ0EsU0FBUztBQUNULHlCQUF5QixvREFBTztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxzQ0FBc0MseUNBQXlDLDREQUE0RCxFQUFFO0FBQzdJOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IFByb2plY3QgPSAoaWQsIG5hbWUsIHRvZG9zKSA9PiB7XG4gIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHRvZG9zO1xuICBjb25zdCBzZXROYW1lID0gKG5ld05hbWUpID0+IG5hbWUgPSBuZXdOYW1lO1xuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHRvZG9zLnB1c2godG9kbyk7XG4gIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4gYGlkIDogJHtpZH0gfCBuYW1lIDogJHtuYW1lfWA7XG4gIGNvbnN0IHRvSlNPTiA9ICgpID0+IHtcbiAgICBsZXQganNvbiA9IEpTT047XG5cbiAgICBqc29uLmlkID0gaWQ7XG4gICAganNvbi5uYW1lID0gbmFtZTtcbiAgICBqc29uLnRvZG9zID0gW107XG5cbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAganNvbi50b2Rvcy5wdXNoKHRvZG8udG9KU09OKCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH07XG4gIHJldHVybiB7IGdldElkLCBnZXROYW1lLCBnZXRUb2Rvcywgc2V0TmFtZSwgYWRkVG9kbywgdG9TdHJpbmcsIHRvSlNPTiB9O1xufVxuXG5leHBvcnQgeyBQcm9qZWN0IH07IiwiY29uc3QgVG9EbyA9IChpZCwgdGl0bGUsIGRvbmUpID0+IHtcbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZDtcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0RG9uZSA9ICgpID0+IGRvbmU7XG4gIGNvbnN0IHNldERvbmUgPSAoaXNEb25lKSA9PiBkb25lID0gaXNEb25lO1xuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4gdGl0bGUgPSBuZXdUaXRsZTtcbiAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiBgaWQgOiAke2lkfSB8IHRpdGxlIDogJHt0aXRsZX0gfCBkb25lIDogJHtkb25lfWA7XG4gIGNvbnN0IHRvSlNPTiA9ICgpID0+IEpTT04ucGFyc2UoYHtcImlkXCI6XCIke2lkfVwiLFwidGl0bGVcIjpcIiR7dGl0bGV9XCIsXCJkb25lXCI6JHtkb25lfX1gKTtcbiAgcmV0dXJuIHsgZ2V0SWQsIGdldFRpdGxlLCBnZXREb25lLCBzZXREb25lLCBzZXRUaXRsZSwgdG9TdHJpbmcsIHRvSlNPTiB9O1xufVxuXG5leHBvcnQgeyBUb0RvIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgVG9EbyB9IGZyb20gJy4vdG9kby5qcyc7XG5cbmNvbnN0IERpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcbiAgY29uc3QgY29udGVudERJViA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGRpc3BsYXlBZGRQcm9qZWN0QnV0dG9uID0gKCkgPT4ge1xuICAgIGxldCBsaUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGljb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW9uLWljb24nKTtcblxuICAgIGljb25FbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsICdhZGQtb3V0bGluZScpO1xuICAgIGJ1dHRvbkVsZW1lbnQuaWQgPSAnYWRkLXByb2plY3QnO1xuICAgIGJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwbGF5TmV3UHJvamVjdCgpKTtcbiAgICBidXR0b25FbGVtZW50LmFwcGVuZENoaWxkKGljb25FbGVtZW50KTtcbiAgICBsaUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIGxpRWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25FbGVtZW50KTtcblxuICAgIHByb2plY3RVTC5hcHBlbmRDaGlsZChsaUVsZW1lbnQpO1xuICB9O1xuICBjb25zdCBkaXNwbGF5QWRkVG9kb0J1dHRvbiA9ICgpID0+IHtcbiAgICBsZXQgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBpY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG5cbiAgICBpY29uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYWRkLWNpcmNsZScpO1xuICAgIGJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwbGF5TmV3VG9kbygpKTtcbiAgICBidXR0b25FbGVtZW50LmFwcGVuZENoaWxkKGljb25FbGVtZW50KTtcbiAgICBidXR0b25FbGVtZW50LmlkID0gJ2FkZC10b2RvJztcblxuICAgIGNvbnRlbnRESVYuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbWVudCk7XG4gIH07XG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0TGlzdCA9IChwcm9qZWN0TGlzdCkgPT4ge1xuICAgIGNsZWFyUHJvamVjdExpc3QoKTtcblxuICAgIHByb2plY3RMaXN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIGRpc3BsYXlBZGRQcm9qZWN0QnV0dG9uKCk7XG4gIH07XG4gIGNvbnN0IGRpc3BsYXlUb2RvTGlzdCA9ICh0b2RvTGlzdCkgPT4ge1xuICAgIGNsZWFyVG9kb0xpc3QoKTtcblxuICAgIGlmICh0b2RvTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICB0b2RvTGlzdC5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBkaXNwbGF5VG9kbyh0b2RvKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpc3BsYXlBZGRUb2RvQnV0dG9uKCk7XG4gIH07XG4gIGNvbnN0IGNsZWFyUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgd2hpbGUgKHByb2plY3RVTC5maXJzdENoaWxkKSB7XG4gICAgICBwcm9qZWN0VUwucmVtb3ZlQ2hpbGQocHJvamVjdFVMLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBjbGVhclRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIHdoaWxlIChjb250ZW50RElWLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnRESVYucmVtb3ZlQ2hpbGQoY29udGVudERJVi5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZGlzcGxheVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGxldCBsaUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCB0bXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpID09ICcjRGVmYXVsdCcpIHtcbiAgICAgIGxpRWxlbWVudC5pZCA9ICdkZWZhdWx0LXByb2plY3QnO1xuICAgICAgdG1wRWxlbWVudC50ZXh0Q29udGVudCA9ICdEZWZhdWx0JztcbiAgICB9IGVsc2UgdG1wRWxlbWVudC50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuXG4gICAgdG1wRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gQ29udHJvbGxlci5zZWxlY3RQcm9qZWN0KHByb2plY3QuZ2V0SWQoKSkpO1xuICAgIHRtcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4gQ29udHJvbGxlci5yZW5hbWVQcm9qZWN0KGUsIHByb2plY3QuZ2V0SWQoKSkpO1xuICAgIGxpRWxlbWVudC5hcHBlbmRDaGlsZCh0bXBFbGVtZW50KTtcbiAgICB0bXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW9uLWljb24nKTtcbiAgICB0bXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0Jyk7XG4gICAgdG1wRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndHJhc2gnKTtcbiAgICB0bXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBDb250cm9sbGVyLnJlbW92ZVByb2plY3QoZSkpO1xuICAgIGxpRWxlbWVudC5hcHBlbmRDaGlsZCh0bXBFbGVtZW50KTtcbiAgICBsaUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIGxpRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3Byb2plY3QtaWQnLCBwcm9qZWN0LmdldElkKCkpO1xuXG4gICAgcHJvamVjdFVMLmFwcGVuZENoaWxkKGxpRWxlbWVudCk7XG4gIH07XG4gIGNvbnN0IGRpc3BsYXlUb2RvID0gKHRvZG8pID0+IHtcbiAgICBsZXQgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgd3JhcHBlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgY2hlY2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW9uLWljb24nKTtcbiAgICBsZXQgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGxldCBpY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG5cbiAgICB3cmFwcGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG4gICAgY2hlY2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBDb250cm9sbGVyLmNoZWNrVG9kbyhlKSlcbiAgICBpZiAodG9kby5nZXREb25lKCkpXG4gICAgICBjaGVja0VsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NoZWNrbWFyay1jaXJjbGUnKTtcbiAgICBlbHNlXG4gICAgICBjaGVja0VsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VsbGlwc2Utb3V0bGluZScpO1xuICAgIHRpdGxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICB0aXRsZUVsZW1lbnQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xuICAgIHRpdGxlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZSA9PiBDb250cm9sbGVyLnJlbmFtZVRvZG8oZSkpO1xuICAgIHdyYXBwZXJFbGVtZW50LmFwcGVuZChjaGVja0VsZW1lbnQsIHRpdGxlRWxlbWVudCk7XG4gICAgaWNvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRvZG8nKTtcbiAgICBpY29uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndHJhc2gnKTtcbiAgICBpY29uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gQ29udHJvbGxlci5yZW1vdmVUb2RvKGUpKTtcbiAgICB0b2RvRWxlbWVudC5hcHBlbmQod3JhcHBlckVsZW1lbnQsIGljb25FbGVtZW50KTtcbiAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgdG9kb0VsZW1lbnQuc2V0QXR0cmlidXRlKCd0b2RvLWlkJywgdG9kby5nZXRJZCgpKTtcblxuICAgIGNvbnRlbnRESVYuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQpO1xuICB9O1xuICBjb25zdCBkaXNwbGF5TmV3UHJvamVjdCA9ICgpID0+IHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IENvbnRyb2xsZXIuY3JlYXRlUHJvamVjdCgpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJykucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0JykucGFyZW50RWxlbWVudCk7XG4gICAgZGlzcGxheVByb2plY3QobmV3UHJvamVjdCk7XG4gICAgQ29udHJvbGxlci5zZWxlY3RQcm9qZWN0KG5ld1Byb2plY3QuZ2V0SWQoKSk7XG4gICAgZGlzcGxheUFkZFByb2plY3RCdXR0b24oKTtcbiAgfTtcbiAgY29uc3QgZGlzcGxheU5ld1RvZG8gPSAoKSA9PiB7XG4gICAgbGV0IG5ld1RvZG8gPSBDb250cm9sbGVyLmNyZWF0ZVRvZG8oKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10b2RvJykpO1xuICAgIGRpc3BsYXlUb2RvKG5ld1RvZG8pO1xuICAgIGRpc3BsYXlBZGRUb2RvQnV0dG9uKCk7XG4gIH07XG4gIHJldHVybiB7IGRpc3BsYXlQcm9qZWN0TGlzdCwgZGlzcGxheVRvZG9MaXN0IH07XG59KSgpO1xuXG5jb25zdCBDb250cm9sbGVyID0gKCgpID0+IHtcbiAgbGV0IHByb2plY3RzSlNPTiA9IEpTT047XG4gIGxldCBwcm9qZWN0TGlzdCA9IFtdO1xuICBsZXQgY3VycmVudFByb2plY3RJbmRleCA9IDA7XG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBQcm9qZWN0KGdldE5ld1Byb2plY3RJZCgpLCAnTmV3IFByb2plY3QnLCBbXSk7XG4gICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICBwcm9qZWN0c0pTT04ucHVzaChuZXdQcm9qZWN0LnRvSlNPTigpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzSlNPTikpO1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xuICB9O1xuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IGxpRWxlbWVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIGxldCBwcm9qZWN0SWQgPSBsaUVsZW1lbnQuYXR0cmlidXRlc1sncHJvamVjdC1pZCddLnZhbHVlO1xuICAgIGxldCBwcm9qZWN0SW5kZXggPSBnZXRQcm9qZWN0SW5kZXgocHJvamVjdElkKTtcblxuICAgIGlmIChwcm9qZWN0SW5kZXggPiAtMSAmJiBwcm9qZWN0SW5kZXggPCBwcm9qZWN0TGlzdC5sZW5ndGgpIHtcbiAgICAgIHByb2plY3RMaXN0LnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgICAgcHJvamVjdHNKU09OLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0pTT04pKTtcbiAgICAgIGlmIChsaUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSBzZWxlY3RQcm9qZWN0KDApO1xuICAgICAgbGlFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobGlFbGVtZW50KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNlbGVjdFByb2plY3QgPSAocHJvamVjdElkKSA9PiB7XG4gICAgbGV0IGxpUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0W3Byb2plY3QtaWQ9XCIke3Byb2plY3RJZH1cIl1gKTtcblxuICAgIGlmIChsaVByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSByZXR1cm47XG5cbiAgICAvLyB1bnNlbGVjdCB0aGUgY3VycmVudCBzZWxlY3RlZCBwcm9qZWN0XG4gICAgbGV0IHNlbGVjdGVkUHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0c1tpXS5maXJzdEVsZW1lbnRDaGlsZC5jb250ZW50RWRpdGFibGUgPSAnZmFsc2UnO1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIH1cblxuICAgIC8vIHNlbGVjdCB0aGUgY29ycmVjdCBwcm9qZWN0XG4gICAgbGV0IHByb2plY3RJbmRleCA9IGdldFByb2plY3RJbmRleChwcm9qZWN0SWQpO1xuICAgIGlmIChwcm9qZWN0SW5kZXggPiAtMSAmJiBwcm9qZWN0SW5kZXggPCBwcm9qZWN0TGlzdC5sZW5ndGgpIHtcbiAgICAgIC8vIGJsb2NrcyB0aGUgZWRpdGlvbiBvZiB0aGUgZGVmYXVsdCBwcm9qZWN0IG5hbWVcbiAgICAgIGlmIChwcm9qZWN0SWQgPiAwKSBsaVByb2plY3QuZmlyc3RFbGVtZW50Q2hpbGQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xuICAgICAgbGlQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICBEaXNwbGF5LmRpc3BsYXlUb2RvTGlzdChwcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLmdldFRvZG9zKCkpO1xuICAgICAgY3VycmVudFByb2plY3RJbmRleCA9IHByb2plY3RJbmRleDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAoKSA9PiB7XG4gICAgbGV0IHRvZG8gPSBUb0RvKGdldE5ld1RvZG9JZChjdXJyZW50UHJvamVjdEluZGV4KSwgJ05ldyB0YXNrJywgZmFsc2UpO1xuICAgIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLmFkZFRvZG8odG9kbyk7XG4gICAgcHJvamVjdHNKU09OW2N1cnJlbnRQcm9qZWN0SW5kZXhdID0gcHJvamVjdExpc3RbY3VycmVudFByb2plY3RJbmRleF0udG9KU09OKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0pTT04pKTtcbiAgICByZXR1cm4gdG9kbztcbiAgfTtcbiAgY29uc3QgcmVtb3ZlVG9kbyA9IChldmVudCkgPT4ge1xuICAgIGxldCBkaXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IHRvZG9JZCA9IGRpdkVsZW1lbnQuYXR0cmlidXRlc1sndG9kby1pZCddLnZhbHVlO1xuICAgIGxldCB0b2RvSW5kZXggPSBnZXRUb2RvSW5kZXgoY3VycmVudFByb2plY3RJbmRleCwgdG9kb0lkKTtcbiAgICBsZXQgdG9kb3MgPSBwcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdEluZGV4XS5nZXRUb2RvcygpO1xuXG4gICAgaWYgKHRvZG9JbmRleCA+IC0xICYmIHRvZG9JbmRleCA8IHRvZG9zLmxlbmd0aCkge1xuICAgICAgdG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgICBwcm9qZWN0c0pTT05bY3VycmVudFByb2plY3RJbmRleF0gPSBwcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdEluZGV4XS50b0pTT04oKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNKU09OKSk7XG4gICAgICBkaXZFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZGl2RWxlbWVudCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXROZXdQcm9qZWN0SWQgPSAoKSA9PiB7XG4gICAgbGV0IG1heElkID0gMDtcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgaWYgKHByb2plY3QuZ2V0SWQoKSA+IG1heElkKSBtYXhJZCA9IHByb2plY3QuZ2V0SWQoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWF4SWQgKyAxO1xuICB9O1xuICBjb25zdCBnZXROZXdUb2RvSWQgPSAocHJvamVjdElkKSA9PiB7XG4gICAgbGV0IG1heElkID0gMDtcbiAgICBpZiAocHJvamVjdElkIDwgMCB8fCBwcm9qZWN0SWQgPiBwcm9qZWN0TGlzdC5sZW5ndGgpIHJldHVybiAtMTtcbiAgICBwcm9qZWN0TGlzdFtwcm9qZWN0SWRdLmdldFRvZG9zKCkuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGlmICh0b2RvLmdldElkKCkgPiBtYXhJZCkgbWF4SWQgPSB0b2RvLmdldElkKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1heElkICsgMTtcbiAgfTtcbiAgY29uc3QgZ2V0UHJvamVjdEluZGV4ID0gKHByb2plY3RJZCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0TGlzdC5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QuZ2V0SWQoKSA9PSBwcm9qZWN0SWQpO1xuICB9O1xuICBjb25zdCBnZXRUb2RvSW5kZXggPSAocHJvamVjdEluZGV4LCB0b2RvSWQpID0+IHtcbiAgICBpZiAocHJvamVjdEluZGV4IDwgMCB8fCBwcm9qZWN0SW5kZXggPiBwcm9qZWN0TGlzdC5sZW5ndGgpIHJldHVybiAtMTtcbiAgICByZXR1cm4gcHJvamVjdExpc3RbcHJvamVjdEluZGV4XS5nZXRUb2RvcygpLmZpbmRJbmRleCgodG9kbykgPT4gdG9kby5nZXRJZCgpID09IHRvZG9JZCk7XG4gIH1cbiAgY29uc3QgcmVuYW1lUHJvamVjdCA9IChldmVudCwgcHJvamVjdElkKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgaW5kZXggPSBnZXRQcm9qZWN0SW5kZXgocHJvamVjdElkKTtcbiAgICBpZiAoaW5kZXggPiAtMSAmJiBpbmRleCA8IHByb2plY3RMaXN0Lmxlbmd0aCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5pbm5lckhUTUwucmVwbGFjZUFsbCgnJm5ic3A7JywgJycpID09ICcnKVxuICAgICAgICBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdFtpbmRleF0uZ2V0TmFtZSgpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHByb2plY3RMaXN0W2luZGV4XS5zZXROYW1lKGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgIHByb2plY3RzSlNPTltpbmRleF0ubmFtZSA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0pTT04pKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbmFtZVRvZG8gPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgdGl0bGVFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGxldCBkaXZFbGVtZW50ID0gdGl0bGVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgdG9kb0lkID0gZGl2RWxlbWVudC5hdHRyaWJ1dGVzWyd0b2RvLWlkJ10udmFsdWU7XG4gICAgbGV0IHRvZG9JbmRleCA9IGdldFRvZG9JbmRleChjdXJyZW50UHJvamVjdEluZGV4LCB0b2RvSWQpO1xuICAgIGxldCB0b2RvcyA9IHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLmdldFRvZG9zKCk7XG5cbiAgICBpZiAodG9kb0luZGV4ID4gLTEgJiYgdG9kb0luZGV4IDwgdG9kb3MubGVuZ3RoKSB7XG4gICAgICBsZXQgdG9kbyA9IHRvZG9zW3RvZG9JbmRleF07XG4gICAgICBpZiAodGl0bGVFbGVtZW50LmlubmVySFRNTC5yZXBsYWNlQWxsKCcmbmJzcDsnLCAnJykgPT0gJycpXG4gICAgICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICAgIGVsc2Uge1xuICAgICAgICB0b2RvLnNldFRpdGxlKHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCk7XG4gICAgICAgIHByb2plY3RzSlNPTltjdXJyZW50UHJvamVjdEluZGV4XSA9IHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRvSlNPTigpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzSlNPTikpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgY2hlY2tUb2RvID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IGNoZWNrRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBsZXQgZGl2RWxlbWVudCA9IGNoZWNrRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IHRvZG9JZCA9IGRpdkVsZW1lbnQuYXR0cmlidXRlc1sndG9kby1pZCddLnZhbHVlO1xuICAgIGxldCB0b2RvSW5kZXggPSBnZXRUb2RvSW5kZXgoY3VycmVudFByb2plY3RJbmRleCwgdG9kb0lkKTtcbiAgICBsZXQgdG9kb3MgPSBwcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdEluZGV4XS5nZXRUb2RvcygpO1xuXG4gICAgaWYgKHRvZG9JbmRleCA+IC0xICYmIHRvZG9JbmRleCA8IHRvZG9zLmxlbmd0aCkge1xuICAgICAgbGV0IHRvZG8gPSB0b2Rvc1t0b2RvSW5kZXhdO1xuICAgICAgdG9kby5zZXREb25lKCF0b2RvLmdldERvbmUoKSk7XG4gICAgICBwcm9qZWN0c0pTT05bY3VycmVudFByb2plY3RJbmRleF0gPSBwcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdEluZGV4XS50b0pTT04oKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNKU09OKSk7XG4gICAgICBpZiAodG9kby5nZXREb25lKCkpXG4gICAgICAgIGNoZWNrRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2hlY2ttYXJrLWNpcmNsZScpO1xuICAgICAgZWxzZVxuICAgICAgICBjaGVja0VsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VsbGlwc2Utb3V0bGluZScpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RMaXN0O1xuICB9O1xuICBjb25zdCBwYXJzZVByb2plY3RzSlNPTiA9IChqc29uKSA9PiB7XG4gICAgcHJvamVjdHNKU09OID0ganNvbjtcblxuICAgIHByb2plY3RzSlNPTi5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgbGV0IHRvZG9MaXN0ID0gW107XG4gICAgICBpZiAocHJvamVjdC5pZCA+PSAwICYmIHByb2plY3QubmFtZSAhPSAnJyAmJiBnZXRQcm9qZWN0SW5kZXgocHJvamVjdC5pZCkgPT0gLTEpIHtcbiAgICAgICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgIGlmICh0b2RvLmlkID49IDAgJiYgdG9kby5uYW1lICE9ICcnICYmIHRvZG9MaXN0LmZpbmRJbmRleCgodG9kb1NlYXJjaCkgPT4gdG9kb1NlYXJjaC5nZXRJZCgpID09IHRvZG8uaWQpID09IC0xKSB7XG4gICAgICAgICAgICB0b2RvTGlzdC5wdXNoKFRvRG8odG9kby5pZCwgdG9kby50aXRsZSwgdG9kby5kb25lKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcHJvamVjdExpc3QucHVzaChQcm9qZWN0KHByb2plY3QuaWQsIHByb2plY3QubmFtZSwgdG9kb0xpc3QpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHsgY3JlYXRlUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgc2VsZWN0UHJvamVjdCwgY3JlYXRlVG9kbywgcmVtb3ZlVG9kbywgcmVuYW1lUHJvamVjdCwgcmVuYW1lVG9kbywgY2hlY2tUb2RvLCBnZXRQcm9qZWN0TGlzdCwgcGFyc2VQcm9qZWN0c0pTT04gfTtcbn0pKCk7XG5cbi8vIENIRUNLIElGIFRIRVJFIElTIE5PIEtOT1dOIERBVEEgVE8gQ1JFQVRFIFRIRSBERUZBVUxUIE9ORVxuaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT0gMCB8fCAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCAnW3tcImlkXCI6IFwiMFwiLFwibmFtZVwiOiBcIiNEZWZhdWx0XCIsIFwidG9kb3NcIjogW3tcImlkXCI6IFwiMFwiLCBcInRpdGxlXCI6IFwiVGhpcyBpcyBhIGRlZmF1bHQgaXRlbVwiLCBcImRvbmVcIjogZmFsc2V9XX1dJylcbn1cblxuLy8gUkVDT1ZFUlkgT0YgU1RPUkVEIERBVEFcbkNvbnRyb2xsZXIucGFyc2VQcm9qZWN0c0pTT04oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkpO1xuXG5EaXNwbGF5LmRpc3BsYXlQcm9qZWN0TGlzdChDb250cm9sbGVyLmdldFByb2plY3RMaXN0KCkpO1xuQ29udHJvbGxlci5zZWxlY3RQcm9qZWN0KDApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9