//Условия

// if(9 === 9){
//     console.log('Ok!');
// } else {
//     console.log('No!');
// };


// Тернарный оператор

// Если ... ? то ... : иначе ...

// const num = 50;

// (num === 50) ? console.log('ok!') : console.log('error');


//switch - case (заменяет много if-else)
//всегда идет только на строгое сравнение (на больше-меньше не работает)


//Логические операторы вернут цифру если они есть в коде
// && - вернет первую ложь, или последнюю правду
// || - вернет первую правду или последнюю ложь

// const hamburger = 3;
// const frie = 1;
// const cola = 3;

// console.log(hamburger === 3 && frie && cola) ;

// if (hamburger === 3 && frie && cola) {
//     console.log('Остаемся');
// } else {
//     console.log('Уходим');
// }

// Есть 5 сущностей, которые всегда будут false:
// null, 0, '', undefined, NaN


// const hamburger = 3;
// const frie = 1;
// const cola = 1;
// const nuggets = 0;

// if (hamburger === 3 && cola === 2 || nuggets) {
//     console.log('Остаемся');
// } else {
//     console.log('Уходим');
// }

// console.log(!0); //оператор ! превращает в булевое значение

                
console.log(5 === 5 && 3 > 1 || 5);