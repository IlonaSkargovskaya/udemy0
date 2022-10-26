// 1. Создаем табы на проекте
// Нам нужно при клике на правое меню "Выберите стиль питания" показывать новые картинки и скрывать остальные, а также менять описание на желтой плашке


//назначаем глобальный обработчик событий DOMContentLoaded Чтобы скрипт сработал только когда загрузилось DOM-дерево
window.addEventListener('DOMContentLoaded', () => {

    //получаем сначала все названия из блока выбора стиля питания
const tabs = document.querySelectorAll('.tabheader__item'),
    //получаем весь контент по каждому табу
      tabsContent = document.querySelectorAll('.tabcontent'),
    //получаем блок родителя у табов чтобы затем работать с детьми
      tabsParent = document.querySelector('.tabheader__items');


 // сначала нужно скрыть все ненужные табы 
 
function hideTabContent() {
    tabsContent.forEach((item) => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active');
    });
}


 // потом показывать табы. Тк у нас tabsContent - это псевдомассив с контентом - нам нужно в функцию передавать индекс элемента который мы хотим показывать

 //по умолчанию мы хотим показывать всегда первый "Фитнес" - поэтому по умолчанию i = 0, когда в функцию передаются другие элементы - мы их выводим, если функция - пустая то i[0]
 function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
 }

 hideTabContent();     
 showTabContent();


 //дальше использовать делегирование событий и назначить родителю событие по клику на табы спарва
 tabsParent.addEventListener('click', (event) => {
    //чтобы постоянно не прописывать event.target - закинем его в переменную target
    const target = event.target;

    //проверяем что мы кликаем именно в таб, а не в пустое пространство
    if (target && target.classList.contains('tabheader__item')) {
        
        //когда мы кликаем на определенный пункт - мы должны получить его номер в массиве tabs и затем вызвать функцию showTabContent куда передать его индекс. То есть связать наши табы и контент через перебор массива tabs

        //перебираем все табы которые лежат в массиве tabs  
        //и ищем тот таб в который кликнул пользователь
        tabs.forEach( (item, i) => {
            //когда мы нашл
            if (target == item) {
                hideTabContent();     
                showTabContent(i);
            }
        });
    };
 });

});