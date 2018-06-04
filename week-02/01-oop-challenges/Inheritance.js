class Hewan {
	constructor(nama, jenis, jumlahKaki) {
		this.nama = nama;
		this.jenis = jenis;
		this.jumlahKaki = jumlahKaki;
		this.modeMakan = false;
	}

	makan() {
		console.log(this.nama + ' (' + this.jenis + ') sedang makan, NYAM! NYAM!');
		return this.modeMakan = true;
	}

	kenyang() {
		console.log(this.nama + ' (' + this.jenis + ') sudah makan dan merasa kenyang, EHEEEK!');
		return this.modeMakan = false;
	}

}

class Burung extends Hewan {
	constructor(nama, jenis, jumlahKaki) {
		super(nama, jenis, jumlahKaki);
		this.modeTerbang = false;
	}

	terbang() {
		console.log(this.nama + ' (' + this.jenis + ') sedang terbang tinggi, WUSSS!');
		return this.modeTerbang = true;
	}

	hinggap() {
		console.log(this.nama + ' (' + this.jenis + ') hinggap di atas dahan pohon, HAAAP!');
		return this.modeTerbang = false;
	}
}

class Sapi extends Hewan {
	constructor(nama, jenis, jumlahKaki) {
		super(nama, jenis, jumlahKaki);
		this.suara = '';
	}

	keluarkanSuaramu() {
		this.suara = 'MOOO...!';
		console.log(this.nama + ' (' + this.jenis + ') mengeluarkan suara, ' + this.suara);
		return this.suara;
	}
}

class Buaya extends Hewan {
	constructor(nama, jenis, jumlahKaki) {
		super(nama, jenis, jumlahKaki);
	}
}


// TEST CODE
const merpati = new Burung('Merpati', 'Unggas', 2);
merpati.terbang();
merpati.hinggap();
merpati.makan();

const sapiBali = new Sapi('Sapi Bali', 'Mamalia', 4);
sapiBali.keluarkanSuaramu();

const buayaNile = new Buaya('Buaya Nile', 'Reptil', 4);
buayaNile.makan();
buayaNile.kenyang();