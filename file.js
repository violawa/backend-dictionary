// Kamus istilah backend developer dengan JavaScript
const kamus = {
    API: "Sekumpulan definisi dan protokol untuk membangun dan mengintegrasikan software aplikasi.",
    Asynchronous: "Teknik pemrograman di mana operasi dapat berjalan di latar belakang tanpa menghentikan jalannya program.",
    Backend: "Bagian dari aplikasi yang berfungsi untuk mengelola logika bisnis, basis data, dan komunikasi server.",
    Babel: "Compiler JavaScript yang digunakan untuk mengubah kode ES6+ ke versi JavaScript yang didukung oleh browser yang lebih lama.",
    Callback: "Fungsi yang dilewatkan sebagai argumen ke fungsi lain yang akan dieksekusi setelah operasi selesai.",
    CORS: "Mekanisme yang menggunakan header HTTP untuk memberi tahu browser agar mengizinkan aplikasi web yang berjalan di satu origin untuk mengakses sumber daya yang ada di origin lain.",
    Database: "Tempat penyimpanan data terstruktur yang dapat diakses, dikelola, dan diperbarui secara elektronik.",
    Docker: "Platform untuk mengembangkan, mengirim, dan menjalankan aplikasi dalam kontainer, yang membuat aplikasi lebih portabel dan mudah di-deploy.",
    Express: "Framework web untuk Node.js yang dirancang untuk membangun aplikasi web dan API dengan cepat.",
    Fetch: "Antarmuka JavaScript untuk melakukan permintaan HTTP secara asinkron, menggantikan XMLHttpRequest.",
    GraphQL: "Bahasa query untuk API dan runtime untuk menjalankan query dengan data yang ada. Memungkinkan klien untuk meminta data yang mereka butuhkan dan tidak lebih.",
    HTTP: "Protokol jaringan yang digunakan untuk mengirim dan menerima halaman web melalui internet.",
    JSON: "Format pertukaran data ringan yang mudah dibaca dan ditulis oleh manusia serta mudah diurai dan dihasilkan oleh mesin.",
    Middleware: "Perangkat lunak yang berada di antara aplikasi dan server untuk mengelola dan memproses permintaan.",
    MongoDB: "Database NoSQL yang menggunakan struktur dokumen yang mirip dengan JSON.",
    Mongoose: "Library Node.js yang menyediakan cara untuk memodelkan data aplikasi MongoDB.",
    Node: "Runtime JavaScript yang dibangun di atas mesin JavaScript V8 milik Chrome yang memungkinkan Anda menjalankan JavaScript di server.",
    NPM: "Manajer paket untuk Node.js yang memungkinkan pengembang untuk berbagi dan menggunakan kode kembali dalam proyek mereka.",
    Promise: "Objek yang mewakili penyelesaian atau kegagalan operasi asinkron di masa depan.",
    REST: "Gaya arsitektur untuk merancang layanan web yang menggunakan HTTP untuk membuat, membaca, memperbarui, dan menghapus data.",
    Router: "Komponen yang mengarahkan permintaan ke endpoint yang sesuai dalam aplikasi web.",
    Server: "Komputer atau sistem yang menyediakan data, layanan, atau program ke komputer lain, yang dikenal sebagai klien.",
    Session: "Cara untuk menyimpan data pengguna sementara selama interaksi pengguna dengan aplikasi web.",
    Socket: "Library yang memungkinkan komunikasi real-time, bidirectional, dan berbasis event antara klien dan server.",
    Token: "String yang digunakan untuk mengotentikasi pengguna dan melindungi endpoint API.",
    URL: "Alamat referensi untuk sumber daya di internet.",
    Webpack: "Bundler modul untuk aplikasi JavaScript modern yang mengumpulkan banyak file, seperti JavaScript, CSS, dan gambar, menjadi satu atau lebih bundle yang dapat digunakan di browser."
};

// Fungsi untuk mencari kata dalam kamus
function cariKata(kata) {
    const hasil = kamus[kata];
    if (hasil) {
        console.log(`Definisi dari '${kata}': ${hasil}`);
    } else {
        console.log(`Kata '${kata}' tidak ditemukan dalam kamus.`);
    }
}

// Contoh penggunaan fungsi pencarian
const kataDicari = prompt("Masukkan kata yang ingin dicari:");
cariKata(kataDicari);
