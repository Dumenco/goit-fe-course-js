// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`);

const clients = ['Mango', 'Poly', 'Ajax'];
const clientNameToFind = 'Poly';
let message = 'Клиента с таким именем нету в базе данных!';

for (const client of clients) {
  if (client === clientNameToFind) {
    message = 'Клиент с таким именем есть в базе данных!';
    break;
  }

  
}

console.log(message);