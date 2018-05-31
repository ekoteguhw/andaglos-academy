// Dengan selisih antar nilai deret (beda) => Un+2 - Un+1 = Un+1 - Un
function tentukanDeretAritmatika(arr) {
	var status = true;
	
	for (var index = 0; index < arr.length - 2; index++) {
		if ((arr[index + 2] - arr[index + 1]) == (arr[index + 1] - arr[index])) {
			status = status && true;
		} else {
			status = status && false;
		}
	}

	return status;
}

// Dengan menggunakan formula deret aritmatika => Un = Un-1 + b
function tentukanDeretAritmatika2(arr) {
	var beda = arr[1] - arr[0];
	var status = true;

	for (var index = 1; index < arr.length - 1; index++) {
		var Un = arr[index];
		if (Un + beda == arr[index + 1]) {
			status = status && true;
		} else {
			status = status && false;
		}
	}

	return status;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
