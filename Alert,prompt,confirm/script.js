// alert('Hello');

//const result = confirm("Are you here?");
// ok or cancel
// результат true или false запишется в переменную

//prompt

// const answer = prompt('Вам есть 18?', "подсказка пользователю");
// console.log(answer); //выводим результат в консоль
//если поставить +prompt(..) - то придет значение в виде цифры

//Пользователь вводит ответ вручную и нам это передается в консоль

// typeof() - узнаем тип данных
//Всяинфа от пользователя приходит в виде строк

//Запишем ответы в массив
const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

console.log(typeof(answers)); //object

// При этом массив создастся без перезаписи всей страницы, тк prompt, alert и confirm выполняются ДО отрисовки

console.log(typeof(null)); //object - официально признанная ошибка