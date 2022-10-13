let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    //Првоерка что пользователь ввел не число - isNaN вернет true (то есть все что угодно кроме числа)
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastOfFilms = prompt('Один из последних просмотренных фильмов');
        const gradeOfFilms = prompt('На сколько оцените его?');
        
        if((lastOfFilms != null && gradeOfFilms != null && lastOfFilms != '' && gradeOfFilms != '' && lastOfFilms.length < 50 && gradeOfFilms.length < 50)){
            personalMovieDB.movies[lastOfFilms] =  gradeOfFilms;
            console.log('done');
        } else {
            console.log('error');
            i--; //вернем пользователя на 1 итерацию (шаг) назад и заново задаем вопросы
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
        console.log('Мало смотрели');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Классический зритель ');
    } else if (personalMovieDB.count >= 30){
        console.log('Киноман ');
    } else {
        console.log('Ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if ( !hidden) {
        console.log(personalMovieDB);
    } else {
        console.log('error');
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {

    for (let i = 0; i < 3; i++) {
        let answerGenre = prompt(`Ваш любимый жанр ${i} ?`);
        personalMovieDB.genres[i] = answerGenre;
    }
    
}

console.log(personalMovieDB);
writeYourGenres();

