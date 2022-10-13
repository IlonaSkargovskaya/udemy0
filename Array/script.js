//Методы и свойства массивов

const arr = [1,2,3,6,8];


// //удаляет последний элемент из массива
// arr.pop();

// //добавляет элемент в конец массива
// arr.push(10);

//удалить первый элементы
// arr.shift();

// //добавить в начало
// arr.unshift();

//Превратить строку в массив используя разделитьель s
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
// Создание копий массивов

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();


// //Сортировка массива как строки в алфавитном порядке. Но только если это строчные элементы. 
// arr.sort(fn);

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products);

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



        //Перебрать массив

// 1 вариант 

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// //2 вариант (его плюс - можно использовать break или continue)

// for (let value of arr) {
//     console.log(value);
// } 


    //ForEach 
/*
принимает в себя колбэк функцию, которую применяет на каждом из элементов массива
принимает три аргумента(значение элемента который перебираем, порядковый номер, сам массив)
*/

// const arr2 = ['Вася', 'Петя', 'Катя'];

// arr2.forEach(function(item, i, arr2) {
//     console.log(`${i} : ${item} внутри массива ${arr2}`);
// });

// console.log(arr);


        //Псевдомассивы 

// - структура которая просто хранит данные по порядку, при этом к ней не применимы никакие методы как для обычных массивов



        // SPREAD-оператор (...obj) (разворачивает наш объект там где нам надо)

// мы хотим скопировать video и blogs и поместить в internet
//записываем имя переменной и перед ней ставим ... тем самым мы достанем все элементы массива и развернем их в новом массиве

const video = ['youtube', 'vimeo', 'rutube'],
        blogs = ['wordpress', 'livejournal', 'blogger'],
        internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);

//создаем функцию куда нужно передать из полученного массива num - аргументы в нее в виде a, b, c

function log(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);

}

const num = [2, 5, 7];
// для этого используем Spread-оператор ... который поделит наш массив на отдельные элементы и тогда мы сможем их передать в функцию
log(...num);


// можем и создать поверхностную копию массива с помощью Spread-оператора

const one = ['a', 'b'];
const newAr = [...one];

newAr[0] = 'c';
console.log(one);
console.log(newAr);









