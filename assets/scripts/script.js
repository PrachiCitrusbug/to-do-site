// 1. clicking + button should add list item with buttons for remove and complete
// 2. clicking remove should remove the item from the list
// 3. clicking complete should strike the text on the list

const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");

todoButton.addEventListener("click", function(e){
    e.preventDefault();
    const todoListItem = document.createElement("li");
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");
    // TODO : validate input value
    const task = todoInput.value;
    if (task){
        //content
        todoDiv.innerHTML = `<p>${task}</p>`;
        //checkbox
        todoDiv.innerHTML += "<input type='checkbox'>"
        //remove button
        todoDiv.innerHTML += "<img src='assets/images/trash-solid.svg' alt='remove icon' class='remove-button'/>";

        todoListItem.appendChild(todoDiv);
        todoList.appendChild(todoListItem);

        //clear input value after appending
        todoInput.value = '';

        //event listener for checkbox
        const todoCheck = todoDiv.querySelector('input[type=checkbox]');
        todoCheck.addEventListener('change', (e) => {
            e.target.previousSibling.classList.toggle("completed");
        });

        //event listener for remove button
        const todoRemove = todoDiv.querySelector('.remove-button');
        todoRemove.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove();
        });
    }
});
