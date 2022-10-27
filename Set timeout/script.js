//задержка выполнения скрипта

const btn = document.querySelector('.btn');
let timerId;
//итератор, который будет нам считать количество интервалов которые уже выполнил SetInterval
let i = 0;

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     //позиция откуда стартуем
//     let pos = 0;

//     const id = setInterval(frame, 10);

//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }
// btn.addEventListener('click', myAnimation);

btn.addEventListener('click', () => {
    //записывается в милесекундах и выполнится через 2 секунды после клика на кнопку
    timerId = setTimeout(logger, 2000);
    //чтобы скрипт повторялся через 2000ms - setInterval 
    timerId = setInterval(logger, 500);
});


function logger() {
    //когда setInterval отработает 4 раза - сбросить таймер
    if (i === 3) {
        //сброс таймера
        clearInterval(timerId); 
    }
    console.log('text');
    i++;    
}


//Почему рекурсивный вызов setTimeOut лучше чем setInterval ?

// если функция большая и долго выполняется - то setInterval не будет на втором проходе ждать указанное кол-во секунд, а начнет выполнятсья сразу же - тем самым задержки не будет


//задаем переменную и присваиваем ей функцию с setTimeOut 0,5s а внутри нее еще раз вызываем эту же функцию перезаписывая переменную и указываем ей задержку - так будет бесконечно и всегда с определенным промежутком времени
let id = setTimeout(function log() {
    console.log('hello');

    if (i === 3) {
        clearInterval(timerId); 
    } else {
        id = setTimeout(log, 500);
        i++;
    }    
    
}, 500);





