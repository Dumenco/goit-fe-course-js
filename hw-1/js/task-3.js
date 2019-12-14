const ADMIN_PASSWORD = 'qwerty';
let message;
const  logins = prompt('Введіть пароль!');
    if (logins === null){
          message = 'Відмінено користувачем!';
    } 
    else if (logins === ADMIN_PASSWORD) {
    message = 'Вітаємо, доступ дозволено!';
    }
    else {
    message = 'Пароль не вірний доступ заборонено!';
    }
    alert(message);