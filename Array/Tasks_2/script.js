

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



const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    // //из объектов получаю значения > 0 и записываю в новый массив
    // let newAr = [];
    // data.forEach(item => {
    //     const values = Object.values(item);
    //     if (values > 0) {
    //         return newAr.push(values);
    //     }            
    // });
    
    // //привожу массив массивов к массиву чисел
    // const res3 = newAr.map(function(item) {
    //     let num = parseInt(item);
    //     return num;
    // });

    // //сумма элементов массива
    // const res4 = res3.reduce((sum, current) => sum + current);
    // return res4;

    return data.filter(item => item.amount > 0).reduce((sum, curr) => sum + curr.amount, 0);
};

console.log(getPositiveIncomeAmount(funds));


const getTotalIncomeAmount = (data) => {
    if (data.some(item => item.amount < 0)) {
        return data.reduce((sum,curr) => sum + curr.amount, 0);
    } else {
        getPositiveIncomeAmount(data);
    } 
};

console.log(getTotalIncomeAmount(funds));

