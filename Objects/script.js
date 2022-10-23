// Объект = шкаф с подписанными коробками. При этом два объекта внутри которых будут одинаковые значения - никогда не будут равны. Тк это две разных коробки

//ключ: значение
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         background: 'red',
//     },
//     makeTest : function () {
//         console.log('Test');
//     }
// };

        //доступ к вложенным в объект объектам происходит 
        //двойными квадратными скобками
// console.log(options['colors']['border']); // black


        //удалить свойство из объекта
// delete options.name;


        //добавление свойства в объект
// options["test"] = 5




        //перебрать все свойства объекта

//обозначаем все ключи как key - общее название
//Если у объекта нет такого свойства, то результат будет 'undefined'
//такой цикл всегда будет перебирать все ключи которые есть в объекте
//чтобы выбрать все ключи - пишем ${key}, а все значения - ${options[key]}

// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }

//если в момент перебора объекта встречается еще один объект - создаем условие и еще один перебор с новым названием ключей i и доступ к значениям будет options[key][i]

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// };




        //Функции и методы для объекта

//Object.is() - метод, который помогает сравнивать содержимое двух объектов
//Object.keys() - вернет массив свойств (ключей) объекта
//Object.values() - вернет массив значений объекта
//Object.entries() - вернет массив ['ключ', 'значение'] объекта

//Object.entries(obj) – возвращает массив пар [ключ, значение].
// let user = {
//     name: "John",
//     age: 30
//   };

// Object.entries(user) = [ ["name","John"], ["age",30] ]



//Object.assign(объект_куда_поместить, объект_что_поместить) 

// const add = {
//     d: 17,
//     e: 20,
// };

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//     }
// };

// //объединяем обект add И numbers
// console.log(Object.assign(numbers, add)); // {a: 2, b: 5, c: {…}, d: 17, e: 20}


/*
Можно создать свой метод: дописываем в объект 
ключ MakeTest со значением function () {...} 
А затем ее запускаем: options.makeTest(); 
*/




        //Деструктуризация объектов (разделить на более мелкие объекты)

// вместо того чтобы 300 раз писать обращение ко вложенным объектам и их свойствам через [] [] []
// мы можем выносить эти вложенные объекты за пределы и затем с ними работать

// const {border, background} = options.colors; //создаем переменные по имени ключей вложенного объекта и присваиваем им имя_общего_объекта.имя_родителя_свойств
// console.log(border); //black





        //СОЗДАНИЕ КОПИЙ ОБЪЕКТОВ И ПЕРЕДАЧА ИХ ПО ССЫЛКЕ

// // const obj = {
// //     a: 5,
// //     b: 1,
// // };

// // const copy = obj; // мы не создаем копию объекта, а передаем его 
// //в константу по ссылке

// //поэтому обращаясь через новую константу к какому-то свойству obj - мы меняем не новый объект а изменяем изначальные свойства заданные в объекте obj


        // //Чтобы создать КОПИЮ объекта: 

// //Создаем функцию, в которую помещаем переменную с пустым объектом,
// //в которую после перебора через for.. in .. 
// //поместим копии свойств старого объекта присвоив ей те же ключи

// function copy(mainObj) {
//     let objCopy = {};

//     for (let key in mainObj) {
//         // пройдем по старому объекту mainObj скопируем все key и поместим в objCopy
//         objCopy[key] = mainObj[key];
//     }
    
//     return objCopy;
// }

// //тестируем работу функции
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//     }
// };

// const newNumbers = copy(numbers); // вызываем функцию copy и помещаем в нее объект

// newNumbers.a = 10;
// console.log(newNumbers); // теперь тут хранится a = 10
// console.log(numbers); // здесь осталось a = 2

// //НО! для вложенных функций эта функция не работает
// //Это называется поверхностная копия объекта



         
            //Object-копия со Spread-оператором (появился в ES-9)

// const q = {
//         one: 1,
//         two: 2,

// };

// const newOb = {...q}; //создали поверхн.копию q
// newOb['one'] = 4; //изменили

// console.log(newOb);
// console.log(q);




                // Дескрипторы свойств - флаги

// writable - если true - свойство можно менять 
// enumerable - если true - то свойство будет перечисляться в циклах, если false - То цикл его будет пропускать

//configurable - если true - то свойство можно удалить

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

//посмотреть флаги  - Object.getOwnPropertyDescriptor (объект, 'свойство')
console.log(Object.getOwnPropertyDescriptor(user, 'name')); 
// получим: 
//{value: 'Alex', writable: true, enumerable: true, configurable: true}


            // изменение флагов

//изменили возможность редактирования этого свойства
Object.defineProperty(user, 'name', {writable: false});

//Динамическое добавление свойств из введенных юзером данных
//Object.defineProperty(user, 'birthday2', {value: prompt('Date?'),  writable: false});

//убрать из перебора цикла for in методы объекта (showMyPublicData)
Object.defineProperty(user, 'showMyPublicData', {enumerable: false});
for (let value in user) {
    console.log(value);
}

console.log(user);




//Object.preventExtensions() - в объект нельзя добавить новые свойства
//Object.seal() - нельзя ни добавить новые свойства ни удалить существующие, но при этом можно изменить
//Object.freeze() - невозможно добавить, удалить и изменить какое-то свойство













