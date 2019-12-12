const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const  logins = prompt('Введіть пароль!');
    if (!logins) {
        message = 'Відмінено користувачем!';
       console.log(message);
    }
    else if (logins === ADMIN_PASSWORD) {
        message = 'Вітаємо, доступ дозволено!';
        console.log(message);
    }
     else {
        message = 'Доступ заборонено!';
        console.log(message);
    }