const groupAnimals = function(animals) {
	
	const sortedAnimals = animals.sort(function(animal1, animal2) { return animal1 > animal2 });
	const newAnimals = [];
	let index1 = 0;

	while (index1 < sortedAnimals.length) {
		let start = sortedAnimals[index1].charAt(0);
		let startArr = [sortedAnimals[index1]];
		let index2 = index1 + 1;

		while (index2 < sortedAnimals.length) {
			if (start == sortedAnimals[index2].charAt(0)) {
				startArr.push(sortedAnimals[index2]);
				index1 = index2;
			} else {
				index1 = index2 - 1;
				break;
			}

			index2++;
		}

		newAnimals.push(startArr);
		index1++;
	}

	return newAnimals;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
