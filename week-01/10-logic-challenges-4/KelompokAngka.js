const mengelompokkanAngka = function(arr) {
	const genapArr = [];
	const ganjilArr = [];
	const kelipatanTigaArr = [];

	let index = 0;

	while (index < arr.length) {
		let start = arr[index];
		if (start % 3 == 0) {
			kelipatanTigaArr.push(start);
			index += 1;
		} else if (start % 2 == 0) {
			genapArr.push(start);
			index += 1;
		} else {
			ganjilArr.push(start);
			index += 1;
		}
	}

	const newArr = [genapArr, ganjilArr, kelipatanTigaArr];

	return newArr;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
