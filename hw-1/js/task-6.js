
    let total = 0;
    let input;
    do {
        input = prompt('Введіть число!');
        if(Number.isNaN(Number(input))) {
            alert(`Було введено не вірне число!`);
            continue;
            }
        total += Number(input);
       } 
    while (input !== null);
     alert(`Сумма = ${total}`);
   