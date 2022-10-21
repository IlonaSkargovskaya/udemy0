/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

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
      promoList = document.querySelector('.promo__interactive-list');

promo.forEach(function(item) {
  item.remove();
});

promoGenre.textContent = 'Драма';

promoBg.style.cssText = "background-image: url('./img/bg.jpg'); ";

//чтобы очистить текущую верстку  в данном случае уже имеющийся список фильмов
// обращаемся к родителю и присваиваем пустую строку ему
promoList.innerHTML = '';


function getMovies(movie) { 

  movie.sort();

  // movie.forEach((film, i) => {
  //   promoList.insertAdjacentHTML('beforeend', `<li class='promo__interactive-item'>${i+1}. ${film}</li>`);
  // });  

  movie.forEach(function(film, i) {
    promoList.innerHTML += `
      <li class="promo__interactive-item">${i + 1} ${film}
          <div class="delete"></div>
      </li>
    `;
  });
}

getMovies(movieDB.movies);









