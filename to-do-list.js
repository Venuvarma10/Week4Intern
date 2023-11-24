const todoList = [];
  
  renderTodoList();
  
  function renderTodoList() {
    let todoListHTML = '';
  
    todoList.forEach((todoObject, index) => {
      let name  = todoObject;
      const html = `
        <div>${name}</div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button>
        <button class="edit-todo-button js-edit-todo-button">Edit </button>
      `;
      todoListHTML += html;
    });
  
    document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
  
    document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
        });
      });

    document.querySelectorAll('.js-edit-todo-button')
        .forEach((changeButton, index) => {
            changeButton.addEventListener('click', () => {
                let userInput = prompt("Please enter the changes:");
                todoList[index]=userInput;
                
            renderTodoList();
            });
        });
}
  
  document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
      addTodo();
    });
  
  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
  
    todoList.push(name);
  
    inputElement.value = '';
  
    renderTodoList();
  }








