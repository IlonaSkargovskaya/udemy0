//contenteditable - включает редактирование страницы пользователем. Полезно для создания админки

//resizeObserver - отслеживает изменение размеров блока

const box = document.querySelector('.box');

//создаем сущность которая будет следить за изменениями в этом элементе mutationRecords - это список изменений
let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords);
});

//следи за элементом box и если что-то изменится - то..
//observe(элемент, настройки)
observer.observe(box, {
    childList: true // следим за тем: удаляются или добавляются у нас дочерние узлы
});

observer.disconnect(); //останавливаем отслеживание