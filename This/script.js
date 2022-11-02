// //Представим, что есть бомж.. который существует - везде
// //а если мы бомжа помещаем в квартиру - он существует уже внутри нее


'use strict';

// 1) Обычные функции

function showThis(a, b) {
    console.log(this); 
    function sum() {
        // return this.a + this.b; //в таком варианте мы получим ошибку, тк this - undefined
        return a + b; //будет работать как надо благодаря замыканию функции, которая возьмет числа из функции-родителя
    }
    
    console.log(sum()); 
}

showThis(4, 5);




// 2) Функции, как методы объекта

const obj = {
    a : 20,
    b : 15,
    sum : function() {
            console.log(this);
    }
}

obj.sum();



// 3) Функции-конструкторы, которые создают объект со свойствами

function User(name, id) {
    this.name = name; //
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`); //возьмет данные из user у которого вызван метод hello
    }
}

let ivan = new User('Ivan', 23); //this возьмет инфу отсюда и запомнит
let alex = new User('Alex', 28); //this возьмет инфу отсюда и запомнит

console.log(ivan);
console.log(alex.hello()); // Hello Alex




// 4) Ручное присвоение this любой функции

function sayName() {
    console.log(this); // {name: 'John'}
    console.log(this.name); // John
}

const user = {
    name : 'John'
};

//говорим: эй, функция - заработай на объекте user и возьми оттуда данные
// имя_функции.call(имя_объекта)
sayName.call(user); 


        //Разница apply и call 

function sayName(surname) {
    console.log(this.name + ' ' + surname);
}

const user2 = {
    name : 'John'
};

//Разница будет только в синтаксисе записи: call передается строка, apply - массив
sayName.call(user2, 'Smith'); 
sayName.apply(user2, ['Smith']);


//Еще один метод bind() - создает новую функцию (bind = связывать)

function count(num) {
    return this*num;
}

//создаем переменную, куда помещае новую функцию, а затем с помощью bind мы передаем в контекст this - 2. Таким образом наша новая функция будет удваивать число num
// = return 2*num

//обращаемся к функции count.bind(this)
const double = count.bind(2);

console.log(double(13)); //26
console.log(double(3)); // 6





// 1. Обычная функция: this = window, но если 'use strict' - undefined
// 2. Контекст у методов объектов - вернет нам этот объект, при этом во вложенной в метод объекта функции - this уже вернет Undefined. Тк он будет находится внутри функции метода, а не в самом объекте
// 3. this в функциях-конструкторах - ссылается на только что созданный объект и запоминает переданные в функции аргументы именно для этого объекта
// 4. Ручная привязка this - call, apply, bind




// Практика

const btn = document.querySelector('button');

//классический режим вызова функции: this = event.target
btn.addEventListener('click', function() {
    console.log(this); //контекст вызова - сама кнопка.  <button>Кнопка</button>
    this.style.backgroundColor = 'red'; //кнопка перекрасится по клику
});


//стрелочная функция - у нее нет своего контекста вызова, она будет его брать у родителя
btn.addEventListener('click', () => {
    this.style.backgroundColor = 'red'; //будет ошибка, тк стрелка ищет родителя - а там Undefined
});



//Пример

const obj = {
    num: 5,
    sayNumber: function() {
        
        const say = () => { 
            console.log(this);
        };
        say();
    }
};

//тк здесь стрелка внутри метода - то контекст вызова будет - родительский и вернет нам объект
obj.sayNumber();



