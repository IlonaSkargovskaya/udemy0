//To String

console.log(typeof(String(4))); //4 является строкой

//Конкатенация
console.log(typeof(5 + '')); // сложение строки с числом = строка

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';
console.log(fontSize);



//To Number

//1)
console.log(typeof(Number('4')));

//2) Унарный плюс
console.log(typeof(+'5')); //число 5

//ParseInt
console.log(parseInt('15px', 10)); // число 15



//To boolean

// Все что всегда false - 0, '', null, undefined, NaN
// Все что всегда true - [], {} и тд

let switcher = null;

if (switcher) {
  console.log('Working..');
}

switcher = 1;

if (switcher) {
  console.log('Working..');
}

//2)
console.log(typeof(Boolean(4)));

//3)
console.log(typeof(!!"44")); //два знака !! дают булевое значение
