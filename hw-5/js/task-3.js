class Storage {
	constructor(items) {
		this.items = items;
	}
	getItems() {
		return this.items;
	}

	addItem(items) {
		this.items.push(items);
	}

	removeItem(item) {
		for (let element = 0; element < items.length; element++) {
			if (items[element] === item) {
				return this.items.splice(element, 1);
				// или лучше было через indexOf() искать элемент масива, и после возврата его индекса удалять?
			}
		}
	}
}

const storage = new Storage([ 'Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор' ]);
const items = storage.getItems();
console.table(items);
storage.addItem('Дроид');
console.table(storage.items); 
storage.removeItem('Пролонгер');
console.table(storage.items);
