function xo(str) {
	var totalX = 0;
	var totalO = 0;
	for (var index = 0; index < str.length; index++) {
		var charIndex = str.charAt(index);
		if (charIndex == 'x') {
			totalX += 1;
		} else if (charIndex == 'o') {
			totalO += 1;
		}
	}
	if (totalX == totalO) {
		return true;
	} else {
		return false;
	}
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
