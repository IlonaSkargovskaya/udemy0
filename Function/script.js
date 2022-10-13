//Функции

//пишем в виде CamelCase - глаголом

// //анонимные функции вызываются только здесь и сейчас и к ней нельзя будет потом обратиться

// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);    
//     num = 10;
// }

// showFirstMessage('Hello world');
// console.log(num);  


// Аргументы функции

// const usdCurr = 28;
// const euroCurr = 32;

// function convert (amount, curr) {
//     console.log(curr * amount);
// }

//в данном варианте мы передаем 1 параметру число amount, а второму присваиваем значение переменной UsdCurr куда могут поступать любые данные отовсюду
// convert(30, usdCurr);
// convert(30, euroCurr);


//Замыкание функции
// - сама функция со всеми внешними переменными которые ей доступны
// если функция не нашла переменную внутри себя - она пошла наверх искать





//Function Declaration - можно вызывать до того как объявлена функция и использовать в любом месте страницы

// function nerTime() {
//     console.log('hello');
// }

//Function Expression - функциональное выражение = присваиваем переменной функцию и тогда ее можно вызвать только тогда, когда работа всего кода дошла до нее И обязательно ставить в конце точку с запятой, тк создана перменная

// const logger = function() {
//     console.log('Hello');
// };

// logger();




// Стрелочные функции
// не имеет своего контекста вызова.

// const calc = (a,b) => {
//     return a + b;
// };

// console.log(calc(1, 5));






//return - возвращает значение работы функции во внешний мир. Оно всегда нужно когда нужно получить итоговый результат функции и использовать его дальше где-то
// - как только функция находит слово - она завершается


// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return (amount * curr);
// }

// function promotion (result) {
//     console.log(result * discount);
// }

// //сначала передаем аргументы в функцию convert при вызове, return вернет нам результат работы этой функции а затем этот результат мы используем как аргумент result функции promotion
// promotion(convert(10, usdCurr));


// function test() {
//     for (let i = 0; i < 5; i++){
//         console.log(i);
//         if(i === 3) {
//             return; // можно не break писать а завершить сразу всю функцию, при этом функция вернет undefined
//         }
//     }
//     console.log('Done');
// }

// test();


// function getMathResult (num, count) {
//    let result = '';

//    for (let i = 0; i < count; i++) {
        
//    }
// }

// console.log(getMathResult(4, 3));



//callback-функции
// - функция, которая будет выполнена после того как другой код завершит свою работу
// например только после клика - выполняется функция

function learnJS(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}

function done() {
  console.log('Я прошел урок');
}

//callback как аргумент передаем без круглых скобок, тк в основной функции мы ее вызываем в определенный момент, а не при передаче аргументов в конце, поэтому там мы просто указываем ее им без круглых скобок
learnJS('JavaScriot', done);





// - Задание 1
// Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// function getCubeSquare(a) {
//    if (typeof(a) !== 'number' || a < 0 || !Number.isInteger(a)) {
//       console.log('При вычислении произошла ошибка');
//    } else { 
//       let area = 6 * Math.pow(a, 2);
//       let volume = Math.pow(a, 3);
//       console.log(`Объем куба: ${volume}; площадь всей поверхности: ${area}`);
//    }
// }

// getCubeSquare();


// // - Задание 2
// // 2) Напишите функцию, которая будет определять номер купе, по переданному ей номеру места.

// function getCoupeNumber(num) {
//       if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)){
//          console.log("Ошибка. Проверьте правильность введенного номера места");
//       } else if (num === 0 || num > 36) {
//          console.log("Таких мест в вагоне не существует");
//       } else {
//          Math.ceil(num / 4);
//       // } else if (num >= 1 && num < 5){
//       //    console.log(1);
//       // } else if (num >= 5 && num < 9){
//       //    console.log(2);
//       // } else if (num >= 9 && num < 13){
//       //    console.log(3);
//       // } else if (num >= 13 && num < 17){
//       //    console.log(4);
//       // } else if (num >= 17 && num < 21){
//       //    console.log(5);
//       // } else if (num >= 21 && num < 25){
//       //    console.log(6);
//       // } else if (num >= 25 && num < 29){
//       //    console.log(7);
//       // } else if (num >= 29 && num < 33){
//       //    console.log(8);
//       // } else if (num >= 33 && num <= 36){
//       //    console.log(9);
//       // }
//    };

// getCoupeNumber(20);


// Задание 3
// 3) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.



// function findMaxNumber(a, b, c, d) {
//    if (typeof(a) !== 'number' ||
//        typeof(b) !== 'number' ||
//        typeof(c) !== 'number' ||
//        typeof(d) !== 'number') {
//          return 0;
//        } else {
//          return Math.max(a, b, c, d);
         
//        }

// }

// findMaxNumber(1, 5, 8, 3);