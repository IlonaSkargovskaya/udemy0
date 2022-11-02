

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     //Методы для personalMovieDB
//     start: function(){
//       personalMovieDB.numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

//       //Првоерка что пользователь ввел не число - isNaN вернет true (то есть все что угодно кроме числа)
//       while (personalMovieDB.numberOfFilms == '' || personalMovieDB.numberOfFilms == null || isNaN(personalMovieDB.numberOfFilms)) {
//         personalMovieDB.numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
//       }
//     },

//     rememberMyFilms: function() {
//       for (let i = 0; i < 2; i++) {
//         const lastOfFilms = prompt('Один из последних просмотренных фильмов');
//         const gradeOfFilms = prompt('На сколько оцените его?');

//         if((lastOfFilms != null && gradeOfFilms != null && lastOfFilms != '' && gradeOfFilms != '' && lastOfFilms.length < 50 && gradeOfFilms.length < 50)){
//             personalMovieDB.movies[lastOfFilms] =  gradeOfFilms;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--; //вернем пользователя на 1 итерацию (шаг) назад и заново задаем вопросы
//         }
//       }
//     },

//     detectPersonalLevel: function() {
//       if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
//         console.log('Мало смотрели');
//       } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//           console.log('Классический зритель ');
//       } else if (personalMovieDB.count >= 30){
//           console.log('Киноман ');
//       } else {
//           console.log('Ошибка');
//       }
//     },

//     showMyDB: function(hidden) {
//       if ( !hidden) {
//         console.log(personalMovieDB);
//       } else {
//           console.log('error');
//       }
//     },

//     toggleVisibleMyDB: function() {
//       if (personalMovieDB.privat) {
//         personalMovieDB.privat = false;
//       } else {
//         personalMovieDB.privat = true;
//       }
//     },

//     writeYourGenres: function() {
//       for (let i = 1; i <= 3; i++) {
//         let genre = prompt(`Ваш любимый жанр ${i} ?`).toLowerCase();

//         if (genre == null || genre === '') {
//           console.log('не введен жанр');
//           i--;
//         } else {
//           personalMovieDB.genres[i - 1] = genre; //чтобы начать не с 0 а с 1
//         } 

//       } 
//       //выводим на экран под какими номерами какие жанры
//       personalMovieDB.genres.forEach(function(item, i){
//         console.log(`Любимый жанр #${i + 1} - это ${item}`);
//       });

//       },

// };

// personalMovieDB.start();

// // personalMovieDB.rememberMyFilms();

// // personalMovieDB.detectPersonalLevel();

// // personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.writeYourGenres();

// // personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);


function hello2(name) {
    console.log(`Привет, ${name}`);
}

hello2('Василий');
