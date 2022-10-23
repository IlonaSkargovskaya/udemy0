'use strict';

const boxesQuery = document.querySelectorAll('.box'),
        boxesGet = document.getElementsByClassName('box');

// boxesQuery[0].remove();
// boxesGet[0].remove();


console.log(boxesQuery); //NodeList - статичная коллекция
console.log(boxesGet); //HTMLCollection - отслеживает актуальный результат после ремув();

//Живые и статические коллекции
// NodeList - статичная коллекция и не отслеживает что было потом
// HTMLCollection - живая коллекция, которая выдает состояние на момент вызова


//Array.from() - создает массив из массивоподобного объекта 
console.log(Array.from(boxesGet)); // получаем из HTMLCollection обычный массив



//matches - из всех элементов найти только тот который соответствует селектору в нашем случае это доп класс this

boxesQuery.forEach(box => {
    if (box.matches('.this')) {
        console.log(box);
    }
});


// closest - найдет ближайшего родителя
console.log(boxesQuery[0].closest('.wrapper'));