// Array.sort
// method yg digunakan untuk mengurutkan element di dalam Array
// menggunakan algoritma inplace
// Bersifat Mutasi => Merubah secara langsung variabel asli

const bil = [2, 4, 3, 10, 5, 11];
bil.sort(); // pengurutan berdasarkan tabel ASCII
// console.log(bil);

bil.sort((a, b) => a - b); // ascending => dari bawah ke atas
/**
 * 2 - 4 = -
 * 4 - 3 = + => 2 3 4 10 5 11
 * ...
 */
// console.log(bil);

// bil.sort((a, b) => b - a); // descending => dari atas ke bawah
// /**
//  * 4 - 2 = + => 4 2 3 10 5 11
//  * 3 - 2 = + => 4 3 2 10 5 11
//  * ...
//  */
// console.log(bil);


// Array.reverse
// memutar balikkan urutan dari elemen di dalam array
// menggunakan algoritma inplace
// bersifat mutasi

bil.reverse();
// console.log(bil);


// Array.push
// manambahkan elemen baru ke posisi paling belakang
// bersifat mjutasi
// return panjang array setelah di push

const r = bil.push(6);
// console.log(r);
// console.log(bil);


// Array.map
// untuk menjalankan suatu proses berulang untuk setiap elemen array
// mengubah elemen yg lama menjadi elemen yg baru
// bersifat non-mutasi => harus ditampung output

const hasil = bil.map((val) => {
    if (val %2 === 0) return "genap";
    return "ganjil";
});

console.log(bil);
console.log(hasil);


// string.split
// digunakan untuk memisahkan elemen string berdasarkan pemisahnya
// bersifat non-mutasi => harus ditampung output

const str = "saya belajar javascript";
const a = str.split();
const b = str.split("");
const c = str.split(" ");
// console.log(a);
console.log(b);
console.log(c);


// Array.join
// untuk menggabungkan elemen array berdasarkan pemisahnya
// menghasilkan string
// bersifat non-mutasi

const astr = b.join();
const bstr = b.join("");
const cstr = b.join(" ");
console.log(astr);
console.log(bstr);
console.log(cstr);

const d = c.reverse();
console.log(d);
const e = d.join(" ");
console.log(e);