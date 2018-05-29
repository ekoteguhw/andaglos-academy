// 1. Menyusun Barisan Bintang
var rows1 = 5;
var index = 0;
while (index < rows1) {
  console.log('*');
  index++;
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5;
for (var index1 = 0; index1 < rows2; index1++) {
  var star = '';
  for (var index2 = 0; index2 < rows2; index2++) {
    star += '*';
  }
  console.log(star);
}


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5;
for (var index1 = 0; index1 < rows2; index1++) {
  var star = '';
  for (var index2 = 0; index2 <= index1; index2++) {
    star += '*';
  }
  console.log(star);
}
