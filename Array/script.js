// //Методы и свойства массивов

// const arr = [1,2,3,6,8];


// //удаляет последний элемент из массива
// arr.pop();

// //добавляет элемент в конец массива
// arr.push(10);

// удалить первый элементы
// arr.shift();

// //добавить в начало
// arr.unshift();

// //Превратить строку в массив используя разделитьель s
// arr.split(s);

// const str = prompt('', '');
// const products = str.split(', '); // Разделитель будет запятая
// console.log(products);


// //Превратить массив в строку используя разделитьель s
// arr.join(s);


// //Удалить count элементов, начиная с index и заменить на elem2
// arr.splice(index, count, elem2 ...)

// //Копируем часть массива с begin до end не включая
// arr.slice(begin, and);

// // Создание копий массивов
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();


// //Сортировка массива как строки в алфавитном порядке. Но только если это строчные элементы. 
// arr.sort(fn);


// //для чисел нужно использовать функцию сравнения чисел и вызывать ее в методе как callback функцию

// const arr3 = [2, 13, 26, 8, 10];
// arr3.sort(compareNum);
// console.log(arr3);

// function compareNum(a, b) {
//     return a-b;
// };



// //Меняет порядок элементов на обратный
// arr.reverse();

// //Создает новый массив, куда копирует элементы из arr, а также item1...
// arr.concat(item1...);






//     //Поиск элементов в массиве
// // arr.find() - будет искать по тем критериям, которые мы придумали. Вернет первое найденное значение по заданным условиям callback функции которая выполняется для каждого элемента массива однократно

// const array1 = [5, 12, 8, 130, 44];

// // говорим что хотим из элементов массива найти первую 10
// const found = array1.find((element) => { return element === 10});

// console.log(found);




//         //Перебрать массив

// // 1 вариант 

// // for(let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }


// // //2 вариант (его плюс - можно использовать break или continue)

// // for (let value of arr) {
// //     console.log(value);
// // } 



//                     //Перебор массивов


//     //ForEach 
// /*

// НИКОГДА НЕ ВОЗВРАЩАЕТ НОВЫЙ МАССИВ

// принимает в себя колбэк функцию, которую применяет на каждом из элементов массива
// принимает три аргумента(значение элемента который перебираем, порядковый номер, сам массив)
// */

// const arr2 = ['Вася', 'Петя', 'Катя'];

// arr2.forEach(function(item, i, arr2) {
//     console.log(`${i} : ${item} внутри массива ${arr2}`);
// });

// console.log(arr);



            //filter (возвращает новый массив отфильтровывая по нашему условию)

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
//получить все имена <5 элементов

//name = каждый отдельный элемент массива names
const shortNames = names.filter(function(name) {
    return name.length < 5; //вернем новый массив 
});

console.log(shortNames);



            //map (можно изменить каждый элемент внутри исходного массива и вернуть новый измененный массив)

const answers = ['IvAn', 'ANNa', 'heLLo'];

//вернем новый массив где все имена в нижнем регистре
const result = answers.map(function(item) {
    return item.toLowerCase();
});

console.log(result);

            //Методы проверки

            //every (если все подходят) /some(если хотя бы 1 подходит к нашему условию - вернет true)


const someArr = [4, 'xkdgj', 'esrgsekrg'];

//есть ли в нашем массиве хотя бы 1 число?
console.log(someArr.some(item => typeof(item) === 'number')); //true
console.log(someArr.every(item => typeof(item) === 'number')); // false



        //reduce(уменьшать с англ) - схлопывает(собирает) массив в одно значение

const numArr = [1, 4, 7, 8, 10, 3, 2];
                        // 0        1
                        // 1        4
                        // 5        7
                        // 12       8
                     //(сумма)  (на каждом шаге 
                             //новый элемент массива)

//получаем сумму всех наших элементов
const res = numArr.reduce((sum, current) => sum + current); //35
console.log(res);



const strArr = ['apple', 'pear', 'plum'];
//хотим получить большую строку
const resStr = strArr.reduce((sum, current) => `${sum}, ${current}`); //apple, pear, plum
console.log(resStr);


// можно задать начальное значение в reduce (то есть первый элемент массива будет скрыт но равен заданному числу)
const numArr2 = [1, 4, 7, 8, 10, 3, 2];
const res2 = numArr2.reduce((sum, current) => sum + current, 3); //35 + 3 (нач значение после коллбэк)
console.log(res2);


//Пример с объектом

const obj = {
    'ann' : 'person',
    'dima' : 'person',
    'cat' : 'animal',
    'dog' : 'animal'
};

const newResult = Object.entries(obj) // преобразуем объект в массив массивов [[]]
.filter(item => item[1] === 'person') // [['ann', 'person'], ['dima', 'person']]
.map(item => item[0]); // получаем только первые значения из каждого маленького массива

console.log(newResult); // ['ann', 'dima']


//Practice

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {

    // У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.
    // const newAr = arr.filter((item) => {        
    //     return item.rating >= 8;
    // });

    // console.log(newAr);


    //Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.

    // const res = arr.reduce((item, current) => {
    //    return `${typeof(item) === 'object' ? item.name : item}, ${current.name}`;
    // });

    // console.log(res);
    

    // Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.
    
    const tranformedArray = [...arr].map((item, i) => {
        item['id'] = i;
        return item;
    });


     //Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray)

    function checkFilms(arr) {
        console.log(arr.every(item => item.hasOwnProperty('id')));
    }

    checkFilms(tranformedArray);
}    
    

showGoodFilms(films);




//         //Псевдомассивы 

// // - структура которая просто хранит данные по порядку, при этом к ней не применимы никакие методы как для обычных массивов





//         // SPREAD-оператор (...obj) (разворачивает наш объект там где нам надо)

// //1) мы хотим скопировать video и blogs и поместить в internet
// //записываем имя переменной и перед ней ставим ... тем самым мы достанем все элементы массива и развернем их в новом массиве

// const video = ['youtube', 'vimeo', 'rutube'],
//         blogs = ['wordpress', 'livejournal', 'blogger'],
//         internet = [...video, ...blogs, 'vk', 'fb'];

// console.log(internet); // ['youtube', 'vimeo', 'rutube', 'wordpress', 'livejournal', 'blogger', 'vk', 'fb']



// //2) создаем функцию куда нужно передать из полученного массива num - аргументы в нее в виде a, b, c

// const num = [2, 5, 7];

// function log(a, b, c) {
//         console.log(a); // 2
//         console.log(b); // 5
//         console.log(c); // 7

// }
// // для этого используем Spread-оператор ... который поделит наш массив на отдельные элементы и тогда мы сможем их передать в функцию
// log(...num);




// //3) можем создать поверхностную копию массива с помощью Spread-оператора

// const one = ['a', 'b'];
// const newAr = [...one];

// newAr[0] = 'c';
// console.log(one); // ['a', 'b']
// console.log(newAr); // ['c', 'b']




//                 // REST-оператор

// // когда мы до конца не знаем какие аргументы или сущности будут использоваться, но при этом нам нужно их контролировать - используем Rest-оператор ... который всегда записывается последним.
// // сначала пишутся обязательные аргументы а затем ...

// const log2 = function(a, b, ...rest) {
//     console.log(a, b, rest);
// }

// log2('basic', 'rest', 'operator', 'usage'); // basic rest (2) ['operator', 'usage']

// //при вызове сработает оператор и мы получим массив из необязательных аргументов








