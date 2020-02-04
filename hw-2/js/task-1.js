const logItems = function(array) {
	for (let numberPosit = 0; numberPosit < array.length; numberPosit += 1) {
		console.log(`${numberPosit + 1} : ${array[numberPosit]}`);
	}
};
logItems([ 'Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong' ]);
logItems([ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 500, 1000, 10000 ]);
