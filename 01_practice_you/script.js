//checkbox

const checkbox = document.querySelector('#chk');

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        console.log('выбран');
    } else {
        console.log('Не выбран');
    };
});

//radiobutton

const radio = document.querySelectorAll("input[name='r1']"),
      result = document.querySelector('#res');

const findSelected = () => {
    const selected = document.querySelector("input[name='r1']:checked").value;
    result.innerHTML = `Выбран элемент: ${selected}`;
};

radio.forEach(item => {
    item.addEventListener('change', findSelected);
});


//to do list

const todoList = document.querySelector('#todo-list'),
      todoForm = document.querySelector('#todo-form'),
      todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();

    //получаем введенный текст из инпута
    const taskText = todoInput.value;

    //создаем новый тег li Через разметку
    const li = `<li>${taskText}</li>`;

    //добавляем разметку на страницу
    todoList.insertAdjacentHTML('beforeend', li);
    
}
    
