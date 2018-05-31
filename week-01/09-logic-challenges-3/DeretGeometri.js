// Dengan perbandingan antar nilai deret (beda) => Un+2 / Un+1 = Un+1 / Un
function tentukanDeretGeometri(arr) {
	var status = true;
	
	for (var index = 0; index < arr.length - 2; index++) {
		if ((arr[index + 2] / arr[index + 1]) == (arr[index + 1] / arr[index])) {
			status = status && true;
		} else {
			status = status && false;
		}
	}

	return status;
}

// Dengan menggunakan formula deret geometri => Un = Un-1 * r
function tentukanDeretGeometri2(arr) {
	var beda = arr[1] / arr[0];
	var status = true;

	for (var index = 1; index < arr.length - 1; index++) {
		var Un = arr[index];
		if (Un * beda == arr[index + 1]) {
			status = status && true;
		} else {
			status = status && false;
		}
	}
	
	return status;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
