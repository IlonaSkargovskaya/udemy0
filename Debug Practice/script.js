const restorantData = {
  menu: [
      {
          name: 'Salad Caesar',
          price: '14$'
      },
      {
          name: 'Pizza Diavola',
          price: '9$'
      },
      {
          name: 'Beefsteak',
          price: '1$'
      },
      {
          name: 'Napoleon',
          price: '7$'
      }
  ],
  waitors: [
      { name: 'Alice', 
        age: 22}, 
      {name: 'John', 
       age: 24}
  ],
  averageLunchPrice: '20$',
  openNow: true
};

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (parseInt(fDish.price) + parseInt(sDish.price) < parseInt(average)) {
      return 'Цена ниже средней';
  } else {
      return 'Цена выше средней';
  }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function isOpen(prop) {
  let answer = '';
  prop ? answer = 'Закрыто' : answer = 'Открыто';

  return answer;
}

console.log(isOpen(restorantData.openNow));





function transferWaitors(data) {
  const copy = {...data};

// Нам просто нужно менять весь массив данных,
    // а не лезть напрямую менять каждого из сотрудников
    // Так как это верхний уровень объекта, то значение 
    // будет меняться только у копии
  copy.waitors = [{name: 'Mike', age: 32}];
  console.log(copy);
  console.log(restorantData);

}

transferWaitors(restorantData);