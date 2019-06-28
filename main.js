const add = document.getElementById("buttonAdd");
const remove = document.getElementById("buttonRemove");
const clear = document.getElementById("buttonClear");
const listItems = document.getElementsByTagName("li");
const ul = document.getElementById("list");
let taskNumber = 1;

const addTask = () => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`Task number ${taskNumber}`));
    taskNumber++;
    ul.appendChild(li);
}
const removeLastTask = () => {
    if (listItems.length > 0) {
        const lastTask = listItems[listItems.length - 1];
        list.removeChild(lastTask);
        taskNumber--;
    }
}
const clearTasks = () => {
    ul.innerHTML = "";
    taskNumber = 1;
}
add.addEventListener("click", addTask);
remove.addEventListener("click", removeLastTask);
clear.addEventListener("click", clearTasks);