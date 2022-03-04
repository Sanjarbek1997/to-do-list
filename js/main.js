const elForm = document.querySelector(".form");
const elInput = document.querySelector(".form__input");
const elList = document.querySelector(".list");
const elDelete = document.querySelector(".delete-btn");

let todos = [];

elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputValue = elInput.value.trim();
  if (inputValue.length < 1) {
    inputValue = "Akasi nimadir desangizchi!!!";
  }
  let todo = {
    id: todos.length + 1,
    title: inputValue,
  };

  todos.push(todo);

  elList.innerHTML = "";
  for (let item of todos) {
    elList.classList.remove("d-none");
    elDelete.classList.remove("d-none");
    let newLi = document.createElement("li");

    newLi.textContent = item.id + ": " + item.title;
    elList.appendChild(newLi);
  }
  elInput.value = "";
});
elDelete.addEventListener("click", function (e) {
  e.preventDefault();
  elList.innerHTML = "";
  todos = [];
  elList.classList.add("d-none");
  elDelete.classList.add("d-none");
});
