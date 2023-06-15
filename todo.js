// No.78 add start
function adduser() {
    const username = document.getElementById("username");
    const adduser = document.createElement("div");
    adduser.className = "todo-item";
    adduser.innerText = username.value;
    document.body.appendChild(adduser);
// No.79 add start
    username.value = '';
// No.79 add end
// No.80 add start
    const classcount = document.getElementsByClassName("todo-item").length;
    const classcountElement = document.getElementById("classcount");
    classcountElement.innerHTML = '未完了のタスク:' + classcount;
// No.80 add end
// No.81.1 add end
    adduser.className = "completed-todo-item";
    classChange();
// No.81.1 add start
}
// No.78 add end
// No.81.2 add start
function classChange() {
    const classcount = document.getElementsByClassName("completed-todo-item").length;
    const classcountElement = document.getElementById("classcount");
    classcountElement.innerHTML = '未完了のタスク:' + classcount;
}
// No.81.2 add end
