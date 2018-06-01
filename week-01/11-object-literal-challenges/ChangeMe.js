const changeMe = function(arr = []) {
	if (arr.length > 0) {
		for (let index = 0; index < arr.length; index++) {
			const item = arr[index];
			let today = new Date().getFullYear();
			let age = (item[3] == undefined || item[3] == '' || today < item[3]) ? 'Invalid Birth Year' : (today - item[3]);
			let person = {
				firstName: item[0],
				lastName: item[1],
				gender: item[2],
				age: age
			};
			let print = (index + 1) + '. ' + item[0] + ' ' + item[1] + ': ';
			console.log(print);
			console.log(person); 
		}
	} else {
		console.log('""');
	}
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
