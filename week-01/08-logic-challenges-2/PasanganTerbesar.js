function pasanganTerbesar(num) {
	var numLen = (num + '').length;
	var pasanganArr = [];

	for (var index = 0; index < numLen - 1; index++) {
		var pasangan = (num + '').slice(index, index + 2);
		pasanganArr.push(pasangan);
	}
	
	var pasanganTerbesar = pasanganArr.sort(function(val1, val2) { return Number(val1) < Number(val2)});
	return pasanganTerbesar[0];
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
