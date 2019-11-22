var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#newtodo")
var buttonElement = document.querySelector("#app button")

var todos = JSON.parse(localStorage.getItem('List_todos')) || [
    'Fazer café ',
    'Estudar Javascript ',
    'Estudar React '
];

function renderTodos() {

    listElement.innerHTML = ''

    for (let index = 0; index < todos.length; index++) {
        var todo = document.createElement('li')
        var linkElement = document.createElement('a')
        linkElement.setAttribute('href','#')
        linkElement.setAttribute('onclick', 'deleteTodo('+ index + ')')
        var todoText = document.createTextNode(todos[index])
        var linkText = document.createTextNode(' Excluir')
        todo.setAttribute('id',index)
        todo.appendChild(todoText)
        linkElement.appendChild(linkText)
        todo.appendChild(linkElement)
        listElement.appendChild(todo)   
    }
    
}

renderTodos()


function addTodo() {
   
    var todoText = inputElement.value
    todos.push(todoText)
    inputElement.value = ''
    renderTodos()
    saveToLocalstorage()
}

function deleteTodo(index) {
    todos.splice(index, 1)
    renderTodos()
    saveToLocalstorage()
    
}

function saveToLocalstorage() {
    localStorage.setItem('List_todos', JSON.stringify(todos))
}

