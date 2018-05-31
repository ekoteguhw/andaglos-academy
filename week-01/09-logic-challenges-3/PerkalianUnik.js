function perkalianUnik(arr) {
	var newArr = [];

	for (var index = 0; index < arr.length; index++) {
		var removeItem = arr.splice(index, 1);
		var multChange = 1;
		for (var indexChange = 0; indexChange < arr.length; indexChange++) {
			multChange *= arr[indexChange];
		}
		
		newArr.push(multChange);
		arr.splice(index, 0, removeItem[0]);
	}

	return newArr;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]