// file: script.js

// Daftar siswa mirip dengan struktur Python dictionary
const daftarSiswa = {
    10: { nomor_induk: "10", nama: "Budi" },
    20: { nomor_induk: "20", nama: "Totok" },
    30: { nomor_induk: "30", nama: "Bintoro" }
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
        messageDiv.textContent = "Identitas siswa tidak valid.";
    }
}
