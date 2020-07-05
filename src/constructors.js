export function Todo(title, desc, due, project, complete) {
  this.title = title;
  this.description = desc;
  this.dueDate = due;
  this.project = project;
}

export function Project(name, todos) {
  this.name = name;
  this.todoList = todos;
}
