// ===============================
// TANGGAL HARI H
// ===============================

const targetDate = new Date("September 28, 2026 00:00:00").getTime();


// ===============================
// BUKA KADO
// ===============================

function openGift(){

    let sekarang = new Date().getTime();

    // Jika belum tanggal 28 September
    if(sekarang < targetDate){

        alert(
            "🎁 Kado masih terkunci!\n\n" +
            "Sabar ya ❤️\n" +
            "Kado baru bisa dibuka pada\n" +
            "28 September 2026 🎂"
        );

        return;
    }

    // Jika sudah tanggal 28 September
    let box = document.querySelector(".gift-box");

    if(box){
        box.classList.add("open");
    }

    document.getElementById("gift").style.display = "block";

    // Putar musik jika ada
    let music = document.getElementById("music");

    if(music){
        music.play().catch(() => {});
    }

    alert("🎉 Kejutan dibuka! Selamat ulang tahun sayang semoga panjang umurnya berbakti pada orang tua lancar terus rezeki jaga kesehatan nya okeii❤️");

}
