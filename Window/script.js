//window - окно браузера
//screen - монитор
//document - HTML-страничка

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

const width = box.scrollWidth; // полоса прокрутки не включается
const height = box.scrollHeight;

console.log(width, height);


btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px'; // по клику раскрываем всю высоту блока
    console.log(box.scrollTop); // сколько сверху проскроллил пользователь 
});

console.log(box.getBoundingClientRect().top); //50
console.log(box.getBoundingClientRect()); //получаем координаты объекта
// при этом right будет от левой границы до конца правой границы элемента
// left - от правого края окна до левой границы объекта
// top - от верхнего края окна до верхней границы элемента
// bottom - height + top (вниз ведем)





//getComputedStyle() - получаем уже примененные стили + МОЖНО получить стили псевдоэлементов, но перезаписывать их нельзя

const style = window.getComputedStyle(box);
console.log(style.display);


console.log(document.documentElement.scrollTop); //сколько пикселей именно на странице пролистал пользователь

document.documentElement.scrollTop = 0; //проскролленная страница перелестнется на начало и так обычно делают стрелку вверх на сайтах

//перемещение по странице
window.scrollBy(0, 400);
window.scrollTo(0, 400);