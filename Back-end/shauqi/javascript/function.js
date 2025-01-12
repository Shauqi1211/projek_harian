/*
Studi Kasus: Sistem Pemesanan Tiket Bioskop

Seorang pengembang diminta untuk membuat prototipe sederhana sistem pemesanan tiket bioskop menggunakan JavaScript. Berikut adalah kebutuhan sistemnya:

Harga tiket untuk satu orang adalah Rp50.000.
Jika seseorang membeli lebih dari 5 tiket, mereka mendapatkan diskon 10% dari total harga.
Jika seseorang membeli lebih dari 10 tiket, mereka mendapatkan diskon 20% dari total harga.
Sistem harus menerima input jumlah tiket yang dibeli dan menghitung total harga yang harus dibayar, termasuk diskon (jika ada).
Hasil akhir (total harga) harus ditampilkan di konsol.
*/

//hasil
function hitungHargaTiket(jumlahTiket) {
    const hargaPerTiket = 50000; // Harga per tiket
    let totalHarga = jumlahTiket * hargaPerTiket;
    let diskon = 0;

    // Cek diskon berdasarkan jumlah tiket yang dibeli
    if (jumlahTiket > 10) {
        diskon = 0.20; // 20% diskon jika membeli lebih dari 10 tiket
    } else if (jumlahTiket > 5) {
        diskon = 0.10; // 10% diskon jika membeli lebih dari 5 tiket
    }

    // Hitung total harga setelah diskon
    totalHarga -= totalHarga * diskon;

    // Tampilkan hasil
    console.log(`Jumlah tiket: ${jumlahTiket}`);
    console.log(`Total harga: Rp${totalHarga.toLocaleString()}`);
}

// Meminta input jumlah tiket dari pengguna
let jumlahTiket = parseInt(prompt("Masukkan jumlah tiket yang ingin dibeli:"));

// Pastikan input valid
if (!isNaN(jumlahTiket) && jumlahTiket > 0) {
    hitungHargaTiket(jumlahTiket); // Panggil fungsi dengan jumlah tiket yang dimasukkan pengguna
} else {
    console.log("Input tidak valid, harap masukkan angka yang valid.");
}
