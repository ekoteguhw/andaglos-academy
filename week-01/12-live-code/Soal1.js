const drawThreeColsBox = function(height) {
	let box = '';
	for (let index = 1; index <= height * 3; index++) {

		if (index % 3 != 0) {
			box += index + ' ';
		} else {
			box += index;
			console.log(box);
			box = '';
		}
	}
}

// TEST CASES

drawThreeColsBox(3);
//1 2 3
//4 5 6
//7 8 9

drawThreeColsBox(5);
//1 2 3
//4 5 6
//7 8 9
//10 11 12
//13 14 15

drawThreeColsBox(1);
//1 2 3
