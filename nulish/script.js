const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    //если вдруг h - не задан, то через || сработает условие по умолчанию 200
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    // пример площадь: если операторов h или w - не существует - то выводим 200
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);

// если вдруг у нас в переменную передается 0 (а такое часто возможно по верстке) - то у нас выведется значение по умолчанию, а не 0
// в таком случае полезнее использовать оператор ?? нулевого слияния, тк он реагирует не на все 5 false-значений, а только на undefined или null

let userName; 
let userKey;
//из таких операторов можно выстроить цепочку 
console.log(userName ?? userKey ?? 'User'); 


// приоритет оператора равен ||
// при этом нельзя использовать в комбинации && или || вместе с ?? без скобок

