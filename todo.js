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
    adduser.setAttribute("onclick", "classChange(this)");
// No.81.1 add start
}
// No.78 add end
// No.81.2 add start
function classChange(a) {
    a.className = "completed-todo-item";
    const classcount = document.getElementsByClassName("todo-item").length;
    const classcountElement = document.getElementById("classcount");
    classcountElement.innerHTML = '未完了のタスク:' + classcount;
}
// No.81.2 add end
