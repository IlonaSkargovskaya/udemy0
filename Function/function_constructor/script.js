//Functions_consructors

//функция для конструирования объектов. Когда в общем - похожи, но что-то отличается
//Что-то а-ля прототипа от которого можно отпочковывать дочерние объекты
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log(`Hello ${this.name}`);
  };
}

//если мы не можем изменять основную функцию-конструктор - мы можем обращаться к ней через прототип и добавлять методы и свойства, которые будут наследоваться потомками всеми которые были созданы ПОСЛЕ объявления нового метода
User.prototype.exit = function(name) {
  console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 30);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);
