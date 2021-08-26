let todoInput //tresc zadania
let errorInfo //info o braku zadania
let addBtn // dodaje zadania
let ulList // lista zadan
let newTodos // nowo dodane li
let popup //popup
let popupInfo //tekst w popupie
let todoToEdit //input w popipienta
let popupInput //input w popupie
let popupAddBtn // przycisk zatwierdz
let popupCloseBtn //anuluj

const main = () => {
    prepareDOMElement()
    prepareDOMEvent()
 
}

const prepareDOMElement = () => { //pobieranie elementow
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.toDo-list ul')

    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.tpopup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')

}

const prepareDOMEvent = () => { //naslychiwanie
    addBtn.addEventListener('click', addNewTasks)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closeEdit)
    popupAddBtn.addEventListener('click', changeToDo)


}

const addNewTasks = () => {
    if(todoInput.value !== ''){
        newTodos = document.createElement('li')
        newTodos.textContent = todoInput.value
        addClass()
        ulList.append(newTodos)
        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent ='Podaj tresc zadania'
    }
}

const addClass = () => {
    
    const classDiv = document.createElement('div')
    classDiv.classList.add('tools')
    newTodos.append(classDiv)
        const BtnComplete = document.createElement('button')
        BtnComplete.classList.add('complete')
        BtnComplete.innerHTML = '<i class="far fa-check-circle"></i>'
        const BtnEdit = document.createElement('button')
        BtnEdit.classList.add('edit')
        BtnEdit.innerHTML = '<i class="far fa-edit"></i>'
        const BtnDelete = document.createElement('button')
        BtnDelete.classList.add('delete')
        BtnDelete.innerHTML = '<i class="fas fa-times"></i>'

    classDiv.append(BtnComplete, BtnEdit, BtnDelete)
}
const checkClick = evt => {
    if(evt.target.matches('.complete')){
        evt.target.closest('li').classList.toggle('completed')
        evt.target.classList.toggle('completed')
    } else if(evt.target.matches('.edit')){
        edit(evt)
    } else if(evt.target.matches('.delete')){
        deleteToDo(evt)
    }
}


const edit = evt => {
    todoToEdit = evt.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
    // console.log(todoToEdit.firstChild)
    popup.style.display = 'block'
}
const closeEdit = evt => {
    popup.style.display = 'none'
    popupInfo.textContent = ''
}

const changeToDo = () => {
    if(popupInput.value !== ''){
        todoToEdit.firstChild.textContent = popupInput.value
        popup.style.display = 'none'
        popupInfo.textContent = ' '
    } else {
        popupInfo.textContent = 'Podaj tresc'
    }
}

const deleteToDo = evt => {
    evt.target.closest('li').remove()
    const allToDos = ulList.querySelectorAll('li')

    if(allToDos.length === 0) {
        errorInfo.textContent = 'Wprowadz zadania'
    } else {
        errorInfo.textContent = ' '
    }
}

    

document.addEventListener('DOMContentLoaded', main)