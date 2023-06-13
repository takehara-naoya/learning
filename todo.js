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
}
// No.78 add end


