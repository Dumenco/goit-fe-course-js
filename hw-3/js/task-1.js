const user = {
	name: 'Mango',
	age: 20,
	hobby: 'html',
	premium: true
};

user.mode = 'Happi';
user.hobby = 'skydiving';
user.premium= false;
for (let key of Object.keys(user)) {
	console.log(`${key}:${user[key]}`);
}
