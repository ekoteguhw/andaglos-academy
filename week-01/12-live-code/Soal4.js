const getReport = function (studentGrades) {
	const reports = [];
	const classCodes = [];

	for (index0 = 0; index0 < studentGrades.length; index0++) {
		if (classCodes.indexOf(studentGrades[index0].classCode) === -1 
			&& studentGrades[index0].classCode !== '') {
			classCodes.push(studentGrades[index0].classCode);
		}
	}

	let index1 = 0;

	while (index1 < classCodes.length) {
		let index2 = 0;
		let report = {
			classCode: classCodes[index1],
			passed: [],
			failed: []
		}

		while (index2 < studentGrades.length) {
			let student = studentGrades[index2];

			if (student.classCode == classCodes[index1]) {
				if (student.score >= 70) {
					report.passed.push(student.name);
				} else {
					report.failed.push(student.name);
				}
			}
			
			index2++;
		}
	
		reports.push(report);
		index1++;
	}

	return reports;
}

// TEST CASES

var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));

/*
[
  { classCode: 'A', failed: [ 'Siti', 'Aaron' ], passed: [ 'John' ] },
  { classCode: 'B', failed: [ 'Mike', 'Osass' ], passed: [] },
  { classCode: 'C', failed: [ 'Arthur' ], passed: [ 'Budi', 'Yolo' ] },
]
*/
