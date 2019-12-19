let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введіть число!')
  if (Number.isNaN(Number(input))) {
    alert(`Було введено не вірне число!`)
    continue
  }
  numbers.push(+input)
} while (input !== null)

function amount (arr) {
  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }
  return `'Загальна сумма чисел рівна = ${total}'`;
}

console.log(amount(numbers))
