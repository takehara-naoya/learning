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
    const deleteButton = document.createElement("button"); //削除ボタンの追加
    deleteButton.innerText = "削除";
    deleteButton.setAttribute("onclick", "deleteTask(this)"); 
    todoItem.appendChild(deleteButton);
    savedtodolocalstorage();
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

function deleteTask(b) { //該当タスクを削除した後、タスクの再計算とlocalstrageの更新メソッドを呼ぶ
    const todoItem = b.parentNode;
    todoItem.remove();
    updatetodocount();
    savedtodolocalstorage();
}

function updatetodocount() { //タスク数の再計算を行う
    const todoCount = document.getElementsByClassName("todo-item").length;
    const todoList = document.getElementById("No.todo");
    todoList.innerHTML = '未完了のタスク: ' + todoCount;
}

function savedtodolocalstorage() { //削除によって更新されたlocalstrageを保存
    const savedtodo = document.getElementById("stock_todo").innerHTML;
    localStorage.setItem("todo-key", savedtodo);
}
