'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// в таком варианте ошибка не даст дальше коду работать
// console.log(block.textContent);

//чтобы этого избежать - в потенциальных местах ошибок можно прописать условие
// если в block - будет true - то мы получим текст
// if (block) {
//     console.log(block.textContent);
// }

// тоже самое можно получить с помощью оператора опциональной цеплочки

//оператор ? как бы спрашивает: есть ли слево значение? если да - то .textContent
// если внутри null или undefined - то останавливает операцию и выводит Null Или undefined
console.log(block?.textContent);

//но работает такая штука только на чтение

// если мы пытаемся записать что-то с таким опреатором - будет ошибка SyntaxError
// тк если мы пытаемся в undefined пытаемся записать значение

// block?.textContent = '123';

console.log(1 + 2);

//получаем данные откуда-то
const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log('hello');
    }
};

userData.say();
//в методах перед круглыми скобками - мы проверяем так:
userData.hey?.();


//таким образом мы говорим: Есть ли Объект? а в объекте поле skills ? - если да, то выполняем дальше, иначе - останавливаем код и выводим undefined
console.log(userData?.skills?.js);
