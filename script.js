let $ = document;

let addBtn = $.querySelector('#addBtn')
let inputText = $.querySelector('.todo-add-btn')
let TodoContainer = $.querySelector('.list-container')
let icon = $.querySelector('#plusIcon')




window.addEventListener('DOMContentLoaded' , function () {
    const existingTodos = JSON.parse(localStorage.getItem('todo')) || []

    existingTodos.forEach(function (todo){
        const todoHtml = `<li class="todo">
        <label>
          <input class="todo-checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
          <span class="checkmark"></span>
          <span class="todo-text">${todo.text}</span>
        </label>
      </li>`

      TodoContainer.insertAdjacentHTML('beforeend' , todoHtml)
    })

})



TodoContainer.addEventListener('change' , function (e) {
    if(e.target.classList.contains('todo-checkbox')) {
        const text = e.target.nextElementSibling.nextElementSibling.textContent.trim();
        let todos = JSON.parse(localStorage.getItem('todo')) || []

        todos = todos.map(todo => 
            todo.text ===   text ? {...todo , completed: e.target.checked } : todo
        )
        localStorage.setItem('todo' , JSON.stringify(todos))
    }
})



function addTodoToList () {
    let todoValue = inputText.value.trim()
    const existingTodos = JSON.parse(localStorage.getItem('todo')) || []
    

    if(todoValue === '') {
        alert('Please enter a todo first')
        return
    }
    const newObj = {
        text : todoValue,
        completed : false
    }
    
    existingTodos.push(newObj)
    localStorage.setItem('todo' , JSON.stringify(existingTodos))
     

    let todoHtml = `<li class="todo">
                        <label>
                          <input class="todo-checkbox" type="checkbox">
                          <span class="checkmark"></span>
                          <span class="todo-text">${todoValue}</span>
                        </label>
                      </li>`

    TodoContainer.insertAdjacentHTML("beforeend" , todoHtml)

    inputText.value = ''
    
}

addBtn.addEventListener('click' , addTodoToList)
inputText.addEventListener('keydown' , function (event) {
    let todoValue = inputText.value.trim()
    if(event.key === 'Enter' && todoValue !== '') {
        addTodoToList()
    }
})

icon.addEventListener('click' , function() {
    localStorage.removeItem('todo')
    TodoContainer.innerHTML = ''
    
})
