//Map


//map - структуры данных похожие на объект, но его свойствами могут являться не только string но и любые другие типы данных и массивы и объекты и функции



//Создадим объект, в котором помещаем по одному товару из разных магазинов и его количество там
const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50},
];


//создаем новую карту в переменной map и выглядит она как массив массивов [[]]
const map = new Map([
    [{paper: 400}, 8000],
    [{juice: 300}, 12000],
    [{milk: 200}, 2000]
]); 


//map.set(key, value) – записывает по ключу key значение value. Если нам нужно добавить не одно значение или объединить объекты - то используем forEach
const budjet = [5000, 15000, 25000];

shops.forEach((shop, i) => {
    map.set(shop, budjet[i]);
});

console.log(map);


//map.get(key) – получаем значение по ключу или undefined, если ключ key отсутствует.
console.log(map.get(shops[0]));

//map.has(key) – проверяем наличие чего-то внутри. возвращает true, если ключ key присутствует в коллекции, иначе false.
console.log(map.has(shops[2]));

// map.delete(key) – удаляет элемент по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.



//Перебор MAP

// map.keys() - получаем массив ключей 
console.log(map.keys());

//for ... of - вывести ключи карты по отдельности
for (let shop of map.keys()) {
    console.log(shop); //получаем в консоль каждый ключ в виде {paper: 400} и тд
}

//Пример: надо вывести все товары из всех магазинов
const allProducts = [];
for (let shop of map.keys()){
    //обращаемся к каждому отдельному магазину и достаем ТОЛЬКО его первый параметр - ключ, но тк мы не знаем толком какой он, то создаем еще один массив ключей и пишем Object.keys(shop)[0]

    //записываем в массив ТОЛЬКО ключи карты без значений (продукты)
    allProducts.push(Object.keys(shop)[0]);
}

console.log(allProducts);



//map.values() - получаем только значения
for (let price of map.values()){
    console.log(price); //получили все бюджеты магазинов
}


//map.entries() - получаем массив с массивами ['свойство', 'значение']
for (let price of map.entries()){
    console.log(price);
}


//метод forEach
map.forEach((value, key, map) => {
    console.log(key, value);
});




//Превратить имеющийся объект в карту:
// const имя_карты = new Map(Object.entries(имеющийся_объект));

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

const userMap = new Map(Object.entries(user));
console.log(userMap);


//Из карты сделать обычный объект
// const имя_объекта = new Map(Object.entries(имеющаяся_карта));

const newUserObject = Object.fromEntries(userMap);
console.log(newUserObject);



