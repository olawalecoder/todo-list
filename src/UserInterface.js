export default class userInterface {
  constructor(listElement, listObj) {
    this.showToDoElement = listElement;
    this.todoList = listObj;
  }

  static createListDisplay(todo, empty = false) {
    const li = document.createElement('li');
    li.classList.add('item');
    if (!empty) {
      li.innerHTML = `<input type="checkbox" id="${todo.index}" class="task-box">
                        <span id="task-${todo.index}" contenteditable='false' class= "task-description"> ${todo.description} </span>`;
    };
  };
}