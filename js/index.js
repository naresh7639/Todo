const AddTodo = () => {
    var Text = document.getElementById("MyInput").value.trim()
    var li = document.createElement("li")
    var remove = document.createElement("delete")
    var textNode = document.createTextNode(Text)
    var deleteNode = document.createTextNode("Remove")

    //style
    li.style.display = "flex"
    li.style.justifyContent = "space-between"
    remove.className = "remove-btn"

    remove.appendChild(deleteNode)
    li.appendChild(textNode)
    li.appendChild(remove)

    remove.addEventListener('click', function () {
        removeTodo(li);
    });
    if (Text !== "") {
        document.getElementById("myUl").appendChild(li)
        document.getElementById("MyInput").value = ""
    }
    else {
        alert("Enter Text")
    }

}
const removeTodo = (item) => {
    console.log(item,"itemcheck2")
    item.remove()
}