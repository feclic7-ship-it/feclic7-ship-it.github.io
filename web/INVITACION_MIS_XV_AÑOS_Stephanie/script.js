// ===================================
// AOS ANIMACIONES
// ===================================

AOS.init({
    duration: 1500,
    once: true
});

// ===================================
// FECHA DEL EVENTO
// CAMBIA EL AÑO SI ES NECESARIO
// FORMATO: AÑO, MES-1, DIA
// ===================================

const targetDate =
new Date(2026, 7, 1, 14, 0, 0).getTime();

// Agosto = 7
// (JavaScript empieza en 0)

// ===================================
// CONTADOR
// ===================================

const days =
document.getElementById("days");

const hours =
document.getElementById("hours");

const minutes =
document.getElementById("minutes");

const seconds =
document.getElementById("seconds");

function updateCountdown(){

    const now =
    new Date().getTime();

    const distance =
    targetDate - now;

    if(distance <= 0){

        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";

        return;
    }

    const d = Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );

    const h = Math.floor(
        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const m = Math.floor(
        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const s = Math.floor(
        (distance %
        (1000 * 60))
        /
        1000
    );

    days.innerHTML =
    String(d).padStart(2,"0");

    hours.innerHTML =
    String(h).padStart(2,"0");

    minutes.innerHTML =
    String(m).padStart(2,"0");

    seconds.innerHTML =
    String(s).padStart(2,"0");
}

setInterval(updateCountdown,1000);

updateCountdown();

// ===================================
// MÚSICA
// ===================================

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click",() => {

    if(!playing){

        music.play();

        musicBtn.innerHTML =
        '<i class="fas fa-pause"></i>';

        playing = true;

    }else{

        music.pause();

        musicBtn.innerHTML =
        '<i class="fas fa-music"></i>';

        playing = false;
    }

});

// ===================================
// SCROLL SUAVE
// ===================================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute("href")
            );

            if(target){

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        }
    );

});

// ===================================
// REVELAR ELEMENTOS
// ===================================

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show"
            );

        }

    });

});

document
.querySelectorAll("section")
.forEach(section => {

    observer.observe(section);

});

// ===================================
// PARALLAX HERO PREMIUM
// ===================================

let ticking = false;

window.addEventListener(
    "scroll",
    () => {

        if(!ticking){

            window.requestAnimationFrame(
                () => {

                    const hero =
                    document.querySelector(
                        ".hero-image"
                    );

                    if(hero){

                        const offset =
                        window.pageYOffset;

                        hero.style.transform =
                        `translateY(${
                        offset * 0.25
                        }px) scale(1.05)`;

                    }

                    ticking = false;

                }
            );

            ticking = true;

        }

    }
);

// ===================================
// EFECTO BOTONES
// ===================================

const buttons =
document.querySelectorAll(
".btn, .whatsapp"
);

buttons.forEach(btn => {

    btn.addEventListener(
        "mouseenter",
        () => {

            btn.style.transform =
            "translateY(-5px) scale(1.03)";

        }
    );

    btn.addEventListener(
        "mouseleave",
        () => {

            btn.style.transform =
            "translateY(0px) scale(1)";

        }
    );

});

// ===================================
// ANIMACIÓN DE ENTRADA
// ===================================

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);

// ===================================
// EFECTO BURBUJAS PREMIUM
// ===================================

function createFloatingElements(){

    for(let i = 0; i < 18; i++){

        const bubble =
        document.createElement("div");

        bubble.classList.add(
            "floating-flower"
        );

        bubble.style.left =
        Math.random() * 100 + "%";

        bubble.style.width =
        (10 + Math.random() * 20)
        + "px";

        bubble.style.height =
        bubble.style.width;

        bubble.style.animationDuration =
        (8 + Math.random() * 10)
        + "s";

        bubble.style.animationDelay =
        Math.random() * 8 + "s";

        document.body.appendChild(
            bubble
        );

    }

}

createFloatingElements();

// ===================================
// GALERÍA EFECTO ZOOM
// ===================================

const galleryImages =
document.querySelectorAll(
".gallery-grid img"
);

galleryImages.forEach(img => {

    img.addEventListener(
        "click",
        () => {

            img.classList.toggle(
                "active-photo"
            );

        }
    );

});

// ===================================
// MENSAJE EN CONSOLA
// ===================================

console.log(
"✨ Invitación XV Stephanie Rancaño Yllescas cargada correctamente ✨"
);