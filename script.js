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

function openGift(){

    let box = document.querySelector(".gift-box");

    if(box){
        box.classList.add("open");
    }


    document.getElementById("gift").style.display="block";


    alert("🎁 Kejutan dibuka! Selamat ulang tahun ❤️");

}
