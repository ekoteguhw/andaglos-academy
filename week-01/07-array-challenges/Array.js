// Melakukan Looping Data Array
function dataHandling(input) {
	for (var indexInput = 0; indexInput < input.length; indexInput++) {
		var dataInput = input[indexInput];
		console.log('Nomor ID: ' + dataInput[0]);
		console.log('Nama Lengkap: ' + dataInput[1]);
		console.log('TTL: ' + dataInput[2] + ' ' + dataInput[3]);
		console.log('Hobi: ' + dataInput[4] + '\n');
	}
}

var input = [
	["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input);

// Menggunakan Built-in Function pada Array
function dataHandling2(input) {
	// case 1
	input.splice(1, 1, 'Roman Alamsyah Elsharawy');
	input.splice(2, 1, 'Provinsi Bandar Lampung');
	input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
	console.log(input);

	// case 2
	var bulan = input[3].split('/');
	var namaBulan;
	switch (bulan[1]) {
	  case '01':
	    namaBulan = 'Januari';
	    break;
	  case '02':
	    namaBulan = 'Februari';
	    break;
	  case '03':
	    namaBulan = 'Maret';
	    break;
	  case '04':
	    namaBulan = 'April';
	    break;
	  case '05':
	    namaBulan = 'Mei';
	    break;
	  case '06':
	    namaBulan = 'Juni';
	    break;
	  case '07':
	    namaBulan = 'Juli';
	    break;
	  case '08':
	    namaBulan = 'Agustus';
	    break;
	  case '09':
	    namaBulan = 'September';
	    break;
	  case '10':
	    namaBulan = 'Oktober';
	    break;
	  case '11':
	    namaBulan = 'November';
	    break;
	  case '12':
	    namaBulan = 'Desember';
	    break;
	}
	console.log(namaBulan);

	// case 3
	var sortTanggal = bulan.sort(function(val1, val2){ return Number(val1) < Number(val2) });
	console.log(sortTanggal);

	// case 4
	var newBulan = input[3].split('/');
	var joinTanggal = newBulan.join('-');
	console.log(joinTanggal);

	// case 5
	var nama = input[1];
	var batasNama = nama.slice(0,14);
	console.log(batasNama);
}

dataHandling2(input[0]);