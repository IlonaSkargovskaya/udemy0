// Classes - это красивая обертка функций-конструкторов = syntactic sugar
// Синтаксический сахар — это способ написания кода, чтобы сделать его более понятным для программиста. 

//название классов пишем всегда с большой буквы
class Rectangle {
    constructor(height, width) {
        //обращаемся к новому созданному объекту, в данном случае к каждому новому квадратику
        this.height = height;
        this.width = width;
    }

    //пишем методы для этого объекта
    calcArea() {
        return this.height * this.width;
    }
}




const square = new Rectangle(10, 10);
const long = new Rectangle(13, 2);

console.log(long.calcArea());

//наследование свойств от других классов - extends
class ColoredRectangleWithText extends Rectangle {
    //записываем те аргументы которые нам нужны будут
    constructor(height, width, text, bgColor) {
        //вызываем суперконструктор родителя (то есть те же данные которые написаны там this.height = height; this.width = width;) ВСЕГДА НА ПЕРВОМ МЕСТЕ ПИШЕМ
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'hello', 'red');

div.showMyProps();
console.log(div.calcArea());




// Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.


    class User {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }

        getFullName() {
            console.log( `${this.name} ${this.surname}`);
        }

    }

    class Student extends User {
        constructor(name, surname, year) {
            super(name, surname);            
            this.year = year;
        }

        
        getCourse() {
            let date = new Date();
            console.log(date.getFullYear() - this.year);
         }
    }

    const newStudent = new Student('Dima', 'Kirillov', 2015);
    console.log(newStudent.getFullName());