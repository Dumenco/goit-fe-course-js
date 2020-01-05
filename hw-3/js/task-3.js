const findBestEmployee = (employees) => {
	let employeeMaxValue = 0;
	let employeeMaxKey ;
	for (let key in employees){
		if (employees[key] > employeeMaxValue) {
			employeeMaxValue = employees[key];
			employeeMaxKey = key;
		}
	}
	return employeeMaxKey;
};

console.log(
	findBestEmployee({
		ann: 29,
		david: 35,
		helen: 1,
		lorence: 99
	})
); // lorence

console.log(
	findBestEmployee({
		poly: 12,
		mango: 17,
		ajax: 4
	})
); // mango

console.log(
	findBestEmployee({
		lux: 147,
		david: 21,
		kiwi: 19,
		chelsy: 38
	})
); // lux
