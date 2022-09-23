function rataRataUN(mtk, bahasaIndonesia, bahasaInggris, ipa) {
// validasi semua nilai harus disi
  if (
    mtk == null ||
    bahasaIndonesia == null ||
    bahasaInggris == null ||
    ipa == null
  ) {
    return "Semua nilai harus diisi!";
  }
//   validasi nilai harus number
  if (
    typeof mtk !== "number" ||
    typeof bahasaIndonesia !== "number" ||
    typeof bahasaInggris !== "number" ||
    typeof ipa !== "number"
  ) {
    return "Input harus number!";
  }
//   Menghitung rata-rata nilai UN
  const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
  console.log(`Rata-rata = ${rataRata}`);
// Mengecek grade rata-rata dari nilai UN
  if (rataRata >= 90) return "Grade = A";
  if (rataRata >= 80) return "Grade = B";
  if (rataRata >= 70) return "Grade = C";
  if (rataRata >= 60) return "Grade = D";
  return "Grade = E";
}
// Menampilkan hasil rata-rata UN dan grade nya
console.log(rataRataUN(80,90,89,69));