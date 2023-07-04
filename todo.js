window.onload = function () { //タブ起動時にlocalstrageを読み込み、データを"stock_todo"に挿入
    savedtodo = localStorage.getItem("todoKey");
    document.getElementById("stockTodo").innerHTML = savedtodo;
    const todoCount = document.getElementsByClassName("todoItem").length;
    const todoList = document.getElementById("numberTodo");
    todoList.innerHTML = '未完了のタスク:' + todoCount;
}

function setForm(todoName) { //編集したタスクに名前と各ボタンを付与する
    const todoItem = document.createElement("div");
    todoItem.className = "todoItem";
    todoItem.innerText = todoName;
    const deleteButton = document.createElement("button"); 
    deleteButton.innerText = "削除";
    deleteButton.setAttribute("onclick", "deleteTask(this)"); 
    todoItem.appendChild(deleteButton);
    const editButton = document.createElement("button"); 
    editButton.innerText = "編集";
    editButton.setAttribute("onclick", "editTask(this)"); 
    todoItem.appendChild(editButton); 
    return todoItem;  //実行した値を返す
}

function addTodo() {
    const todoNameFiled = document.getElementById("todoNameFiled");
    const todoItem = document.createElement("div");
    todoItem.className = "todoItem";
    todoItem.innerText = todoNameFiled.value;
    document.getElementById("stockTodo").appendChild(todoItem); //"stockTodo"に"todoItem"を追加
    todoNameFiled.value = '';
    const todoCount = document.getElementsByClassName("todoItem").length;
    const todoList = document.getElementById("numberTodo");
    todoList.innerHTML = '未完了のタスク:' + todoCount;
    todoItem.setAttribute("onclick", "completedtask(this)");
    let saveTodo = document.getElementById("stockTodo").innerHTML; //"stockTodo"のHTML要素を取得し、saveTodoに挿入
    localStorage.setItem("todoKey", saveTodo); //localstrageに保存
    const deleteButton = document.createElement("button"); //削除ボタンの追加
    deleteButton.innerText = "削除";
    deleteButton.setAttribute("onclick", "deleteTask(this)"); 
    todoItem.appendChild(deleteButton);
    const editButton = document.createElement("button"); //編集ボタンの追加
    editButton.innerText = "編集";
    editButton.setAttribute("onclick", "editTask(this)"); 
    todoItem.appendChild(editButton);
    saveTodoLocalstorage();
}

//クラス名が"todoItem"なら"completeTodoItem"を入れ、"completeTodoItem"なら"todoItem"を入れる。
function completedtask(todoItem) { 
   if (todoItem.className == "todoItem") {
        todoItem.className = "completeTodoItem";
   }
   else {
        todoItem.className = "todoItem";
   }
   const todoCount = document.getElementsByClassName("todoItem").length;
   const todoList = document.getElementById("numberTodo");
   todoList.innerHTML = '未完了のタスク:' + todoCount;
}

function deleteTask(deleteButton) { //該当タスクを削除した後、タスクの再計算とlocalstrageの更新メソッドを呼ぶ
    const todoItem = deleteButton.parentNode;
    todoItem.remove();
    updateTodoCount();
    saveTodoLocalstorage();
}

function updateTodoCount() { //タスク数の再計算を行う
    const todoCount = document.getElementsByClassName("todoItem").length + document.getElementsByClassName("editItem").length;
    const todoList = document.getElementById("numberTodo");
    todoList.innerHTML = '未完了のタスク: ' + todoCount;
}

function saveTodoLocalstorage() { //削除によって更新されたlocalstrageを保存
    const saveTodo = document.getElementById("stockTodo").innerHTML;
    localStorage.setItem("todoKey", saveTodo);
}

function editTask(editButton){ //編集を押したタスクを、編集可能な状態にする
    const todoItem = editButton.parentNode;
    const todoName = todoItem.firstChild.textContent; // 編集前のタスク名を取得
    let editNameFiled = document.createElement("input");
    editNameFiled.id = "editData";
    editNameFiled.value = todoName; //初期表示時に、元タスクを表示
    editNameFiled.dataset.todoName = todoName; //編集前のタスク名を保存
    let editItem = document.createElement("div"); 
    editItem.className = "editItem";
    editItem.appendChild(editNameFiled); 
    let editSaveButton = document.createElement("button");
    editSaveButton.innerText = "保存"; 
    editSaveButton.setAttribute("onclick", "editSave(this)");
    editItem.appendChild(editSaveButton);
    let editCancelButton = document.createElement("button");
    editCancelButton.innerText = "取消";
    editCancelButton.setAttribute("onclick", "cancelEdit(this)");
    editItem.appendChild(editCancelButton);
    editButton.parentNode.replaceWith(editItem);

}

function editSave(editEnd){ //タスクの上書きをする
    const editInputName = document.getElementById("editData");
    let editItem = setForm(editInputName.value);
    editEnd.parentNode.replaceWith(editItem);
    editItem.setAttribute("onclick", "completedtask(this)");
    updateTodoCount();    
    saveTodoLocalstorage();
    
}

function cancelEdit(cancelButton) { //取消を押下で編集前のタスクを表示
    const editItem = cancelButton.parentNode;
    const todoName = editItem.firstChild.dataset.todoName; //編集前のタスク名を取得
    let todoItem = setForm(todoName);
    editItem.replaceWith(todoItem);
    todoItem.setAttribute("onclick", "completedtask(this)");
    updateTodoCount();
    saveTodoLocalstorage();

}
