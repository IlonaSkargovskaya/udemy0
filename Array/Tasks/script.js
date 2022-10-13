const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  let str = '';

  if (arr.length == 0) {
    console.log('Семья пуста');
  } else {
    str += `Семья состоит из ${arr.join(' ')}`;
    console.log(str);
  }
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {

  arr.forEach(function(item){
    console.log(item.toLowerCase());
  });

};

standardizeStrings(favoriteCities);


const someString = 'This is some strange string';

function reverse(str) {
  if (typeof(str) !== 'string') {
    console.log('Ошибка!');
  } else {
    let revStr = str.split('').reverse().join('');
    return revStr;
  }  
  
}

reverse(someString);
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(all, ended) {
  let str = '';

  if (all.length === 0) {
    return "Нет доступных валют";
  } else {
    str = 'Доступные валюты:\n';

    //проверяем каждый элемент, если он не равен закончившимся валютам - выводим
    all.forEach(function(curr){
      if (curr !== ended){
        str += `${curr}\n`
      }
    });

   return str;
  }
};

availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB');