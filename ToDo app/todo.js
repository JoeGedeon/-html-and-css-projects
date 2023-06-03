/* this function gets the task from input*/
function get_todos() {
    /*this creates an array of tasks that are inputed*/
    var todos = new Array;
    /*This pulls the task that was saved in the web browser memory*/
    var todos_str =localStorage.getItem('todo');
    /*If the input is not null then JSON.parse will
    communicate with the web browser to make the task a Javascript object.*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
/*This function adds the inputed task and creates a variable of it*/
var task = document.getElementById('task').value;

var todo = get_todos();
/*This adds a new task the end of the array*/
todos.push(task);
/* this is converts the task input to join a JSON string*/
localStorage.setItem('todo', JSON.stringify(todos));
document.getElementById("task").value = "";
SharedWorker();

return false;

/* This function keeps the task permanently displayed on the screen*/
function show() {
    /* This sets the task that was retreived as a variable*/
    var todos = get_todos();

    /* this sets up each task as an unordered list*/
    var html = '<ul>';
    /*this displays a task to the list in the order that it is inputed*/
    for (var i = 0; i < todos.length; i++) {
        /*this also displays the task as a list and creates the button with the "X"*/
        html += '<li>' + todos.[i] + '<button class="remove" id="' +i + '">X</button></li>';

    };
    html += '</ul>';
    /*This displays the task s a list*/
    document.getElementById('todos').innerHTML = html;

}
/*This displays the inputed task when th 'Add Item ' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*This will keep the inputs displayed permantalaly on the screen*/
show();
/*this creates the functionality of removing a todo item from the array */
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /*this looks in the show () how to display a removed item on the screen*/
    show();

    return false;
}
/*this tells the browser how to display the todo
array after an item has been removed */
var button = document.getElementsByClassName('remove');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
};

