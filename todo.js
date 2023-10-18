function addTodo() {
    var todoInput = document.getElementById("todo-input");
    var todoText = todoInput.value;

    if (todoText === "") {
        alert("Please enter a task!");
        return;
    }

    var todoList = document.getElementById("todo-list");
    var li = document.createElement("li");
    li.textContent = todoText;
    todoList.appendChild(li);

    todoInput.value = "";
}
