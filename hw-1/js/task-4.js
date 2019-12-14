let credits = 23560;
const pricePerDroid=3000;
let totalPrice;
const purchase = prompt('Введіть кількість дроїдів яку хочете придбати!')
    if (purchase === null ){
      console.log('Покупку відмінено користувачем!');
    }
    else { totalPrice = purchase*pricePerDroid;
        if (credits<totalPrice){
           console.log('Не достатньо коштів на рахунку!');
                } 
        else{console.log(`Ви купили ${purchase} дроїдів, на рахунку залишилось ${credits-totalPrice} кредитів!`);
                        }  
                     }
