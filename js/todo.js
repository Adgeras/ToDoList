"use strict";

// render TODO list items
function renderList( list ){
    const listPlace = document.querySelector('.container');
    
    let HTML = '';

    for (let i = 0; i < list.length; i++) {
        const todoItem = list[i];
        
        HTML += `
                <div class="item">
                    <div class="status ${todoItem.status}"></div>
                    <p class="desciption">${todoItem.description}</p>
                    <div class="deadline">${todoItem.deadline}</div>
                    <div class="actions">
                        <div class="action remove">Remove</div>
                    </div>
                </div>`;
    }
    return listPlace.innerHTML += HTML;;
}

renderList(todo_list);



// // ********************************
//         REMOVE SINGLE TODO ITEM
// // ************************************/
const removeActions = document.querySelectorAll('.item .action.remove');
for (let i = 0; i < removeActions.length; i++) {
    const removeElement =  removeActions[i];
    removeElement.addEventListener('click', actionRemoveTodoItem)
}
function actionRemoveTodoItem( event ){
    const parentItem = event.target.closest('.item')
    parentItem.remove();
}
// // ********************************
//     REMOVE ALL TODO ITEM
// // ************************************/

const BTNremoveAll = document.querySelector('.global-actions > .action.remove');
BTNremoveAll.addEventListener('click', actionRemoveAllTodoItemS);

function actionRemoveAllTodoItemS (event){
    const parent = event.target.closest('.container');
    const allTodoItems = parent.querySelectorAll('.item');

    for (let i = 0; i < allTodoItems.length; i++) {
        allTodoItems[i].remove();
    }
}
// // ********************************
//     FORM ACTIONS
// // ************************************/

const DOMform = document.querySelector('.form');
const DOMtaskTextArea = DOMform.querySelector('textarea[name="task"]');
const DOMdeadLineInput = DOMform.querySelector('input[name="deadline"]');
const DOMformActions = DOMform.querySelector('.actions');
const DOMformAdd = DOMformActions.querySelector('.btn.add')
const DOMformClear = DOMformActions.querySelector('.btn.clear');

DOMdeadLineInput.value = formatedDate(86400000); //24*60*60*1000 (paros laikas milisekundemis)

DOMformClear.addEventListener('click', clearForm);

function clearForm(){
    DOMtaskTextArea.value = '';
    DOMdeadLineInput.value = '';
}

DOMformAdd.addEventListener('click', addNewTodoItem);

/* ******* EINAMOSIOS DATOS PAEMIMAS : ***************
*****************************************************/

function addNewTodoItem(){ /****************************/
    
    /* ****************   EINAMOSIOS DATOS PAEMIMO PABAIGA + 
                  DESCRIPTION PAĖMIMAS IR DEADLINE PAĖMIMO PRADŽIA:
******************************************************************/

    let newTodo = {
        description: DOMtaskTextArea.value.trim(),
        created_on: formatedDate(0),
        deadline: DOMdeadLineInput.value.trim(),
        status:'todo'
    };
    
   
    if (newTodo.description.length === 0) {
        return alert('ERROR: tuscias aprasymas');
    }
    
        if (newTodo.deadline.length > 0 &&
             (new Date(newTodo.deadline)).toString() === 'Invalid Date') {
            return alert('ERROR: nevalidus deadline')
        }

    console.log(newTodo);
    
    todo_list.push(newTodo);
    renderList(todo_list); /********************************************************** */
    
    console.log( todo_list);

    return;
}
function formatedDate( deltaTime = 0) {

let now = new Date(  );
if ( deltaTime !== 0 ) {
    now = new Date(Date.now() + deltaTime);

    console.log(now);
}

    let minutes = now.getMinutes();
    let hours = now.getHours();
    const days = now.getDate();
    let month = now.getMonth()+1;
    const year = now.getFullYear();

    if (month <10 ) {
        month = '0'+month;
    }
    if (days < 10) {
        days = '0'+days;
    }
    if (minutes < 10) {
        minutes = '0'+days;
    }
    if (hours < 10) {
        hours = '0'+days;
    }

    return year+'-'+month+'-'+days+' '+hours+':'+minutes;
}