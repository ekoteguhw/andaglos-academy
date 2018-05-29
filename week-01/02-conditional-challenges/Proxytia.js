var nama = 'Teguh';
var peran = 'Ksatria';

if (nama != '') {
  if (peran != '') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    if (peran == 'Ksatria') {
      console.log(
        'Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');
    } else if (peran == 'Tabib') {
      console.log(
        'Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.');
    } else if (peran == 'Penyihir') {
      console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
    }
  } else {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
  }
} else {
  console.log('Nama harus diisi!');
}
