import { viewProjects } from './dataService.js'
import { addListeners } from './newButtons.js'

export function loadDom() {
  clearDom();
  loadProjects();
  addListeners();
}

function clearDom() {
  let containerChildrenRaw = document.querySelector('#container').children;
  let containerChildren = Array.prototype.slice.call(containerChildrenRaw);
  
  //removes all items inside container div
  //these items include project titles and todos
  //reverse iteration since regular wont let us remove all, throws errors
  for (let i = containerChildren.length - 1; i >= 0; i--) {
    containerChildren[i].remove();
  }
}

function loadProjects() {
  //array of project objects
  let projects = viewProjects();

  projects.forEach(project => {
    let container = document.querySelector('#container');

    //to-dos will be added to this element as <li>
    let list = document.createElement('ul');
    list.className = 'row';

    let projName = document.createElement('h1');
    projName.className = 'projName';
    projName.textContent = project.name;

    let projCollapse = document.createElement('button');
    projCollapse.className = 'collapseProj';
    projCollapse.innerHTML = 'Collapse';

    let projBreak = document.createElement('br');

    container.appendChild(projName);
    container.appendChild(projCollapse);
    container.appendChild(projBreak);

    //renders todos as li elements under list
    renderTodos(project, list);

    container.appendChild(list);
  })
}

function renderTodos(project, list) {
  for (let i = 0; i < project['todoList'].length; i++){
    //individual html list for each todo to make separation easy
    const todoList = document.createElement('ul');
    todoList.className = 'todo';
      for (const prop in project['todoList'][i]) {
          //creates button for title of todo, 
          //allows us to make button collapsible
          if (prop === 'title'){
              let collapse = document.createElement('button');
              collapse.className += 'collapse';
              collapse.innerHTML = project['todoList'][i][prop];
              todoList.appendChild(collapse);

              let removeBtn = document.createElement('button');
              removeBtn.className += 'rmv';
              removeBtn.innerHTML = 'Remove To-do';
              todoList.appendChild(removeBtn);
          //makes sure project property isnt listed in to-do info
          } else if (prop === 'project') {
            continue;
          } else {
            let propTitle = prop.charAt(0).toUpperCase() + prop.slice(1);
            let col = document.createElement('li');
            col.textContent = `${propTitle} : 
              ${project['todoList'][i][prop]}`;
            col.className = 'rows'
            todoList.appendChild(col);
          }
      }
      list.appendChild(todoList);
  }
}