function printSegitiga(panjang) {
  // validasi data harus number
  if (typeof panjang !== "number") {
    return "Data harus number!";
  }
  let hasil = "";
  for (let i = panjang; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      hasil += j;
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(printSegitiga(5));

