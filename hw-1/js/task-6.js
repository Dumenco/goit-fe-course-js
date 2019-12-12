"use strict";
let totall = 0;
let input;
do{input = prompt('Введіть число!')
    if(isNaN(input)){
        alert(`Було введено не вірне число!`);
        continue;

    }else if ( input === null){
        break;
    }
totall += Number(input);
} while (input !== 0);

if (totall > 0) {
    alert(`Сумма = ${totall}`);
}