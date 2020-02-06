const category = document.querySelector('#categories');
console.log(`Всього: ${category.childElementCount} категорії`);

const itemsAll = document.querySelectorAll('.item');
const items = itemsAll.forEach((item) =>
	console.log(
		`Категорія: ${item.querySelector('h2').textContent}. Кількість елементів: ${item.lastElementChild.children
			.length}`
	)
);
