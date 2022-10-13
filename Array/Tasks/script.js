// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//   let str = '';

//   if (arr.length == 0) {
//     console.log('Семья пуста');
//   } else {
//     str += `Семья состоит из ${arr.join(' ')}`;
//     console.log(str);
//   }
// }

// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {

//   arr.forEach(function(item){
//     console.log(item.toLowerCase());
//   });

// };

// standardizeStrings(favoriteCities);


// const someString = 'This is some strange string';

// function reverse(str) {
//   if (typeof(str) !== 'string') {
//     console.log('Ошибка!');
//   } else {
//     let revStr = str.split('').reverse().join('');
//     return revStr;
//   }  
  
// }

// reverse(someString);
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(all, ended) {
//   let str = '';

//   if (all.length === 0) {
//     return "Нет доступных валют";
//   } else {
//     str = 'Доступные валюты:\n';

//     //проверяем каждый элемент, если он не равен закончившимся валютам - выводим
//     all.forEach(function(curr){
//       if (curr !== ended){
//         str += `${curr}\n`
//       }
//     });

//    return str;
//   }
// };

// availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB');



// const shoppingMallData = {
//   shops: [
//       {
//           width: 10,
//           length: 5
//       },
//       {
//           width: 15,
//           length: 7
//       },
//       {
//           width: 20,
//           length: 5
//       },
//       {
//           width: 8,
//           length: 10
//       },
//   ],
//   height: 5,
//   moneyPer1m3: 30,
//   budget: 50000
// };

// function isBudgetEnough(data) {
//   const {shops} = data;
//   let sumSquare = 0;
//   let sumValueCenter = 0;

//   //вычисляем сумму всех площадей магазинов
//   shops.forEach(function(item){
//     sumSquare = sumSquare + item.width * item.length; 
//   });
//   // console.log(sumSquare); //335
  
//   //вычисляю общий объем ТЦ
//   sumValueCenter = sumSquare * data.height;
//   // console.log(sumValueCenter); //1675 кв.м.

//   //Хватает ли бюджета?
//   let isEnough = data.budget - (sumValueCenter * data.moneyPer1m3);
//   // console.log(isEnough); //-250 => недостаточно

//   if (isEnough < 0) {
//     return 'Бюджета недостаточно';
//   } else {
//     return 'Бюджета достаточно';
//   }
    
// }

// isBudgetEnough(shoppingMallData);




// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Sam'];

// function sortStudentsByGroups(arr) {
//   const sortArr = arr.sort(); //сортирую по алфавиту элементы
//   console.log(sortArr);

//   //Делю массив на куски по 3 элемента

//   //создаем шаг в 3 элемента
//   const step = 3;
//   //константа для итогового массива разбитого на подмассивы по 3 элемента
//   const res = [];

//   //перебираем элементы добавляя на каждом проходе step
//   for (let i = 0; i < arr.length; i += step) {
//     //в переменную загоняем куски вырезанные с i позиции и заканчивая i + шаг
//     const newArr = arr.slice(i, i + step);
//     //записываем в константу res новые мини-массивы
//     res.push(newArr); //на выходе у нас массивы по 3 элемента и остаток
//   }

//   // console.log(res);

//   //Обращаюсь к последнему элементу массива чтобы узнать пустой объект или нет, а также если не пустой - то вывести строку
//   let str = 'Оставшиеся студенты: ';

//   if (res.length === 0) {
//     console.log([res, `${str}-`]);
//   } else {
//     console.log([res, `${str}${res.join(', ')}`]);
//   }  
// };

// sortStudentsByGroups(students);