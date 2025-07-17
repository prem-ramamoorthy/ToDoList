const TodoList = [] ;

function renderHTML() {
    let todoListHtml = '';
    TodoList.forEach((value , index) =>{
        todoListHtml +=  `
        <div>${value.name}</div>
        <div>${value.dueDate}</div>
        <button class = "DeleteButton">Delete</button  >` ;
    });
    document.querySelector('.Todocontainer').innerHTML = todoListHtml ;
}

document.querySelectorAll('.Todocontainer').forEach(
    (value , index) => {
        value.addEventListener('click' , ()=> {
            deleteTodo(index);
        })
    }
)

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
