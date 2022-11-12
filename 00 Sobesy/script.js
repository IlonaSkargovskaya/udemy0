
console.log([] + false - null + true); //NaN

//пустой массив = пустая строка, следовательно в первом [] + false мы получим строку 'false', а дальше при попытке выполнить арифметическую операцию со строкой получим NaN

console.log([] + 1 + 2); //'12' - строка

//[] пустой массив = пустая строка
//дальше '' + 1 = '1' и затем '1' + 2 = '12'

// alert('1'[0]); // '1'

//к строке можно обратиться по ее индексу, следовательно у строки '1' только один символ на нулевой позиции [0] - и это 1


console.log(2 && 1 && null && 0 && undefined);
//&& всегда запинается на первой лжи
//вернет первую ложь



console.log(null || 2 && 3 || 4);
//сначала выполнится && и вернет 3
// || всегда запинается на правде и вернет первую правду
//затем 0 || 3 будет 3
//затем 3 || 4 будет 3


//	Есть ли разница между выражениями? 
console.log(!!( 1 && 2 ) === (1 && 2)); //false
// !! - вернет булевое значение и следовательно они не будут равны


//	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
/* 
Нет, тк массивы присвоены разным переменным, а значит то что там одинаковые цифры - не значит что они хранят одинаковую информацию. Это как два ящика с зелеными яблоками. Они содержат один вид яблок - но не одни и те же яблоки
*/

// alert(+"Infinity");

console.log('Ежик' > 'яблоко'); // false, тк решается через таблицу Unicode


console.log(0 || "" || 2 || undefined || true || falsе ); // 2 потому что запнемся на первой правде




// Является ли строка Панграммой
function isPangram(string) {
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));




//Проверка на Палиндром

function isPalindrome(x) {
    if (x.toLowerCase() === x.toLowerCase().split('').reverse().join('')){
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('aba')); //true
console.log(isPalindrome('AbBa')); // true
console.log(isPalindrome('Abra')); // false



//Удалить все восклицат знаки

function removeExclamationMarks(s) {
    let newStr = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '!') {
            newStr += s[i];
        }
    }
    console.log(newStr);
}

removeExclamationMarks('Hello World!');







