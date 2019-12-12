"use strict";
const China='китай' ;
const Chile='чилі' ;
const Australia='австралія' ;
const India='індія' ;
const Jamaica='ямайка' ;
const deliveryChina=100;
const deliveryChile=250 ;
const deliveryAustralia=170 ;
const deliveryIndia=80 ;
const deliveryJamaica=120 ;
let  delivery = prompt ('Введіть країну в яку потрібно доставити товар!');

if (delivery === null) {
        alert('Відмінено користувачем!');
      } else {  
              delivery = delivery.toLowerCase();
switch (delivery) {
    case China:
            alert(`Доставка в ${China} буде коштувати ${deliveryChina} кредитів`);
                    break;
    case Chile:
            alert(`Доставка в ${Chile} буде коштувати ${deliveryChile} кредитів`);
                    break;
    case Australia:
            alert(`Доставка в ${Australia} буде коштувати ${deliveryAustralia} кредитів`);
                    break;
    case Jamaica:
            alert(`Доставка в ${Jamaica} буде коштувати ${deliveryJamaica} кредитів`);
                    break;
    case India:
            alert(`Доставка в ${India} буде коштувати ${deliveryIndia} кредитів`);
                    break;
    case delivery === null:
            alert(`Введіть країну!`);
            break; 
default : alert(`В вашу країну доставка не доступна!`);
}
      }