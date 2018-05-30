function konversiMenit(menit) {
	var newTime = '';
	if (menit > 60) {
		var jam = Math.floor(menit / 60);
		var sisaMenit = menit - (jam * 60);
		if (sisaMenit < 10) {
			newTime = jam + ':0' + sisaMenit;
		} else {
			newTime = jam + ':' + sisaMenit;
		}
	} else {
		newTime = '0:' + menit;
	}

	return newTime;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
