

//DOM-узлы - это по факту каждый тег + комменты + переносы строк

//DOM-элементы - это только то что заключено в теги

// console.log(document.head);

//Получить полный список html страницы
console.log(document.documentElement);

//Метод childNodes позволяет получить все ноды которые есть в родителе
console.log(document.body.childNodes);

//Получение первого ребенка
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);

//Получение последнего ребенка
console.log(document.body.lastChild);
console.log(document.body.lastElementChild);


// Обращение к родителям

//получаем родителя у заданного ребенка 
console.log(document.querySelector('#current').parentNode);

//получаем второго родителя который еще выше у заданного ребенка
console.log(document.querySelector('#current').parentNode.parentNode);

//чтобы не попасть на перенос строки у родителя юзаем
console.log(document.querySelector('#current').parentElement);





//data-атрибуты - что-то супер особенное и личное на что мы можем ориентироваться
// <li data-current="3">3</li>


//получение дата-атрибутов
console.log(document.querySelector('[data-current="3"]'));

//получить следующий за дата-атрибутом элемент (брат), но зачастую это будет перенос строки
console.log(document.querySelector('[data-current="3"]').nextSibling);

//получить предыдущего соседа (брат), но зачастую это будет перенос строки
console.log(document.querySelector('[data-current="3"]').previousSibling);


//получить именно следующий DOM-элемент
console.log(document.querySelector('[data-current="3"]').nextElementSibling);

//получить именно предыдущий DOM-элемент
console.log(document.querySelector('[data-current="3"]').previousElementSibling);



//создаем вручную получение всех элементов body и избавляемся от текстовых нодов
//через перебирающий цикл for...of

for (let node of document.body.childNodes) {
  //если наша node будет #text - пропускаем ее и не выводим в консоль
  if (node.nodeName == '#text') {
    continue;
  }


  console.log(node);
}







