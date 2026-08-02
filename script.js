// ===============================
// COUNTDOWN ULANG TAHUN
// ===============================

// Atur tanggal ulang tahun
let targetDate = new Date("September 28, 2026 00:00:00").getTime();


let countdown = setInterval(function(){

    let now = new Date().getTime();

    let distance = targetDate - now;


    let hari = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    let jam = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    let menit = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    let detik = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    document.getElementById("timer").innerHTML =
    hari + " Hari " +
    jam + " Jam " +
    menit + " Menit " +
    detik + " Detik";


    // Jika waktu sudah tiba
    if(distance < 0){

        clearInterval(countdown);

        document.getElementById("timer").innerHTML =
        "🎉 HAPPY BIRTHDAY 🎉";

    }


},1000);



// ===============================
// BUKA KADO
// ===============================

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

    alert("🎉 Selamat Ulang Tahun! Semoga selalu bahagia ❤️");
}
    

    document.getElementById("gift").style.display="block";


    alert("🎁 Kejutan dibuka! Selamat ulang tahun sayang semoga panjang umurnya berbakti pada orang tua lancar terus rezeki jaga kesehatan nya okeii❤️");

}
// ===============================
// MUSIK ULANG TAHUN
// ===============================
function playMusic(){

    let music = document.getElementById("music");

    music.play();

}
