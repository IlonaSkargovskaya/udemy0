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


function getMathResult (num, count) {
   let result = '';

   for (let i = 0; i < count; i++) {
        
   }
}

console.log(getMathResult(4, 3));

