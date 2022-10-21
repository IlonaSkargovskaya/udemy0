// //Обработчик - функция, которая сработает когда событие произошло (клик, отправка и тп)

// /* 
// 1. Первый вариант назначить обработчик - прописать его прямо в html теге с приставкой on, например onclick = "alert('click')" но лучше его не применять


// 2. Свойства DOM-дерева (получаем кнопку, а затем прописываем в переменную событие)

//  - вариант старый и редко используемый, тк каждое след событие перезапишет текущее


// */
// const btn = document.querySelector('button'),
//       overlay = document.querySelector('.overlay');

// // btn.onclick = function() {
// //   alert('click');
// // };



// //Самый рабочий вариант (слушатель) addEventListener('событие', callback function, options)

// //тут мы сможем назначать сразу несколько событий на один элемент без перезаписывания

// //callback функция выполняется СТРОГО после предыдущей или действия в нашем случае после события click

// // btn.addEventListener('click', () => {
// //   alert('click');
// // });

// // btn.addEventListener('click', () => {
// //   console.log('click2');
// // });


// //События выполняются в порядке очередности как они прописаны в коде


// //часто нам нужно узнавать что за событие сейчас происходит с элементом или получить координаты его или еще что-то другое - используем аргумент в call-back функции чаще всего называемый event или e но может быть любым

// //event.target - показывает элемент на котором происходит сейчас событие
// //event.type - покажет тип события который прописан (клик, ховер и тп)

// // btn.addEventListener('click', (e) => {
// //   //после клика - удалить кнопку с верстки
// //   e.target.remove();
// // });



//       //Удаление обработчиков событий

// // важно! нельзя просто прописать removeEventListener на текущей функции, нам нужно сначала поместить ее в переменную

// let i = 0;
// const deleteElement = (e) => {
//   console.log(e.target);
//   i++;
//   if (i === 1) {
//     //когда i будет равно 1 - удаляем событие
//     btn.removeEventListener('click', deleteElement);
//   }

// };

// //здесь функцию мы не вызываем, не пишем круглые скобки,  а просто говорим что после клика на эту кнопку мы ссылаемся на функцию которая ее удалит
// btn.addEventListener('click', deleteElement);




//         //всплытие событий

// /* 
// Обработчик сначала срабатывает на внутреннем объекте, а затем поднимается вверх и срабатывает на родительских

// */


// // let i = 0;
// // const deleteElement = (e) => {
// //   console.log(e.target);
// //   console.log(e.type);

// //   //чтобы узнать точно на каком событии произошло событие 
// //   console.log(e.currentTarget);

// // };

// // //поочередно прописываем элементы на которых должно сработать
// // btn.addEventListener('click', deleteElement);
// // overlay.addEventListener('click', deleteElement);




//       //Отмена стандартного поведения браузера

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//   //говорим: браузер стой, нам не надо переходить по ссылке - я сейчас расскажу что будем делать и эту штуку помещаем в самое начало функции
//   event.preventDefault();


//   //сейчас мы не переходим по ссылке а отдаем в консоль то что нам надо
//   console.log(event.target);
// });



// //Как назначить одно событие на много разных блоков?

// /* перебираем массив через ForEach */

// const btns = document.querySelectorAll('button');

// btns.forEach(function(item) {
//   item.addEventListener('click', (e) => {
//     console.log(e.target);
//   });
// });




// //Опции addEventListener

// //{once: true} - событие сработает один раз

// btns.forEach(function(item) {
//   item.addEventListener('click', (e) => {
//     console.log(e.target);
//   }, {once: true} );
// });



//При наведении на кнопку - добавить disply:block; при уведении - display:none;

// const btns = document.querySelectorAll('button');

// btns.forEach(btn => {
  
//   btn.addEventListener('mouseover', function() {
//     btn.style.display = 'block';
//   });

//   btn.addEventListener('mouseout', function() {
//     btn.style.display = 'none';
//   });
// });


