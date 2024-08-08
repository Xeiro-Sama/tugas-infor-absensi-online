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
    9: { nomor_induk: "9", nama: "Mr. Mukhsinin" }
};

function tampilkanForm(kelas) {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('message').textContent = '';
    document.getElementById('form-container').setAttribute('data-kelas', kelas);
}

function keluar() {
    document.getElementById('form-container').style.display = 'none';
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
        messageDiv.textContent = "Identitas siswa tidak valid. Masukan Identitas yang benar.";
    }
}
