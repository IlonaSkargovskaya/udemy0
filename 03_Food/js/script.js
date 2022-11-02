// 1. Создаем табы 


//назначаем глобальный обработчик событий DOMContentLoaded Чтобы скрипт сработал только когда загрузилось DOM-дерево
window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'), //все названия
          tabsContent = document.querySelectorAll('.tabcontent'), //все блоки контента
          tabsParent = document.querySelector('.tabheader__items'); //общий блок всех названий

// 1) скрываем табы
    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active');
        });
    }

    hideTabContent();
    showTabContent();

// 2) Показываем табы

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.add('hide');

        tabs[i].classList.add('tabheader__item_active');
    }    

// 3) вешаем обработчик на блок родителя и проверяем точно ли кликнули по названию, если да - то перебираем все названия и если event.target названия совпадает с item - вызываем обе функции и при этом show (i)
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
    //проверяем что мы кликаем именно в таб, а не в пустое пространство
        if (target && target.classList.contains('tabheader__item')) {

            //перебираем все табы которые лежат в массиве tabs  
            //и ищем тот таб в который кликнул пользователь
            tabs.forEach((item, i) => {

                //если найденный таб совпадает с тем куда ткнули
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    });





//СОЗДАНИЕ ТАЙМЕРА

const deadline = '2022-12-28';
    
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



// СОЗДАНИЕ МОДАЛЬНОГО ОКНА


    //Чтобы на одинаковые кнопки но с разными классами назначить вызов одного и того же модального окна - в html -теги кнопок добавляем data-modal (data- атрибуты по которым затем мы будем находить элементы)

        // при этом в скрытом блоке модального окна в верстке на кнопку которая предполагается что будет закрывать окно - прописываем data-close

        const modal = document.querySelector('.modal'),
                btn_open = document.querySelectorAll('[data-modal]'),
                btn_close = document.querySelector('[data-close]');


        function openModal() {
            modal.classList.toggle('show'); //если класса нет - добавляем show
            document.body.style.overflow = 'hidden'; // запрещаем прокрутку
            //clearInterval(modalTimerId); //если юзер сам открыл - то модалка не покажется
        }

        btn_open.forEach((item) => {
            item.addEventListener('click', openModal);
        });


        //Если мы уже используем какой-то участок кода - Dont Repeat Yourself (не повторяй себя ) - выносим его в отдельную функцию
        function closeModal() {
            modal.classList.toggle('show');
            document.body.style.overflow = ''; //отменяем overflow: hidden
        }


        btn_close.addEventListener('click', closeModal); //передаем функцию закрытия


        //вешаем обработчик на само модальное окно
            modal.addEventListener('click', (event) => {
        //если пользователь кликнул (event.target) на общий блок modal - закрываем модалку
                if (event.target === modal) {
                    closeModal(); 
                }
             });

        //закрытие модалки по кнопке esc
        document.addEventListener('keydown', (event) => {
            //если event.code = Esc и у нас открыто окно модальное (т.е. есть класс show)
            if (event.code === "Escape" && modal.classList.contains('show')) {
                closeModal();
            }
        });


        //модалка должна появляться через опред промежуток времени
        //const modalTimerId = setTimeout(openModal, 3000); //через три секунды появится окно


        //срабатывание модалки при скролле до конца страницы
        function showModalByScroll() {
        //если прокрученная часть + видимый кусок сайта >= всей высоте сайта - значит пользователь долистал до конца
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                openModal();
                window.removeEventListener('scroll', showModalByScroll); //больше модалка не вылезет, тк функция отработает 1 раз и удалит обработчик
            }
        }

        window.addEventListener('scroll', showModalByScroll) ;

   



//Создание карточек на сайте используя классы

    // 1. Создаем класс-конструктор для карточки с теми аргументами которые нам нужны
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            //нужно сказать "Куда" пихать наши карточки - поэтому получаем со страницы parentSelector который потом будем передавать при вызове      
            this.parent = document.querySelector(parentSelector);
            this.transfer = 3.5; //конвертация валюты
            this.changeToILS(); //вызываем метод конвертации
        }
// предположим что из БД нам приходит валюта в долларах - а на страницу надо вывести в шекелях - создаем метод
        changeToILS() {
            this.price = this.price * this.transfer;
        }
// метод для формирования в верстку
        render() {
            //создаем переменную с новым дивом
            const element = document.createElement('div');
            //в новый див помещаем нашу верстку
            element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt} >
                    <h3 class="menu__item-subtitle">${this.title} </h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> ILS/day</div>
                    </div>
                </div>
            `;

            //обращаемся к родителю и перед закрывающимся тегом вставляем новый элемент
            this.parent.append(element);
        }
    }

    //если дальше этот объект нам нигде в коде не нужен будет - мы можем не создавать отдельную переменную для него куда помещали этот объект, а просто прописать new Obj() и дальше вызвать нужный нам метод. В таком варианте потом этот объект будет удален из памяти 
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        29,
        '.menu .container'
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        100,
        '.menu .container'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        79,
        '.menu .container'
    ).render();
    

});