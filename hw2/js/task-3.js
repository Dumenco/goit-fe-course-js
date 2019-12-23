const findLongestWord = function(string) {
	const word = string.split(' ');
	let longWord = word[0];
	for (const oneWord of word) {
		if (oneWord.length > longWord.length) {
			longWord = oneWord;
		}
	}
	return longWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
