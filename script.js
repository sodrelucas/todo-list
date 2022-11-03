// Declarando variaveis iniciais
const inputItem = document.querySelector(".inputItem");
const addItem = document.querySelector(".addItem");
const list = document.querySelector(".list");

// Função para adicionar item ao clicar no botão
addItem.addEventListener("click", (e) => {
  //   obj que guarda as tasks
  let tasks = {
    name: inputItem.value,
    id: getId(),
  };

  //   Criando variaveis que se tornarão tags html
  let li = document.createElement("li");
  li.id = tasks.id;
  let span = document.createElement("span");
  let btnDelete = document.createElement("button");

  //   Resgatando apenas nome da task
  let task = document.createTextNode(tasks.name);

  //   Criando as tags no HTML
  list.appendChild(li);

  li.appendChild(span);
  span.appendChild(task);

  li.appendChild(btnDelete);
  //   Criando a classe para icone
  btnDelete.classList.add("deleteTask");
  btnDelete.innerHTML = '<i class="fi fi-bs-trash"></i>';

  btnDelete.setAttribute("onClick", "deleteTask(" + tasks.id + ")");

  //   Evitando carregamento da pagina
  e.preventDefault();

  //   zerando o valor do input
  inputItem.value = "";
});

// Função para gerar um novo id para a task
function getId() {
  return Math.floor(Math.random() * 200);
}

// Função para deletar task tendo confirmação da id
function deleteTask(idTask) {
  let confirmation = window.confirm("Delete task?");
  if (confirmation) {
    let idItem = document.getElementById(idTask);
    if (idItem) {
      list.removeChild(idItem);
    }
  }
}
