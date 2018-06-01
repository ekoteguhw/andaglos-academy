const targetTerdekat = function(arr) {
	const distanceArr = [];

	for (let index1 = 0; index1 < arr.length; index1++) {
		if (arr[index1] == 'o' || arr[index1] == 'x') {
			let start = arr[index1];
			for (let index2 = index1; index2 < arr.length; index2++) {
				if ((start == 'o' && arr[index2] == 'x') || (start == 'x' && arr[index2] == 'o')) {
					let distance = index2 - index1;
					distanceArr.push(distance);
				}
			}
		}
	}

	if (distanceArr.length > 0) {
		distanceArr.sort(function(d1, d2) { return d1 > d2 });
		return distanceArr[0];
	} else {
		return 0;
	}
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
