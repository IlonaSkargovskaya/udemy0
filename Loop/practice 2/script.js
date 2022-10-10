// const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };


// for (let i = 0; i < 2; i++) {
//     const lastOfFilms = prompt('Один из последних просмотренных фильмов');
//     const gradeOfFilms = prompt('На сколько оцените его?');
    
//     if((lastOfFilms != null && gradeOfFilms != null && lastOfFilms != '' && gradeOfFilms != '' && lastOfFilms.length < 50 && gradeOfFilms.length < 50)){
//         personalMovieDB.movies[lastOfFilms] =  gradeOfFilms;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--; //вернем пользователя на 1 итерацию (шаг) назад и заново задаем вопросы
//     }
// }

// if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
//     console.log('Мало смотрели');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Классический зритель ');
// } else if (personalMovieDB.count >= 30){
//     console.log('Киноман ');
// } else {
//     console.log('Ошибка');
// }

// console.log(personalMovieDB);

let a = [2, 3, 4, 5];
let result = 1;

for (let i = 0; i < a.length; i++) {
    result = result * a[i];
};
console.log(result);
