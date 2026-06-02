// =========================
// AOS ANIMACIONES
// =========================

AOS.init({
    duration: 1500,
    once: true
});

// =========================
// CONTADOR XV AÑOS KATY
// =========================

// CAMBIA ESTA FECHA
const targetDate = new Date(2055, 11, 31, 23, 59, 59).getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";

        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const m = Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const s = Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// =========================
// MUSICA
// =========================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicBtn.innerHTML =
        '<i class="fas fa-pause"></i>';

        playing = true;

    } else {

        music.pause();

        musicBtn.innerHTML =
        '<i class="fas fa-music"></i>';

        playing = false;
    }

});


// =========================
// EFECTO SCROLL SUAVE
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// =========================
// REVELAR ELEMENTOS AL SCROLL
// =========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});


// =========================
// EFECTO PARALLAX HERO
// =========================

window.addEventListener("scroll", () => {

    const hero =
    document.querySelector(".hero-image");

    if(hero){

        let offset = window.pageYOffset;

        hero.style.transform =
        `translateY(${offset * 0.3}px)`;

    }

});


// =========================
// EFECTO BRILLO BOTONES
// =========================

const buttons =
document.querySelectorAll(".btn, .whatsapp");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
        "translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
        "translateY(0px) scale(1)";

    });

});


// =========================
// EFECTO APARICIÓN HERO
// =========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// =========================
// FLORES DECORATIVAS (opcional)
// =========================

for(let i = 0; i < 10; i++){

    const flower =
    document.createElement("div");

    flower.classList.add("floating-flower");

    flower.style.left =
    Math.random() * 100 + "%";

    flower.style.animationDuration =
    (8 + Math.random() * 10) + "s";

    document.body.appendChild(flower);

}