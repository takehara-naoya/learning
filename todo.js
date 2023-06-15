function addtodo() {
    const insertname = document.getElementById("addname");
    const todoname = document.createElement("div");
    todoname.className = "todo-item";
    todoname.innerText = insertname.value;
    document.body.appendChild(todoname);
    insertname.value = '';
    const todocount = document.getElementsByClassName("todo-item").length;
    const todolist = document.getElementById("No.todo");
    todolist.innerHTML = '未完了のタスク:' + todocount;
    todoname.setAttribute("onclick", "endtask(this)");
}

function endtask(a) {
    a.className = "completed-todo-item";
    const todocount = document.getElementsByClassName("todo-item").length;
    const todolist = document.getElementById("No.todo");
    todolist.innerHTML = '未完了のタスク:' + todocount;
}
