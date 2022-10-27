// 1. Создаем табы на проекте
// Нам нужно при клике на правое меню "Выберите стиль питания" показывать новые картинки и скрывать остальные, а также менять описание на желтой плашке


//назначаем глобальный обработчик событий DOMContentLoaded Чтобы скрипт сработал только когда загрузилось DOM-дерево
window.addEventListener('DOMContentLoaded', () => {

    //Tabs

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

//СОЗДАНИЕ ТАЙМЕРА

const deadline = '2021-09-28';
    
    //функция определяющая разницу между дедлайном и текущим временем
    function getTimeRemaining(endtime) {
        //Если дата уже прошла - выводим 00
        let days, hours, minutes, seconds;

        //получаем разницу между датой дедлайна и текущей датой
        const t = Date.parse(endtime) - Date.parse(new Date());

        //тк в таймере есть дни, часы, минуты, секунды - нужно привести наши миллисекунды в этот вид, создаем новые переменные

        //для этого общее кол-во оставшихся ms мы должны разделить на кол-во ms в одном дне и округлить    

        //1 секунда = 1000 ms
        //1 минута = 1000 * 60
        //1 час = 1000 * 60 * 60
        //1 день = 1000 * 60 * 60 * 24
        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)); //кол-во дней оставшихся
            hours = Math.floor((t / (1000 * 60 * 60) % 24)); 
            minutes = Math.floor((t / 1000 / 60) % 60); 
            seconds = Math.floor((t / 1000) % 60);
        }
         

        //чтобы эти переменные можно было использовать снаружи функции - возвращаем в объекте
        return {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
        };
    }

    //функция добавляющая ноль перед цифрой если меньше 10
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }


    //функция которая установит наши часы на сайт, нам нужен блок timer из верстки и дедлайн который мы ему передадим

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);

                //чтобы запустить текущую дату - вызовем функцию сами
                updateClock();

        // функция, которая будет обновлять таймер каждую секунду
        function updateClock() {
            //получаем рассчет того времени который остался на данную секунду
            //передаем сюда функцию которую делали и аргумент дедлайна
            const t = getTimeRemaining(endtime);

            //записываем результаты на страницу
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            //остановка таймера когда дедлайн наступил или ушел в минус
            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

setClock('.timer', deadline);









});