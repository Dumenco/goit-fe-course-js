let input;
const numbers = [];
let total = 0;

do {
	input = prompt('Введіть число!');

	if (Number.isNaN(Number(input))) {
		console.log(`Було введено не вірне число!`);
		continue;
	}
	if (input !== null) {
		numbers.push(Number(input));
	}
} while (input !== null);
if (numbers.length) {
	for (let i of numbers) {
		total += i;
	}
	console.log(`'Загальна сумма чисел рівна = ${total}'`);
}
