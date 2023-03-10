
function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
};

function displayTodos(todos) {
    const todosContainer = document.getElementById('todos-container');
    for (const todo of todos) {
        console.log(todo);
        const todosDiv = document.createElement('div')
        todosDiv.innerHTML = `
        <h3>title:${todo.title}</h3>
        <h4>completed:${todo.completed}</h4>
        `
        todosContainer.appendChild(todosDiv)
    }
}
loadTodos()



