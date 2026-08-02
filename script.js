/* ==========================================
   HAPPY BIRTHDAY PREMIUM
   SCRIPT.JS
========================================== */

"use strict";

/* ==========================================
   TARGET TANGGAL
========================================== */

const targetDate = new Date("September 28, 2026 00:00:00").getTime();


/* ==========================================
   TANGGAL HARI INI
========================================== */

const nowDate = new Date();

const hari = [
"Minggu",
"Senin",
"Selasa",
"Rabu",
"Kamis",
"Jumat",
"Sabtu"
];

const bulan = [
"Januari",
"Februari",
"Maret",
"April",
"Mei",
"Juni",
"Juli",
"Agustus",
"September",
"Oktober",
"November",
"Desember"
];

const tanggalHariIni =
hari[nowDate.getDay()] + ", " +
nowDate.getDate() + " " +
bulan[nowDate.getMonth()] + " " +
nowDate.getFullYear();

if(document.getElementById("tanggalSekarang")){
    document.getElementById("tanggalSekarang").innerHTML =
    "📅 " + tanggalHariIni;
}


/* ==========================================
   COUNTDOWN
========================================== */

const countdown = setInterval(function(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance <= 0){

        clearInterval(countdown);

        document.getElementById("timer").innerHTML =
        "🎉 HAPPY BIRTHDAY SAYANGKU HAHA SEMOGAA PANJANG UMUR NYA YAA SEMOGA REZEKI NYA LANCAR TERUS JAGA KESEHATAN NYA OKEI 🎉";

        return;
    }

    const hari =
    Math.floor(distance / (1000*60*60*24));

    const jam =
    Math.floor(
    (distance % (1000*60*60*24)) /
    (1000*60*60)
    );

    const menit =
    Math.floor(
    (distance % (1000*60*60)) /
    (1000*60)
    );

    const detik =
    Math.floor(
    (distance % (1000*60)) /
    1000
    );

    document.getElementById("timer").innerHTML =
    hari+" Hari "+
    jam+" Jam "+
    menit+" Menit "+
    detik+" Detik";

},1000);



/* ==========================================
   PUTAR MUSIK
========================================== */

function playMusic(){

    const music =
    document.getElementById("music");

    if(music){

        music.play().catch(()=>{});

    }

}



/* ==========================================
   BUKA KADO
========================================== */

function openGift(){

    const now =
    new Date().getTime();

    if(now < targetDate){

        alert(
        "🎁 Kado masih terkunci!\n\n" +
        "Kado baru bisa dibuka\n" +
        "28 September 2026 ❤️"
        );

        return;

    }

    const box =
    document.querySelector(".gift-box");

    if(box){

        box.classList.add("open");

    }

    const gift =
    document.getElementById("gift");

    if(gift){

        gift.style.display="block";

    }

    playMusic();

}



/* ==========================================
   HATI TERBANG
========================================== */

function createHeart(){

    const heart =
    document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left =
    Math.random()*100+"%";

    heart.style.animationDuration =
    (Math.random()*3+3)+"s";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },5000);

}

setInterval(createHeart,500);
