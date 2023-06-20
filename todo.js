function addtodo() {
    const todonameFiled = document.getElementById("todo-name-Filed");
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    todoItem.innerText = todonameFiled.value;
    document.body.appendChild(todoItem);
    todonameFiled.value = '';
    const todocount = document.getElementsByClassName("todo-item").length;
    const todolist = document.getElementById("No.todo");
    todolist.innerHTML = '未完了のタスク:' + todocount;
    todoItem.setAttribute("onclick", "completedtask(this)");
}

//クラス名が"todo-item"なら"completed-todo-item"を入れ、"completed-todo-item"なら"todo-item"を入れる。
function completedtask(a) { 
   if (a.className == "todo-item") {
        a.className = "completed-todo-item";
   }
   else {
        a.className = "todo-item";
   }
   const todocount = document.getElementsByClassName("todo-item").length;
   const todolist = document.getElementById("No.todo");
   todolist.innerHTML = '未完了のタスク:' + todocount;
}
