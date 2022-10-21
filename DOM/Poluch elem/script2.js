//Изменяем стили

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = "blue";
box.style.width = '300px';

//обращаемся ко второй кнопке
btns[1].style.borderRadius = '50%';

//Чтобы передать сразу несколько CSS-свойств - пишем .cssText
box.style.cssText = " background-color: blue; width: 500px; ";


//Если нужно над несколькими элементами провести одно и то же действие - используем forEach 

hearts.forEach(item => {
  item.style.backgroundColor = "green";
});



//Создаем новые элементы

const div = document.createElement('div'); //сейчас он существует только внутри JS

//Работаем с добавлением\изменением классов

div.classList.add('black');




      //Добавляем элемент на страницу

//before - перед тегом-родителем
//prepend - внутрь после открывающегося тега родителя
//append - перед закрывающимся тегом родителя
//after - после закрывающегося тега родителя


document.body.append(div); //берем body как родителя и добавляем наш див прямо перед его закрывающимся тегом

// получаем элемент и сразу же перед ним ставим наш нвоый блок div
document.querySelector('.wrapper').before(div);

//если у нас уже есть константа с полученным элементом то обращаемся через нее
wrapper.prepend(div);

//аналог .before - (какой, перед каким)
// wrapper.insertBefore(div, hearts[0]);




//Удаление элементов

circles[0].remove();
// старый вариант .removeChild()




//Замена элементов

hearts[0].replaceWith(circles[0]); //первым пишем какой элемент заменить, 
//вторым - на какой
// старый вариант .replaceChild(на какой поменять, что меняем)




//Редактируем элементы

//Добавляем текст или теги внутрь элемента
div.innerHTML = '<h1>Hello world!</h1>';

//очистить существующую верстку в блоке
div.innerHTML = ""; 

//получить текущие свойства
div.innerHTML


//Без html-тегов
// div.textContent = 'Hello';



//Комбинация методов

//Элемент над которым работаем, два аргумента (afterbegin/beforebegin/afterend/beforeend, html-который хотим вставить)

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');



//