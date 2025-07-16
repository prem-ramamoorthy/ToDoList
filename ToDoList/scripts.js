const TodoList = [] ;

function renderHTML() {
    let todoListHtml = '';
    for(let i = 0 ; i < TodoList.length ; i++){
        todoListHtml +=  `
        <div>${TodoList[i].name}</div>
        <div>${TodoList[i].dueDate}</div>
        <button onclick="deleteTodo(${i});" class = "DeleteButton">Delete</button  >` ;
    }
    document.querySelector('.Todocontainer').innerHTML = todoListHtml ;
}

function addTodo(){
    const inputfield = document.querySelector('.todoName').value ;
    const datefield = document.querySelector('.todoDate').value ;
    if(inputfield !== "" && datefield !== ""){
        TodoList.push({
            name : inputfield ,
            dueDate : datefield
        }) ;
        renderHTML() ;
    }
}

function deleteTodo( i ) {
    TodoList.splice(i, 1);
    renderHTML() ;
}
