/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

//Помещаем всю нашу работу в событие DOMContentLoaded где говорим что скрипт запускается только после полной загрузки верстки
document.addEventListener('DOMContentLoaded', ()=> {
  
  
  const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const promo = document.querySelectorAll('.promo__adv img'),
      promoGenre = document.querySelector('.promo__genre'),
      promoBg = document.querySelector('.promo__bg'),
      promoList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      addInput = addForm.querySelector('.adding__input'),
      checkbox = addForm.querySelector('[type="checkbox"]');



//отслеживаем нажатие на форме кнопки submit
addForm.addEventListener('submit', (event)=>{
  event.preventDefault(); //отменяем перезагрузку страницы

  let newFilm = addInput.value; //проверяем что ввел пользователь в input
  const favorite = checkbox.checked; // здесь мы получим либо true если галочка отмечена либо false если не отмечена

  //проверяем пустое ли поле ввода
  if (newFilm) {

    // если длина строки введенной пользователем >21 обрезаем и вставляем ...
    if (newFilm.length > 21) {
      newFilm = `${newFilm.substring(0, 21)} ...`;
    }

    
    if (favorite) {
      console.log("Добавляем любимый фильм");
    } 
    
    //обращаемся к массиву фильмов и вставляем в конец через метод push строку
    movieDB.movies.push(newFilm);

    // сортируем по алфавиту через функцию
    sortArr(movieDB.movies); 

    //тк у нас появляется новый фильм - то мы должны заново перебрать массив и добавить к нему классы и нумерование и из прошлого задания просто берем готовую функцию и тут ее вызываем
    getMovies(movieDB.movies, promoList);
  }


  //очищаем нашу форму
  addForm.reset(); // или через событие event.target.reset();
  
});




//movie - это текущие фильмы с которыми работает функция и parent - родительский блок
function getMovies(movie, parent) { 

  

  //чтобы очистить уже имеющийся список фильмов
  // обращаемся к родителю и присваиваем ему пустую строку 
  parent.innerHTML = '';

  
  sortArr(movie); //сортируем по алфавиту

  movie.forEach(function(film, i) {
    parent.innerHTML += `
      <li class="promo__interactive-item">${i + 1} ${film}
          <div class="delete"></div>
      </li>
    `;
  });


  // при нажатии на корзину - удалить из объекта
  // нужно перебрать все элементы списка где есть корзинка 
  // нам нужно 2 аргумента: каждая корзинка + порядковый номер индекс
  document.querySelectorAll('.delete').forEach((btn, i) => {

    // при нажатии на корзинку
    btn.addEventListener('click', () => {
      // удали родительский элемент
      btn.parentElement.remove();
      // также удали его из массива фильмов (номер по порядку, кол-во элементов)
      movieDB.movies.splice(i, 1);


      //применяем рекурсию - вызов функции создания нового списка фильмов заново, чтобы нумерация не исчезала
      getMovies(movie, parent);
    });
  });

}


// Function Expression для удаления рекламы
const deleteAdv = (arr) => {
 arr.forEach(function(item) {
   item.remove();
 });
};



// Function Expression для других изменений
const makeChanges = () => {
 promoGenre.textContent = 'Драма';

 promoBg.style.cssText = "background-image: url('./img/bg.jpg'); ";
};



// Function Expression для сортировки
const sortArr = (arr) => {
 arr.sort();
};


// Вызываем все функции внизу ПОСЛЕ того как они были объявлены
deleteAdv(promo);
makeChanges();
getMovies(movieDB.movies, promoList);



});


















