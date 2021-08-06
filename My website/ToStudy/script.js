const form = document.getElementById('form');
const inputTodo = document.getElementById('todo');
const button = document.getElementById('button');
const toDoList = document.getElementById('toDoList');

form.addEventListener('click',e => {
    e.preventDefault();
})
button.addEventListener('click', () => { 
    addTodo();
})

function addTodo(){
    const todoText = inputTodo.value;
    if(todoText){
        const todoEl = document.createElement('li');
        todoEl.innerHTML = todoText;
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
        })
        toDoList.appendChild(todoEl);
        inputTodo.value="";
    }
}