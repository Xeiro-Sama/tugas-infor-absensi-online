// file: script.js

// Daftar siswa 
const daftarSiswa = {
    1: { nomor_induk: "1", nama: "Budhi Harto" },
    2: { nomor_induk: "2", nama: "Totok Bin Alubdi" },
    3: { nomor_induk: "3", nama: "Bintoro Bukhiri Ahmad" },
    4: { nomor_induk: "4", nama: "Ahmad Samsul Faisal Hakim" },
    5: { nomor_induk: "5", nama: "Chiheng Goheng" },
    6: { nomor_induk: "6", nama: "Segho Ghoreng" },
    7: { nomor_induk: "7", nama: "Axeno bin mahmud" },
    8: { nomor_induk: "8", nama: "SUlastri saiful" },
    9: { nomor_induk: "9", nama: "Mr. Mukhsinin" },
    10: { nomor_induk: "10", nama: "Siva Novia S." },
    11: { nomor_induk: "11", nama: "A Exha Raindhiendra." },
    12: { nomor_induk: "12", nama: "Stela Geraldine" },
    13: { nomor_induk: "13", nama: "M. Fathur Rizki B." },
    14: { nomor_induk: "14", nama: "Stepen Hawking" }
};

function tampilkanForm(kelas) {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('message').textContent = '';
    document.getElementById('form-container').setAttribute('data-kelas', kelas);
    document.getElementById('menu').style.display = 'none'; // Sembunyikan menu
}

function keluar() {
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('menu').style.display = 'block'; // Tampilkan menu
    document.getElementById('message').textContent = 'Selesai.';
}

function tandaiKehadiran() {
    const nomorInduk = document.getElementById('nomor-induk').value;
    const kelas = document.getElementById('form-container').getAttribute('data-kelas');
    
    const siswa = daftarSiswa[nomorInduk];
    const messageDiv = document.getElementById('message');
    
    if (siswa) {
        messageDiv.textContent = `${siswa.nama} telah hadir di Kelas ${kelas}.`;
    } else {
        messageDiv.textContent = "Identitas siswa tidak valid.";
    }
    
    // Kembali ke menu setelah 2 detik
    setTimeout(() => {
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
        document.getElementById('nomor-induk').value = ''; // Kosongkan input
    }, 2000);
}
