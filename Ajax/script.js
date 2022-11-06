//Ajax - Asynchronous javascript and xml (асинхронные по умолчанию)

//реальные примеры применения технологии:
// фильтры интернет-магазинов, когда страница отфильтровывает то что нам нужно без перезагрузки
// поиск гугла: когда появляются подсказки при наборе в поиск


//Калькулятор валют на ajax

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');




inputRub.addEventListener('input',  () => {
    //дальше нужно сделать запрос на сервер
    const request = new XMLHttpRequest(); //создаем новый объект

    //метод open() - собирает настройки, которые помогают сделать запрос на сервер
    //request.open(method('GET'\'POST'), url, async, login, pass);
    request.open('GET', 'current.json');

    //HTTP-заголовки: что именно мы отправляем?
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    //отправляем запрос
    request.send();

    //затем получаем ответ от сервера и надо с данными что-то делать



    //Свойства объекта

    //status - статус запроса (404, 403, 0, 200 ...)
    //statusText - ответ от сервера (приписывается к коду текст Requsted Bad и тд)
    //response - ответ от сервера
    //readyState - текущее состояние запроса



    //События объекта

    //событие readystatechange отслеживает готовность нашего запроса в текущий момент и следит за свойством readyState
    // request.addEventListener('readystatechange', () => {
    //     //если запрос уже в статусе done и 
    //     if (request.readyState === 4 && request.status === 200) {
    //         console.log(request.response); // получаем объект при любом вводе в инпут
    //         const data = JSON.parse(request.response); //переводим в объект обычный
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); //меняем value инпута USD = делим введенное значение пользователем на пришедшее с сервера значение записанное в переменную data.current.usd (путь до значения 74 в current.json)
    //     } else {
    //         inputUsd.value = "Что-то пошло не так";
    //     }
    // });


    //чаще используется событие load и выполняется однократно
    request.addEventListener('load', () => {
        //если запрос уже в статусе done 
        if (request.status === 200) {
            const data = JSON.parse(request.response); //переводим в обычный объект 
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); //меняем value инпута USD = делим введенное значение пользователем на пришедшее с сервера значение записанное в переменную data.current.usd (путь до значения 74 в current.json)
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

});