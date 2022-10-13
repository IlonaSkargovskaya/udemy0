// // Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// // Пример:
// // personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// // => 'Мне 29 и я владею языками: RU ENG'

// // Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

// const personalPlanPeter = {
//         name: "Peter",
//         age: "29",
//         skills: {
//             languages: ['ru', 'eng'],
//             programmingLangs: {
//                 js: '30%',
//                 php: '10%'
//             },
//             exp: '1 month'
//         },
//         showAgeAndLangs: function(self) {
//                 const{languages} = self.skills;                

//                 let str = `Мне ${self.age} лет и я владею языками: `;
//                 languages.forEach(function(lang) {
//                         str = str + `${lang.toUpperCase()}` + ' ';
//                 });

//                console.log(str);
                
//         }
//     };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {

//         const {exp} = plan.skills; //деструктуризация
//         return exp;
// }

// showExperience(personalPlanPeter);

// // Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку 
// // Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// function showProgrammingLangs(langs) {
//         let str = '';
//         const{programmingLangs} = langs.skills;

//         for (let key in programmingLangs) {
//                 str = str + `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//         }

//         console.log(str);
// };

// showProgrammingLangs(personalPlanPeter);



