const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const lastOfFilms = prompt('Один из последних просмотренных фильмов');
const gradeOfFilms = prompt('На сколько оцените его?');


personalMovieDB.movies[lastOfFilms] =  gradeOfFilms;
console.log(personalMovieDB);
