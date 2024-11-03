function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const time = now.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('datetime').innerHTML = `${date} ${time}`;
}

// Panggil fungsi updateDateTime setiap detik
setInterval(updateDateTime, 1000);

// Panggil fungsi pertama kali untuk menampilkan waktu segera setelah halaman dimuat
updateDateTime();
