// --- 1. DATA DATABASE KAMUS (ARRAY OF OBJECTS) ---
const DATABASE_KAMUS = [
    {
        istilah: "RAM",
        definisi: "Random Access Memory. Tempat penyimpanan data sementara pada komputer yang digunakan saat aplikasi sedang berjalan."
    },
    {
        istilah: "CSS",
        definisi: "Cascading Style Sheets. Bahasa yang digunakan untuk mengatur tampilan visual, warna, desain, dan tata letak halaman website."
    },
    {
        istilah: "API",
        definisi: "Application Programming Interface. Jembatan protokol komunikasi yang menghubungkan satu aplikasi dengan aplikasi lainnya."
    },
    {
        istilah: "HTML",
        definisi: "HyperText Markup Language. Bahasa standar utama untuk membuat kerangka struktur dasar halaman web."
    },
    {
        istilah: "DATABASE",
        definisi: "Kumpulan data yang disimpan secara sistematis di dalam komputer sehingga dapat diolah dan diakses dengan mudah."
    },
    {
        istilah: "BUG",
        definisi: "Istilah untuk kesalahan, cacat, atau eror di dalam kode program yang menyebabkan aplikasi tidak berjalan semestinya."
    }
];

// --- 2. SELEKSI ELEMEN DOM ---
const elCari = document.getElementById("input-cari");
const wadahKamus = document.getElementById("wrapper-kamus");

// --- 3. FUNGSI UTAMA: MENAMPILKAN & MENYARING DATA ---
function renderKamus(kataKunci = "") {
    // Bersihkan isi wadah kamus terlebih dahulu
    wadahKamus.innerHTML = "";

    // Saring data berdasarkan kata kunci input (ubah ke huruf kecil agar pencarian tidak sensitif huruf)
    const dataTersaring = DATABASE_KAMUS.filter(item => {
        return item.istilah.toLowerCase().includes(kataKunci.toLowerCase());
    });

    // Validasi: Jika data hasil saringan kosong
    if (dataTersaring.length === 0) {
        wadahKamus.innerHTML = `<p class="not-found">Istilah "${kataKunci}" tidak ditemukan... 🔍❌</p>`;
        return;
    }

    // Lakukan perulangan untuk membangun elemen HTML kartu istilah
    dataTersaring.forEach(item => {
        const kartu = document.createElement("div");
        kartu.classList.add("kamus-item");

        kartu.innerHTML = `
            <span class="kamus-title">${item.istilah}</span>
            <p class="kamus-def">${item.definisi}</p>
        `;

        // Tempelkan kartu ke dalam wadah utama di halaman web
        wadahKamus.appendChild(kartu);
    });
}

// --- 4. BINDING EVENT LISTENERS ---
// Menggunakan event 'input' agar pencarian langsung menyaring otomatis setiap kali tombol keyboard diketik
elCari.addEventListener("input", function() {
    renderKamus(elCari.value);
});

// Jalankan fungsi satu kali di awal agar seluruh isi kamus tampil saat web pertama dimuat
renderKamus();
