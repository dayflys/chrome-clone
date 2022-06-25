const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "toDos";

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}


function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click",deleteToDo)
    li.appendChild(button);
    li.appendChild(span);
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj ={ 
        text:newTodo,
        id:Date.now(),
    };
    todoInput.value = "";
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit",handleToDoSubmit);


const savedTodo = localStorage.getItem(TODOS_KEY);

if(saveTodo !== null){
    const parseToDos = JSON.parse(saveTodo);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
}
