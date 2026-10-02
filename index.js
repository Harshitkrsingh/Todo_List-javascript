
let inp = document.getElementById("input");
let btn = document.getElementById("btn");
let alltodo = document.querySelector(".alltodo");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function removetodo(id) {

  let div = document.getElementById(id);
  div.remove();

  todos = todos.filter((todo) => todo.id !== id);

  localStorage.setItem("todos", JSON.stringify(todos));
}

function marktodo(id) {

  let div = document.querySelector(`#check-${id}`);
  div.previousElementSibling.classList.toggle("completed");
  let todo=todos.find(todo => todo.id===id)
  todo.completed=!todo.completed
  localStorage.setItem("todos",JSON.stringify(todos))

}

function displaytodo(todo) {

  let div = document.createElement("div");

  div.id = todo.id;

  div.innerHTML = `
    <div class="singletodo">
      <p class="${todo.completed ? "completed":""}">${todo.text} </p>

      <input
        type="checkbox"
        id="check-${todo.id}"
        ${todo.completed ? "checked":""}
        onclick="marktodo(${todo.id})"
      >

      <button
        onclick="removetodo(${todo.id})"
      >
        Remove Todo
      </button>
    </div>
  `;

  alltodo.appendChild(div);
}

btn.addEventListener("click", (e) => {

  e.preventDefault();

  if (inp.value.trim() === "") return;

  let todo = {
    id: Date.now(),
    text: inp.value,
    completed: false,
  };

  todos.push(todo);

  displaytodo(todo);

  localStorage.setItem("todos", JSON.stringify(todos));

  inp.value = "";
});

todos.forEach((todo) => {
  displaytodo(todo);
});
