window.onload = function () { //タブ起動時にlocalstrageを読み込み、データを"stock_todo"に挿入
    savedtodo = localStorage.getItem("todo-key");
    document.getElementById("stock_todo").innerHTML = savedtodo;
    const todocount = document.getElementsByClassName("todo-item").length;
    const todolist = document.getElementById("No.todo");
    todolist.innerHTML = '未完了のタスク:' + todocount;
}

function addtodo() {
    const todonameFiled = document.getElementById("todo-name-Filed");
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    todoItem.innerText = todonameFiled.value;
    document.getElementById("stock_todo").appendChild(todoItem); //"stock_todo"に"todo-item"を追加
    todonameFiled.value = '';
    const todocount = document.getElementsByClassName("todo-item").length;
    const todolist = document.getElementById("No.todo");
    todolist.innerHTML = '未完了のタスク:' + todocount;
    todoItem.setAttribute("onclick", "completedtask(this)");
    let savedtodo = document.getElementById("stock_todo").innerHTML; //"stock_todo"のHTML要素を取得し、savedtodoに挿入
    localStorage.setItem("todo-key", savedtodo); //localstrageに保存
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
