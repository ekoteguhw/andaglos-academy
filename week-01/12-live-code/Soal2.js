/*
	PSEUDOCODE

	STORE "numbers" to any array of numbers
	STORE "totalOdd" to 0
	STORE "index" to 0

	WHILE "index" < length of "numbers"
		STORE "number" to value of "numbers" with "index"

		STORE "numberLeft" to value of "number" with "index" before
		IF "numberLeft" is not undefined
			"numberLeft" equals "numberLeft"
		ELSE
			"numberLeft" equals to 0

		STORE "numberRight" to value of "number" with "index" after
		IF "numberRight" is not undefined
			"numberRight" equals "numberRight"
		ELSE
			"numberRight" equals to 0

		CALCULATE "number" + "numberLeft" + "numberRight"
		STORE "totalNumber" to the result of calculation

		IF "totalNumber" mod 2 equals 1
			ADD "totalOdd" by "totalNumber"

		ADD "index" by 1
	
	RETURN "totalOdd"
 */

const numberCruncher = function (numbers) {
	let totalOdd = 0;

	for (let index = 0; index < numbers.length; index++) {
		let number = numbers[index];
		let numberLeft = numbers[index - 1] != undefined ? numbers[index - 1] : 0;
		let numberRight = numbers[index + 1] != undefined ? numbers[index + 1] : 0;
		let totalNumber = number + numberLeft + numberRight;
		if (totalNumber % 2 == 1) {
			totalOdd += totalNumber;
		}
	}

	return totalOdd;
}

// TEST CASES

console.log(numberCruncher([2, 5, 1, 3])); // 16
console.log(numberCruncher([2, 3, 1, 4, 1, 5, 0, 3])); // 8
console.log(numberCruncher([3, 6, 8, 9, 1, 2, 3])); // 54