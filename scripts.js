const TodoList = [] ;

function renderHTML() {
    let todoListHtml = '';
    TodoList.forEach(function(value , index){
        todoListHtml +=  `
        <div>${value.name}</div>
        <div>${value.dueDate}</div>
        <button onclick="deleteTodo(${index});" class = "DeleteButton">Delete</button  >` ;
    })
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
