for (counter = 1; counter <= 100; counter++) {
  if (counter % 2 == 0) {
    console.log('GENAP');
  } else {
    console.log('GANJIL');
  }
}


for (counter = 1; counter <= 100; counter += 2) {
  if (counter % 3 == 0) {
    console.log(counter + ' KELIPATAN 3');
  } else {
    console.log('');
  }
}


for (counter = 1; counter <= 100; counter += 5) {
  if (counter % 6 == 0) {
    console.log(counter + ' KELIPATAN 6');
  } else {
    console.log('');
  }
}


for (counter = 1; counter <= 100; counter += 9) {
  if (counter % 10 == 0) {
    console.log(counter + ' KELIPATAN 10');
  } else {
    console.log('');
  }
}
