"use strict";


let credits = 23560;
const pricePerDroid=3000;
let totalPrice;
const purchase = prompt('Введіть кількість дроїдів яку хочете придбати!')
if (!purchase){
      console.log('Покупку відмінено користувачем!');
}else {
    if (!isNaN(purchase)){
        totalPrice=purchase*pricePerDroid;
                if (credits<totalPrice){
                 
                    console.log('Не достатньо коштів на рахунку!');
                }  else{
                    credits=credits-totalPrice;
                   
                    console.log(`Ви купили ${purchase} дроїдів, на рахунку залишилось ${credits} кредитів!`);
                }
                   
    } else {                console.log("Введіть кількість дроїдів яку хочете придбати цифрами!"); }
}