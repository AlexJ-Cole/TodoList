import { Todo, Project } from './constructors.js'
import { collapseListener, collapseListenerProj } from './collapse.js'
import { loadDom } from './dom.js'
import { fillDropDown } from './newButtons.js'

let myProjects = [];

if(!localStorage.getItem('projects')) {
  localStorage.setItem('projects', JSON.stringify(myProjects));
}

const data = JSON.parse(localStorage.getItem('projects'));

data.forEach((proj) => {
  createProject(proj.name, proj.todoList);
})

export function createProject(name, todos) {
  let proj = new Project(name, todos);
  myProjects.push(proj);
  localStorage.setItem('projects', JSON.stringify(myProjects));
  collapseListenerProj();
  loadDom();
  fillDropDown();
}

export function createTodo(title, desc, due, project) {
  let todo = new Todo(title, desc, due, project);
  const proj = myProjects.filter(obj => {
    return obj.name === project;
  })
  proj[0].todoList.push(todo);
  localStorage.setItem('projects', JSON.stringify(myProjects));
  collapseListener();
  loadDom();
}

export function viewProjects() {
  //console.log(myProjects);
  return myProjects;
}

export function deleteTodo(btn) {
  const todoName = btn.previousSibling.textContent;
  const projName = btn.parentNode.parentNode.previousSibling.
                   previousSibling.previousSibling.textContent;

  const currProj = myProjects.findIndex(proj => proj.name === projName)

  for (let i = 0; i < myProjects[currProj].todoList.length; i++){
    if (myProjects[currProj].todoList[i].title === todoName) {
      myProjects[currProj].todoList.splice(i,1);
      localStorage.setItem('projects', JSON.stringify(myProjects));
      break;
    }
  }
  if (myProjects[currProj].todoList.length === 0) {
    myProjects.splice(currProj, 1);
    localStorage.setItem('projects', JSON.stringify(myProjects));
  }
  loadDom();
}
