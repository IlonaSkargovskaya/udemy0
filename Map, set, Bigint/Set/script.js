// Set - особый вид типа массива, где каждое значение встречается только 1 раз 

const arr1 = [1, 1, 2, 2, 4, 5, 6, 5];

const set = new Set(arr1);
console.log(set); // Получаем объект - Set(5) {1, 2, 4, 5, 6}


// Объединить два массива без дубликатов
function mergeArrays(arr1, arr2) {
    const arr3 = [...arr1, ...arr2];    
    const set = new Set(arr3); //создаем объект без дубликатов
    const resultArr = Array.from(set).sort(); // сортируем и превращаем set в массив
    console.log(resultArr); 
  }
mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]);



  //Методы Set

const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

const set2 = new Set(arr);

// Set.add() - добавляет уникальные элементы;

set2.add('Ivan')
    .add('Alex'); // это уже не добавится, тк такое имя есть

  console.log(set2);


// set.delete() - удалить значение;
// set.has() - проверять значение;
// set.clear();
// set.size;


// Перебор set

//1. Через for .. of
for (let value of set) {console.log(value)};


//2. Через forEach
set2.forEach((value, set) => {
    console.log(value);
});


//Функция-помощник которая создаст обычный отфильтрованный массив с уникальными значениями из объекта Set

function unique(arr) {
    return Array.from(new Set(arr));
}



