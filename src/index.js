import { createTodo, createProject } from "./dataService.js";
import { loadDom } from "./dom.js";

function createPlaceHolders() {
  createProject("Miscellaneous", []);
  createTodo(
    "Click to-do names (ME) to collapse",
    "When all to-do items are removed from a project, the project will be deleted. Try it out!",
    "05/31/2000",
    "Miscellaneous"
  );
  createTodo(
    "TIP",
    "Be sure to select the project you want to add your to-do item to from the dropdown menu when creating it!",
    "06/15/2019",
    "Miscellaneous"
  );
}

//placeholder misc project if localStorage empty
if (JSON.parse(localStorage.getItem("projects")).length === 0) {
  createPlaceHolders();
}

loadDom();

//new project button requires name & any existing todos
//creates own array of todos, maybe pointers?

//new todo -> have a dropdown menu of current projects to add it to
//make a default project for misc tasks
