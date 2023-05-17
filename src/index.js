import './style.css'

console.log('Odin\'s ToDo');

const addProjectBtn = document.getElementById('add-project');
const projectList = document.getElementById('projects');

addProjectBtn.addEventListener('click',() => {
  let project = document.createElement('li');
  let a = document.createElement('a');

  a.textContent = "Created";
  project.children;
  projectList.appendChild(project);
});