const digitsGrouper = function (numbers) {
	const satuDigit = [];
	const duaDigit = [];
	const tigaDigit = [];
	const empatDigit = [];

	let index = 0;

	while (index < numbers.length) {
		let string = numbers[index] + '';

		switch (string.length) {
			case 1:
				satuDigit.push(numbers[index]);
				break;
			case 2:
				duaDigit.push(numbers[index]);
				break;
			case 3:
				tigaDigit.push(numbers[index]);
				break;
			case 4:
				empatDigit.push(numbers[index]);
				break;
		}
		index++;
	}

	const newArr = [satuDigit, duaDigit, tigaDigit, empatDigit];
	return newArr;
}

// TEST CASES

console.log(digitsGrouper([1, 12, 13, 0, 88, 123, 456])); // [ [ 1, 0 ], [ 12, 13, 88 ], [ 123, 456 ], [] ]
console.log(digitsGrouper([1234, 8, 2, 543, 1, 11, 222, 7654])); // [ [ 8, 2, 1 ], [ 11 ], [ 543, 222 ], [ 1234, 7654 ] ]
console.log(digitsGrouper([1111, 1, 6, 5, 5, 555, 111, 11, 55, 5555])); // [ [ 1, 6, 5, 5 ], [ 11, 55 ], [ 555, 111 ], [ 1111, 5555 ] ]
console.log(digitsGrouper([])); // [ [], [], [], [] ]
console.log(digitsGrouper([0, 00, 000, 0000])); // [ [ 0, 0, 0, 0 ], [], [], [] ]
