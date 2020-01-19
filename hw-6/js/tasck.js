import users from './users.js';

//1
console.log('task1');
const getUserNames = (users) => {
	return users.map((user) => user.name);
};

console.log(getUserNames(users));

//2
console.log('task2');
const getUsersWithEyeColor = (users, color) => {
	return users.filter((eyeUser) => color === eyeUser.eyeColor);
};

console.log(getUsersWithEyeColor(users, 'blue'));

//3
console.log('task3');
const getUsersWithGender = (users, gender) => {
	return users.filter((genderUser) => gender === genderUser.gender).map((user) => user.name);
};

console.log(getUsersWithGender(users, 'male'));
//4
console.log('task4');
const getInactiveUsers = (users) => {
	return users.filter((userActive) => !userActive.isActive);
};

console.log(getInactiveUsers(users));

//5
console.log('task5');
const getUserWithEmail = (users, email) => {
	return users.find((userEmail) => email === userEmail.email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// //6
console.log('task6');
const getUsersWithAge = (users, min, max) => {
	return users.filter((userAge) => userAge.age >= min && userAge.age <= max);
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));

//7
console.log('task7');
const calculateTotalBalance = (users) => {
	return users.reduce((el, userBalance) => el + userBalance.balance, 0);
};

console.log(calculateTotalBalance(users));

//8
console.log('task8');
const getUsersWithFriend = (users, friendName) => {
	return users.filter((userFrend) => userFrend.friends.includes(friendName)).map((userFrend) => userFrend.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// 9
console.log('task9');
const getNamesSortedByFriendsCount = (users) => {
	return users.sort((a, b) => a.friends.length - b.friends.length).map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));

//10
console.log('task10');
const getSortedUniqueSkills = (users) => {
	let userSkills = users.reduce((acc, { skills }) => [ ...acc, ...skills ], []).sort();
	return [ ...new Set(userSkills) ];
};

console.log(getSortedUniqueSkills(users));
