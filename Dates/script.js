//Dates



let date = new Date();

//установить дату (месяцы при передаче считаются с 0: январь - нулевой месяц)

// date.setFullYear(2019);
// date.setMonth(3);
// date.setDate(12);
// date.setHours(12);
// date.setMinutes(15);

// console.log(date);

//Date.parse() - Метод parse получает строку с датой (напр. "Jan 03, 2000") и возвращает целое число, представляющее собой количество миллисекунд, истекших с полуночи 1 января 1970 года

// //получение компонентов даты

// const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate()); //число
// console.log(now.getDay()); //день недели
// console.log(now.getHours());


// найти промежуток времени
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; //i возводим в степень каждый раз
}

let end = new Date();
// создаем начальный и конечный объект даты, затем любой цикл и проверяем сколько времени ушло на его работу
console.log(`Цикл отработал за ${end - start} миллисекунд`);



// Как получить из даты строку?

let date2 = new Date(2022,4,25,11,35,22,434);

console.log(date2.toString()); // Wed May 25 2022 11:35:22 GMT+0000 (GMT)

console.log(date2.toDateString()); //Wed May 25 2022

console.log(date2.toTimeString()); //11:35:22 GMT+0000 (GMT)

console.log(date2.toISOString()); //2022-05-25T11:35:22.434Z
