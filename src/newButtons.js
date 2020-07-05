import { createTodo, createProject, viewProjects, deleteTodo } from './dataService.js'
import { collapseListener, collapseListenerProj } from './collapse.js'

export function addListeners() {
  collapseListener();
  collapseListenerProj();
  projFormListener();
  todoFormListener();
  deleteTodoListener();
  fillDropDown();
}

export function fillDropDown() {
    clearDropDown();

    const drop = document.querySelector('#projectDropDown');
    const projects = viewProjects();

    for (let i = 0; i < projects.length; i++) {
        const opt = document.createElement('option');
        opt.value = projects[i].name;
        opt.innerHTML = projects[i].name;
        drop.appendChild(opt);
    }
}

function projFormListener() {
    const projForm = document.querySelector('#newProj');
    projForm.addEventListener('submit', event => {
        event.preventDefault();

        const input = document.querySelector('#projName');
        const text = input.value.trim();
        if (text != '') {
            createProject(text, []);
            input.value = '';
            viewProjects();
        }
    })
}

function todoFormListener() {
    const todoForm = document.querySelector('#newTodo')
    todoForm.addEventListener('submit', event => {
        event.preventDefault();

        const inputName = document.querySelector('#todoName');
        const name = inputName.value.trim();

        const inputDesc = document.querySelector('#todoDesc');
        const desc = inputDesc.value.trim();

        const inputDueDate = document.querySelector('#todoDueDate');
        const dueDate = inputDueDate.value.trim();

        const inputProj = document.querySelector('#projectDropDown');
        const proj = inputProj.value.trim();

        if (name != '') {
            createTodo(name, desc, dueDate, proj)
            inputName.value = '';
            inputDesc.value = '';
            inputDueDate.value = '';
            inputProj.value = '';
            viewProjects();
        }
    })
}

function clearDropDown() {
    const options = document.getElementsByTagName('option')
    if (options.length > 0) {
      let optionsArray = Array.prototype.slice.call(options);
      for (let i = optionsArray.length - 1; i >= 0; i--) {
          optionsArray[i].remove();
      }
    }
}

function deleteTodoListener() {
  let rmvRaw = document.getElementsByClassName('rmv');
  const rmv = Array.prototype.slice.call(rmvRaw);
  rmv.forEach(btn => {
    btn.addEventListener('click', () => {
      //removes todo item from todoList subarray in myProjects array
      //updats dom after every removal
      deleteTodo(btn);
    })
  })
}