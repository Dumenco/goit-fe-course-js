"use strict";

// // задача 1
// let name = '"Генератор защитного поля"';
// let price = 1000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);
// price = 2000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// // задача 2
// const total=100;
// const ordered = 101;
// // const ordered = prompt('Введіть кількість товару для замовлення!'); 
//     if (total<=ordered){
//         console.log('На складі недостатньо товарів!');
//     }
//     else{
//         console.log("Замовлення сформовано, з вами звяжеться менеджер!");
//     }

// задача 3

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// const  logins = prompt('Введіть пароль!');

//     if (!logins) {
//         message = 'Відмінено користувачем!';
//        console.log(message);
//     }
//     else if (logins === ADMIN_PASSWORD) {
//         message = 'Вітаємо, доступ дозволено!';
//         console.log(message);

//     }
//      else {
//         message = 'Доступ заборонено!';
//         console.log(message);
//     }




// задача 4

// let credits = 23560;
// const pricePerDroid=3000;
// let totalPrice;
// const purchase = prompt('Введіть кількість дроїдів яку хочете придбати!')
// if (!purchase){
//       console.log('Покупку відмінено користувачем!');
// }else {
//     if (!isNaN(purchase)){
//         totalPrice=purchase*pricePerDroid;
//                 if (credits<totalPrice){
                 
//                     console.log('Не достатньо коштів на рахунку!');
//                 }  else{
//                     credits=credits-totalPrice;
                   
//                     console.log(`Ви купили ${purchase} дроїдів, на рахунку залишилось ${credits} кредитів!`);
//                 }
                   
//     } else {                console.log("Введіть кількість дроїдів яку хочете придбати цифрами!"); }
// }


// задача 5
// const China='китай' ;
// const Chile='чили' ;
// const Australia='австралия' ;
// const India='індія' ;
// const Jamaica='ямайка' ;
// const deliveryChina=100;
// const deliveryChile=250 ;
// const deliveryAustralia=170 ;
// const deliveryIndia=80 ;
// const deliveryJamaica=120 ;

// const  delivery = prompt('Введіть країну в яку потрібно доставити товар!');

// switch(delivery.toLowerCase()) {
//     case China:
//             alert(`Доставка в ${China} буде коштувати ${deliveryChina} кредитів`);
//                     break;
//     case Chile:
//             alert(`Доставка в ${Chile} буде коштувати ${deliveryChile} кредитів`);
//                     break;
//     case Australia:
//             alert(`Доставка в ${Australia} буде коштувати ${deliveryAustralia} кредитів`);
//                     break;
//     case Jamaica:
//             alert(`Доставка в ${Jamaica} буде коштувати ${deliveryJamaica} кредитів`);
//                     break;
//     case India:
//             alert(`Доставка в ${India} буде коштувати ${deliveryIndia} кредитів`);
//                     break;
//     case delivery === null:
//             alert(`Введіть країну!`);
//             break; 
// default : alert(`В вашу країну доставка не доступна!`);
// }
            
// задача 6

// let input;
// let total = 0;

// do{input = prompt('Введіть число!')
//     if(isNaN(input)){
//         alert(`Було введено не вірне число!`);
//         continue;

//     }else if ( input === null){
//         break;
//     }
// total += Number(input);
// } while (input !== 0);

// if(total > 0) {
//     alert(`Сумма = ${total}`);
// }
