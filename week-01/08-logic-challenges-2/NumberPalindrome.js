function angkaPalindrome(angka) {
	var counter = angka;

	while(counter) {
		var counterNum = (counter + '').split('').join('');
		var reverseNum = (counter + '').split('').reverse().join('');

		if (counterNum == reverseNum) {
			if (angka != Number(counterNum)) {
				return counterNum;
				break;
			}
		}

		counter++;
	}
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
