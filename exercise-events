// Accessing an object in an array
const box = document.getElementById("box");


box.addEventListener("click", function() {    
    const backgroundColor = box.style.backgroundColor;

    if (backgroundColor === "red") {
        box.style.backgroundColor = "lightblue";
    } else {
        box.style.backgroundColor = "red";
    }
})

const btn = document.getElementById('button');
const message = document.getElementById('message');

btn.addEventListener("mouseover", function(){
    message.classList.remove('hidden');
    message.classList.add('visible');


});

btn.addEventListener("mouseleave", function(){
    message.classList.remove("visible");
    message.classList.add("hidden");
});


document.getElementById('addTodo').addEventListener("click", function() {
    const newTodoText = document.getElementById('newTodoText').value;
    const newLi = document.createElement("Li");
    newLi.textContent = newTodoText;
    document.getElementById('todoList').appendChild(newLi);
})

