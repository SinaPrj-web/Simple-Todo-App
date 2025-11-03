let $ = document;

let addBtn = $.querySelector('#addBtn')
let inputText = $.querySelector('.todo-add-btn')
let TodoContainer = $.querySelector('.list-container')


addBtn.addEventListener('click' , addTodoToList)



function addTodoToList () {
    let TodoValue = inputText.value

    let todoHtml = `<li class="todo">
                        <label>
                          <input class="todo-checkbox" type="checkbox">
                          <span class="checkmark"></span>
                        </label>
                        <span class="todo-text">${TodoValue}</span>
                      </li>`

    TodoContainer.insertAdjacentHTML("beforeend" , todoHtml)
    
}