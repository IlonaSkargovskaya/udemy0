//Когда мы получаем коллекции из объектов, мы их получаем в псевдомассиве - поэтому не можем применить к ним никакие методы а-дя push pop reduce и тд

//НО для querySelectorAll работает forEach тк мы получаем не HTML Collection а NodeList и в нем есть этот метод
const hearts = document.querySelectorAll('.heart'); // тут псевдомассив

hearts.forEach(function(item) {
  console.log(item); //получили поочередно каждое сердечко в консоль
});

console.log(hearts);


//получаем первый из подходящих CSS-селекторов
const heart = document.querySelector('.heart'); 
console.log(heart); 







