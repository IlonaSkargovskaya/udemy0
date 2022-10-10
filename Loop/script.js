// Циклы

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);


// for (let i = 1; i < 8; i++) {

//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
   
// }


//Вложенность циклов

// for ( let i = 0; i < 3; i++){
//     console.log(i);

//     //пока i = 0 отрабатывает цикл J полностью и переходим на след шаг когда i = 1, который заново запускает внутренний цикл
//     for ( let j = 0; j < 3; j++){
//         console.log(j);        
//     }
// }

//создать фигуру треугольника с помощью вложенных циклов

// let result = '';
// const length = 7;

// //главный цикл формирует строки
// for (let i = 1; i < length; i++) {
   
//     //вспомогательный - сами звездочки увеличивает
//     for (let j = 0; j < i; j++) {
//         result = result + "*";
//     }

//     result = result + '\n'; //перенос строки
// }

// console.log(result);

//проверка типа данных массива - typeof(arr[i])


//перевернуть массив:
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i < data.length; i++) {
//     result[i-1] = data[data.length - i];
// }

// console.log(result);