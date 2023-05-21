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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLElBQUksV0FBVyxLQUFLO0FBQ3JELFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLEdBQUc7O0FBRXRFOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IFRvRG8gPSAoaWQsIHRpdGxlLCBkb25lKSA9PiB7XG4gIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldERvbmUgPSAoKSA9PiBkb25lO1xuICBjb25zdCBzZXREb25lID0gKGlzRG9uZSkgPT4gZG9uZSA9IGlzRG9uZTtcbiAgcmV0dXJuIHsgZ2V0SWQsIGdldFRpdGxlLCBnZXREb25lLCBzZXREb25lIH07XG59XG5cbmNvbnN0IFByb2plY3QgPSAoaWQsIG5hbWUsIHRvZG9zKSA9PiB7XG4gIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHRvZG9zO1xuICBjb25zdCBzZXROYW1lID0gKG5ld05hbWUpID0+IG5hbWUgPSBuZXdOYW1lO1xuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHRvZG9zLmFkZCh0b2RvKTtcbiAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiBgaWQgOiAke2lkfSB8IG5hbWUgOiAke25hbWV9YDtcbiAgcmV0dXJuIHsgZ2V0SWQsIGdldE5hbWUsIGdldFRvZG9zLCBzZXROYW1lLCBhZGRUb2RvLCB0b1N0cmluZyB9O1xufVxuXG5jb25zdCBEaXNwbGF5ID0gKCgpID0+IHtcbiAgY29uc3QgZGlzcGxheUFkZFByb2plY3RCdXR0b24gPSAoKSA9PiB7XG4gICAgbGV0IGxpRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgaWNvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpb24taWNvbicpO1xuXG4gICAgaWNvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2FkZC1vdXRsaW5lJyk7XG4gICAgYnV0dG9uRWxlbWVudC5pZCA9ICdhZGQtcHJvamVjdCc7XG4gICAgYnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BsYXlOZXdQcm9qZWN0KCkpO1xuICAgIGJ1dHRvbkVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xuICAgIGxpRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgbGlFbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpO1xuXG4gICAgcHJvamVjdFVMLmFwcGVuZENoaWxkKGxpRWxlbWVudCk7XG4gIH07XG4gIGNvbnN0IGRpc3BsYXlBZGRUb2RvQnV0dG9uID0gKCkgPT4ge1xuICAgIGxldCBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGljb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW9uLWljb24nKTtcblxuICAgIGljb25FbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsICdhZGQtY2lyY2xlJyk7XG4gICAgYnV0dG9uRWxlbWVudC5hcHBlbmRDaGlsZChpY29uRWxlbWVudCk7XG4gICAgYnV0dG9uRWxlbWVudC5pZCA9ICdhZGQtdG9kbyc7XG5cbiAgICBjb250ZW50RElWLmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpO1xuICB9O1xuICBjb25zdCBkaXNwbGF5UHJvamVjdExpc3QgPSAocHJvamVjdExpc3QpID0+IHtcbiAgICBjbGVhclByb2plY3RMaXN0KCk7XG5cbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBkaXNwbGF5QWRkUHJvamVjdEJ1dHRvbigpO1xuICB9O1xuICBjb25zdCBkaXNwbGF5VG9kb0xpc3QgPSAodG9kb0xpc3QpID0+IHtcbiAgICBjbGVhclRvZG9MaXN0KCk7XG5cbiAgICB0b2RvTGlzdC5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgZGlzcGxheVRvZG8odG9kbyk7XG4gICAgfSk7XG5cbiAgICBkaXNwbGF5QWRkVG9kb0J1dHRvbigpO1xuICB9O1xuICBjb25zdCBjbGVhclByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIHdoaWxlIChwcm9qZWN0VUwuZmlyc3RDaGlsZCkge1xuICAgICAgcHJvamVjdFVMLnJlbW92ZUNoaWxkKHByb2plY3RVTC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY2xlYXJUb2RvTGlzdCA9ICgpID0+IHtcbiAgICB3aGlsZSAoY29udGVudERJVi5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50RElWLnJlbW92ZUNoaWxkKGNvbnRlbnRESVYubGFzdENoaWxkKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBsZXQgbGlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgdG1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PSAnI0RlZmF1bHQnKSB7XG4gICAgICBsaUVsZW1lbnQuaWQgPSAnZGVmYXVsdC1wcm9qZWN0JztcbiAgICAgIHRtcEVsZW1lbnQudGV4dENvbnRlbnQgPSAnRGVmYXVsdCc7XG4gICAgfSBlbHNlIHRtcEVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcblxuICAgIHRtcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IENvbnRyb2xsZXIuc2VsZWN0UHJvamVjdChwcm9qZWN0LmdldElkKCkpKTtcbiAgICB0bXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBlID0+IENvbnRyb2xsZXIucmVuYW1lUHJvamVjdChlLCBwcm9qZWN0LmdldElkKCkpKTtcbiAgICBsaUVsZW1lbnQuYXBwZW5kQ2hpbGQodG1wRWxlbWVudCk7XG4gICAgdG1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG4gICAgdG1wRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdCcpO1xuICAgIHRtcEVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RyYXNoJyk7XG4gICAgdG1wRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gQ29udHJvbGxlci5yZW1vdmVQcm9qZWN0KGUpKTtcbiAgICBsaUVsZW1lbnQuYXBwZW5kQ2hpbGQodG1wRWxlbWVudCk7XG4gICAgbGlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBsaUVsZW1lbnQuc2V0QXR0cmlidXRlKCdwcm9qZWN0LWlkJywgcHJvamVjdC5nZXRJZCgpKTtcblxuICAgIHByb2plY3RVTC5hcHBlbmRDaGlsZChsaUVsZW1lbnQpO1xuICB9O1xuICBjb25zdCBkaXNwbGF5VG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgbGV0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGNoZWNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lvbi1pY29uJyk7XG4gICAgbGV0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBsZXQgaWNvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpb24taWNvbicpO1xuXG4gICAgd3JhcHBlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICAgIGNoZWNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgIGlmICh0b2RvLmdldERvbmUoKSlcbiAgICAgIGNoZWNrRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2hlY2ttYXJrLWNpcmNsZScpO1xuICAgIGVsc2VcbiAgICAgIGNoZWNrRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZWxsaXBzZS1vdXRsaW5lJyk7XG4gICAgdGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZSgpO1xuICAgIHdyYXBwZXJFbGVtZW50LmFwcGVuZChjaGVja0VsZW1lbnQsIHRpdGxlRWxlbWVudCk7XG4gICAgaWNvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRvZG8nKTtcbiAgICBpY29uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndHJhc2gnKTtcbiAgICB0b2RvRWxlbWVudC5hcHBlbmQod3JhcHBlckVsZW1lbnQsIGljb25FbGVtZW50KTtcbiAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG5cbiAgICBjb250ZW50RElWLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcbiAgfTtcbiAgY29uc3QgZGlzcGxheU5ld1Byb2plY3QgPSAoKSA9PiB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBDb250cm9sbGVyLmNyZWF0ZVByb2plY3QoKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdCcpLnBhcmVudEVsZW1lbnQpO1xuICAgIGRpc3BsYXlQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIENvbnRyb2xsZXIuc2VsZWN0UHJvamVjdChuZXdQcm9qZWN0LmdldElkKCkpO1xuICAgIGRpc3BsYXlBZGRQcm9qZWN0QnV0dG9uKCk7XG4gIH07XG4gIGNvbnN0IGRpc3BsYXlOZXdUb2RvID0gKCkgPT4ge1xuXG4gIH07XG4gIHJldHVybiB7IGRpc3BsYXlQcm9qZWN0TGlzdCwgZGlzcGxheVRvZG9MaXN0LCBkaXNwbGF5TmV3UHJvamVjdCwgZGlzcGxheU5ld1RvZG8gfTtcbn0pKCk7XG5cbmNvbnN0IENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gUHJvamVjdChDb250cm9sbGVyLmdldE5ld1Byb2plY3RJZCgpLCAnTmV3IFByb2plY3QnLCBbXSk7XG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgfTtcbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChldmVudCkgPT4ge1xuICAgIGxldCBsaUVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgcHJvamVjdElkID0gbGlFbGVtZW50LmF0dHJpYnV0ZXNbJ3Byb2plY3QtaWQnXS52YWx1ZTtcbiAgICBsZXQgcHJvamVjdEluZGV4ID0gZ2V0UHJvamVjdEluZGV4KHByb2plY3RJZCk7XG5cbiAgICBpZiAocHJvamVjdEluZGV4ID4gLTEgJiYgcHJvamVjdEluZGV4IDwgcHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICAgIGlmIChsaUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSBzZWxlY3RQcm9qZWN0KDApO1xuICAgICAgbGlFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobGlFbGVtZW50KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNlbGVjdFByb2plY3QgPSAoaWQpID0+IHtcbiAgICBsZXQgbGlQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RbcHJvamVjdC1pZD1cIiR7aWR9XCJdYCk7XG5cbiAgICBpZiAobGlQcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkgcmV0dXJuO1xuXG4gICAgLy8gdW5zZWxlY3QgdGhlIGN1cnJlbnQgc2VsZWN0ZWQgcHJvamVjdFxuICAgIGxldCBzZWxlY3RlZFByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0ZWQnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlbGVjdGVkUHJvamVjdHNbaV0uZmlyc3RFbGVtZW50Q2hpbGQuY29udGVudEVkaXRhYmxlID0gJ2ZhbHNlJztcbiAgICAgIHNlbGVjdGVkUHJvamVjdHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICAvLyBzZWxlY3QgdGhlIGNvcnJlY3QgcHJvamVjdFxuICAgIGxldCBwcm9qZWN0SW5kZXggPSBnZXRQcm9qZWN0SW5kZXgoaWQpO1xuICAgIGlmIChwcm9qZWN0SW5kZXggPiAtMSAmJiBwcm9qZWN0SW5kZXggPCBwcm9qZWN0cy5sZW5ndGgpIHtcbiAgICAgIC8vIGJsb2NrcyB0aGUgZWRpdGlvbiBvZiB0aGUgZGVmYXVsdCBwcm9qZWN0IG5hbWVcbiAgICAgIGlmIChpZCA+IDApIGxpUHJvamVjdC5maXJzdEVsZW1lbnRDaGlsZC5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XG4gICAgICBsaVByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIERpc3BsYXkuZGlzcGxheVRvZG9MaXN0KHByb2plY3RzW3Byb2plY3RJbmRleF0uZ2V0VG9kb3MoKSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBjcmVhdGVUb2RvID0gKCkgPT4ge1xuXG4gIH07XG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAoKSA9PiB7XG5cbiAgfTtcbiAgY29uc3QgZ2V0TmV3UHJvamVjdElkID0gKCkgPT4ge1xuICAgIGxldCBtYXhJZCA9IDA7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGlmIChwcm9qZWN0LmdldElkKCkgPiBtYXhJZCkgbWF4SWQgPSBwcm9qZWN0LmdldElkKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1heElkICsgMTtcbiAgfTtcbiAgY29uc3QgZ2V0UHJvamVjdEluZGV4ID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRJZCgpID09IGlkKTtcbiAgfVxuICBjb25zdCByZW5hbWVQcm9qZWN0ID0gKGUsIGlkKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBpbmRleCA9IGdldFByb2plY3RJbmRleChpZCk7XG4gICAgaWYgKGluZGV4ID4gLTEgJiYgaW5kZXggPCBwcm9qZWN0cy5sZW5ndGgpIHtcbiAgICAgIGlmIChlLnRhcmdldC5pbm5lckhUTUwucmVwbGFjZUFsbCgnJm5ic3A7JywgJycpID09ICcnKVxuICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IHByb2plY3RzW2luZGV4XS5nZXROYW1lKCk7XG4gICAgICBlbHNlXG4gICAgICAgIHByb2plY3RzW2luZGV4XS5zZXROYW1lKGUudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJvamVjdHMudG9TdHJpbmcoKSk7XG4gIH1cbiAgcmV0dXJuIHsgY3JlYXRlUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgc2VsZWN0UHJvamVjdCwgY3JlYXRlVG9kbywgcmVtb3ZlVG9kbywgZ2V0TmV3UHJvamVjdElkLCByZW5hbWVQcm9qZWN0IH07XG59KSgpO1xuXG5jb25zdCBwcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcbmNvbnN0IGNvbnRlbnRESVYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5sZXQgcHJvamVjdHMgPSBbUHJvamVjdCgwLCAnI0RlZmF1bHQnLCBbVG9EbygwLCAnVGhpcyBpcyBhIGRlZmF1bHQgaXRlbScsIGZhbHNlKV0pXTtcblxuRGlzcGxheS5kaXNwbGF5UHJvamVjdExpc3QocHJvamVjdHMpO1xuQ29udHJvbGxlci5zZWxlY3RQcm9qZWN0KDApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==