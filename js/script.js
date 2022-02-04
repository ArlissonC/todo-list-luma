// Mudar tema
const iconTheme = document.querySelector('.theme');
iconTheme.addEventListener('click', () => {
    document.body.classList.toggle('light')
    if (document.body.classList.contains('light')) {
        iconTheme.src = 'images/icon-moon.svg'
    } else {
        iconTheme.src = 'images/icon-sun.svg'
    }
});

// Tarefas restates
const itemCount = document.querySelector('.count span');
itemCount.innerText = document.querySelectorAll('.list').length;

// Variáveis
const btnAdd = document.querySelector('.todo-input button');
const todoInput = document.getElementById('todo-input');
const todo = document.querySelector('.todos ul');
const itemID = document.querySelector('.filters input[type="radio"]:checked');

btnAdd.addEventListener('click', () => {
    if(todoInput.value.length > 0){
        addTodos(todoInput.value);
        todoInput.value = '';
    }
});

// Coleta o value do input
todoInput.addEventListener('keypress', e => {
  if (e.charCode == 13 && todoInput.value.length > 0) {
      addTodos(todoInput.value);
      todoInput.value = '';
  }
});

// Adicionar as tarefas
const addTodos = text => {
    const todoLi = document.createElement('li');
    todoLi.innerHTML = 
    `
    <label class="list">
    <input class="checkbox" type="checkbox"> 
    <span class="text">${text}</span>
    </label>
    <span class="remove"></span>
    `;
    if(itemID.id === 'completed'){
      todoLi.classList.add('hidden');
    }
    todo.append(todoLi);
    updateCount(1);
}

// Contagem tarefas
const updateCount = todo => {
  itemCount.innerText = +itemCount.innerText + todo;
}

// Remover tarefa
const removeTodos = todo => {
  todo.remove();
  updateCount(-1);
}
todo.addEventListener('click', e => {
  if (e.target.classList.contains('remove')) {
      removeTodos(e.target.parentElement);
  }
});

// Filtros
document.querySelectorAll('.filters input').forEach(radio => {
  radio.addEventListener('change', e => {
      filterTodo(e.target.id);
  });
});

// Verifica o ID de cada filtro
const filterTodo = id => {
  const allItems = document.querySelectorAll('li');
  switch (id) {
    case 'all':
    allItems.forEach(todo => {
    todo.classList.remove('hidden');
    });  
    break;
    case 'active':
    allItems.forEach(todo => {
      if (todo.querySelector('input').checked){
        todo.classList.add('hidden')
      } else {
        todo.classList.remove('hidden')
      }
    });
    break;
    default:
    allItems.forEach(todo => {
      if (todo.querySelector('input').checked){
          todo.classList.remove('hidden')
      } else {
          todo.classList.add('hidden')
      }
    });
    break;
  }
}