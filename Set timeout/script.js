//задержка выполнения скрипта

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const timerId = setTimeout(logger, 2000); //записывается в милесекундах и выполнится через 2 секунды
});

//clearInterval(timerId); //сброс таймера

function logger() {
    console.log('text');
}

//Если нужно чтобы скрипт повторялся через опеределнное кол-во времени - setInterval

