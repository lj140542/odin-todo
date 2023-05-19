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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBUb0RvID0gKHRpdGxlLCBkb25lKSA9PiB7XG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldERvbmUgPSAoKSA9PiBkb25lO1xuICBjb25zdCBzZXREb25lID0gKGlzRG9uZSkgPT4gZG9uZSA9IGlzRG9uZTtcbiAgcmV0dXJuIHsgZ2V0VGl0bGUsIGdldERvbmUsIHNldERvbmUgfTtcbn1cblxuY29uc3QgUHJvamVjdCA9IChuYW1lLCB0b2RvcykgPT4ge1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB0b2RvcztcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB0b2Rvcy5hZGQodG9kbyk7XG4gIHJldHVybiB7IGdldE5hbWUsIGdldFRvZG9zLCBhZGRUb2RvIH07XG59XG5cbmNvbnN0IERpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5QWRkUHJvamVjdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBsZXQgbGlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBpY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG5cbiAgICBpY29uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYWRkLW91dGxpbmUnKTtcbiAgICBidXR0b25FbGVtZW50LmlkID0gJ2FkZC1wcm9qZWN0JztcbiAgICBidXR0b25FbGVtZW50LmFwcGVuZENoaWxkKGljb25FbGVtZW50KTtcbiAgICBsaUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIGxpRWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25FbGVtZW50KTtcblxuICAgIHByb2plY3RVTC5hcHBlbmRDaGlsZChsaUVsZW1lbnQpO1xuICB9O1xuICBjb25zdCBkaXNwbGF5QWRkVG9kb0J1dHRvbiA9ICgpID0+IHtcbiAgICBsZXQgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBpY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG5cbiAgICBpY29uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYWRkLWNpcmNsZScpO1xuICAgIGJ1dHRvbkVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xuICAgIGJ1dHRvbkVsZW1lbnQuaWQgPSAnYWRkLXRvZG8nO1xuXG4gICAgY29udGVudERJVi5hcHBlbmRDaGlsZChidXR0b25FbGVtZW50KTtcbiAgfTtcbiAgY29uc3QgZGlzcGxheVByb2plY3RMaXN0ID0gKHByb2plY3RMaXN0KSA9PiB7XG4gICAgY2xlYXJQcm9qZWN0TGlzdCgpO1xuXG4gICAgcHJvamVjdExpc3QuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgZGlzcGxheUFkZFByb2plY3RCdXR0b24oKTtcbiAgfTtcbiAgY29uc3QgZGlzcGxheVRvZG9MaXN0ID0gKHRvZG9MaXN0KSA9PiB7XG4gICAgY2xlYXJUb2RvTGlzdCgpO1xuXG4gICAgdG9kb0xpc3QuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGRpc3BsYXlUb2RvKHRvZG8pO1xuICAgIH0pO1xuXG4gICAgZGlzcGxheUFkZFRvZG9CdXR0b24oKTtcbiAgfTtcbiAgY29uc3QgY2xlYXJQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICB3aGlsZSAocHJvamVjdFVMLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHByb2plY3RVTC5yZW1vdmVDaGlsZChwcm9qZWN0VUwubGFzdENoaWxkKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNsZWFyVG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgd2hpbGUgKGNvbnRlbnRESVYuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudERJVi5yZW1vdmVDaGlsZChjb250ZW50RElWLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBkaXNwbGF5UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgbGV0IGxpRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IHRtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgPT0gJyNEZWZhdWx0Jykge1xuICAgICAgbGlFbGVtZW50LmlkID0gJ2RlZmF1bHQtcHJvamVjdCc7XG4gICAgICB0bXBFbGVtZW50LnRleHRDb250ZW50ID0gJ0RlZmF1bHQnO1xuICAgIH0gZWxzZSB0bXBFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XG5cbiAgICBsaUVsZW1lbnQuYXBwZW5kQ2hpbGQodG1wRWxlbWVudCk7XG4gICAgdG1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG4gICAgdG1wRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdCcpO1xuICAgIHRtcEVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RyYXNoJyk7XG4gICAgbGlFbGVtZW50LmFwcGVuZENoaWxkKHRtcEVsZW1lbnQpO1xuICAgIGxpRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG5cbiAgICBwcm9qZWN0VUwuYXBwZW5kQ2hpbGQobGlFbGVtZW50KTtcbiAgfTtcbiAgY29uc3QgZGlzcGxheVRvZG8gPSAodG9kbykgPT4ge1xuICAgIGxldCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB3cmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBjaGVja0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpb24taWNvbicpO1xuICAgIGxldCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgbGV0IGljb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW9uLWljb24nKTtcblxuICAgIHdyYXBwZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcbiAgICBjaGVja0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgICBpZiAodG9kby5nZXREb25lKCkpXG4gICAgICBjaGVja0VsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NoZWNrbWFyay1jaXJjbGUnKTtcbiAgICBlbHNlXG4gICAgICBjaGVja0VsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VsbGlwc2Utb3V0bGluZScpO1xuICAgIHRpdGxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICB3cmFwcGVyRWxlbWVudC5hcHBlbmQoY2hlY2tFbGVtZW50LCB0aXRsZUVsZW1lbnQpO1xuICAgIGljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10b2RvJyk7XG4gICAgaWNvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RyYXNoJyk7XG4gICAgdG9kb0VsZW1lbnQuYXBwZW5kKHdyYXBwZXJFbGVtZW50LCBpY29uRWxlbWVudCk7XG4gICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuXG4gICAgY29udGVudERJVi5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG4gIH07XG4gIGNvbnN0IGRpc3BsYXlOZXdQcm9qZWN0ID0gKCkgPT4ge1xuXG4gIH07XG4gIGNvbnN0IGRpc3BsYXlOZXdUb2RvID0gKCkgPT4ge1xuXG4gIH07XG4gIHJldHVybiB7IGRpc3BsYXlQcm9qZWN0TGlzdCwgZGlzcGxheVRvZG9MaXN0LCBkaXNwbGF5TmV3UHJvamVjdCwgZGlzcGxheU5ld1RvZG8gfTtcbn0pKCk7XG5cbmNvbnN0IENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKCkgPT4ge1xuXG4gIH07XG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoKSA9PiB7XG5cbiAgfTtcbiAgY29uc3Qgc2VsZWN0UHJvamVjdCA9IChldmVudCkgPT4ge1xuXG4gIH07XG4gIGNvbnN0IHNlbGVjdERlZmF1bHRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGxldCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWZhdWx0LXByb2plY3QnKTtcbiAgICBpZiAoIWRlZmF1bHRQcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgZGVmYXVsdFByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIERpc3BsYXkuZGlzcGxheVRvZG9MaXN0KHByb2plY3RzWzBdLmdldFRvZG9zKCkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY3JlYXRlVG9kbyA9ICgpID0+IHtcblxuICB9O1xuICBjb25zdCByZW1vdmVUb2RvID0gKCkgPT4ge1xuXG4gIH07XG4gIHJldHVybiB7IGNyZWF0ZVByb2plY3QsIHJlbW92ZVByb2plY3QsIHNlbGVjdFByb2plY3QsIHNlbGVjdERlZmF1bHRQcm9qZWN0LCBjcmVhdGVUb2RvLCByZW1vdmVUb2RvIH07XG59KSgpO1xuXG5jb25zdCBwcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcbmNvbnN0IGNvbnRlbnRESVYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5sZXQgZGVmYXVsdFByb2plY3QgPSBQcm9qZWN0KCcjRGVmYXVsdCcsIFtUb0RvKCdUaGlzIGlzIGEgZGVmYXVsdCBpdGVtJywgZmFsc2UpXSk7XG5sZXQgcHJvamVjdHMgPSBbZGVmYXVsdFByb2plY3QsIFByb2plY3QoJ05ldyBQcm9qZWN0JywgW1RvRG8oJ1RoaXMgaXMgYSBuZXcgaXRlbScsIGZhbHNlKV0pXTtcblxuRGlzcGxheS5kaXNwbGF5UHJvamVjdExpc3QocHJvamVjdHMpO1xuQ29udHJvbGxlci5zZWxlY3REZWZhdWx0UHJvamVjdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==