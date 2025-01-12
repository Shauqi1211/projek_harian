//contoh kasus array menghapus data dalam array dan pencarian nilai tertinggi siswa

const namaSiswa = ['Budi', 'Ani', 'Siti', 'Abi'];
const nilaiUjian = [75, 90, 85, 95];

// Hapus 'Ani' dan nilai ujiannya
const y = namaSiswa.indexOf('Ani');
if (y !== -1) {
    namaSiswa.splice(y, 1);
    nilaiUjian.splice(y, 1);
}

console.log(namaSiswa); 
console.log(nilaiUjian); 

// Cari nilai tertinggi
let nilaiTertinggi = nilaiUjian[0];
let siswaTertinggi = namaSiswa[0];

for (let i = 1; i < nilaiUjian.length; i++) {
    if (nilaiUjian[i] > nilaiTertinggi) {
        nilaiTertinggi = nilaiUjian[i];
        siswaTertinggi = namaSiswa[i];
    }
}

console.log(`Siswa dengan nilai tertinggi adalah ${siswaTertinggi} dengan nilai ${nilaiTertinggi}`);

//contoh kasus array dalam toko
const daftarBarang = ['Buku', 'Pensil', 'Penghapus', 'Penggaris'];
const stokBarang = [10, 15, 5, 7];

/*Tugas:
Tambah Barang Baru:
Toko menambahkan barang baru bernama "Spidol" dengan stok 12. Tambahkan data ini ke dalam array yang sesuai.

Perbarui Stok:
Barang "Pensil" laku sebanyak 5 unit. Kurangi stoknya.
Barang "Buku" laku sebanyak 2 unit. Kurangi stoknya.

Hapus Barang:
Barang "Penghapus" sudah habis (stoknya 0). Hapus "Penghapus" beserta stoknya dari daftar.
Temukan Barang dengan Stok Tertinggi:

Cari barang yang memiliki stok paling tinggi dan tampilkan nama barang tersebut beserta jumlah stoknya.*/
const daftarBarang = ['Buku', 'Pensil', 'Penghapus', 'Penggaris'];
const stokBarang = [10, 15, 5, 7];

// 1. Tambah Barang Baru
daftarBarang.push('Spidol');
stokBarang.push(12);

// 2. Perbarui Stok
const stokPensil = daftarBarang.indexOf('Pensil');
if (stokPensil !== -1) {
    stokBarang[stokPensil] -= 5; // Kurangi stok Pensil sebanyak 5
}

const stokBuku = daftarBarang.indexOf('Buku');
if (stokBuku !== -1) {
    stokBarang[stokBuku] -= 2; // Kurangi stok Buku sebanyak 2
}

// 3. Hapus Barang (Penghapus sudah habis)
const stokPenghapus = daftarBarang.indexOf('Penghapus');
if (stokPenghapus !== -1){
    daftarBarang.splice(stokPenghapus, 1);
    stokBarang.splice(stokPenghapus, 1);
}

// 4. Temukan Barang dengan Stok Tertinggi
let stokTertinggi = stokBarang[0];
let barangTertinggi = daftarBarang[0];

for (let i = 1; i < stokBarang.length; i++) {
    if (stokBarang[i] > stokTertinggi) {
        stokTertinggi = stokBarang[i];
        barangTertinggi = daftarBarang[i];
    }
}

// Output
console.log('Daftar Barang:', daftarBarang);
console.log('Stok Barang:', stokBarang);
console.log(`Barang dengan stok tertinggi adalah ${barangTertinggi} dengan jumlah stok ${stokTertinggi}.`);
