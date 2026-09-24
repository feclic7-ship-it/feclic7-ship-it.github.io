/* =========================================================
   XV AÑOS NELLY GUADALUPE PORTADO CASTRO
========================================================= */


/* =========================================================
   AOS - ANIMACIONES
========================================================= */

AOS.init({

    duration: 1200,

    once: true,

    offset: 80

});


/* =========================================================
   FECHA DEL EVENTO
=========================================================

   IMPORTANTE:

   AÚN NO ME PROPORCIONASTE LA FECHA DE LOS XV.

   Por eso se conserva provisionalmente:

   1 de agosto de 2026
   4:30 PM

   Cuando tengas la fecha real cambia solamente
   esta línea.

   FORMATO:

   new Date(AÑO, MES-1, DÍA, HORA, MINUTOS, SEGUNDOS)

========================================================= */

const targetDate =
    new Date(2026, 11, 5, 16, 30, 0).getTime();


/* =========================================================
   ELEMENTOS DEL CONTADOR
========================================================= */

const days =
    document.getElementById("days");

const hours =
    document.getElementById("hours");

const minutes =
    document.getElementById("minutes");

const seconds =
    document.getElementById("seconds");


/* =========================================================
   CONTADOR
========================================================= */

function updateCountdown() {

    const now =
        new Date().getTime();

    const distance =
        targetDate - now;


    /* -----------------------------------------
       EVENTO TERMINADO
    ----------------------------------------- */

    if (distance <= 0) {

        days.innerHTML = "00";

        hours.innerHTML = "00";

        minutes.innerHTML = "00";

        seconds.innerHTML = "00";

        return;

    }


    /* -----------------------------------------
       DÍAS
    ----------------------------------------- */

    const d =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    /* -----------------------------------------
       HORAS
    ----------------------------------------- */

    const h =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    /* -----------------------------------------
       MINUTOS
    ----------------------------------------- */

    const m =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    /* -----------------------------------------
       SEGUNDOS
    ----------------------------------------- */

    const s =
        Math.floor(
            (
                distance %
                (1000 * 60)
            ) /
            1000
        );


    /* -----------------------------------------
       MOSTRAR RESULTADOS
    ----------------------------------------- */

    days.innerHTML =
        String(d).padStart(2, "0");

    hours.innerHTML =
        String(h).padStart(2, "0");

    minutes.innerHTML =
        String(m).padStart(2, "0");

    seconds.innerHTML =
        String(s).padStart(2, "0");

}


/* Actualización */

setInterval(
    updateCountdown,
    1000
);

updateCountdown();


/* =========================================================
   MÚSICA
========================================================= */

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

let playing =
    false;


musicBtn.addEventListener(
    "click",
    () => {

        if (!playing) {

            music.play()
                .then(() => {

                    musicBtn.innerHTML =
                        '<i class="fas fa-pause"></i>';

                    musicBtn.setAttribute(
                        "aria-label",
                        "Pausar música"
                    );

                    playing = true;

                })
                .catch(error => {

                    console.log(
                        "No se pudo reproducir la música:",
                        error
                    );

                });

        }

        else {

            music.pause();

            musicBtn.innerHTML =
                '<i class="fas fa-music"></i>';

            musicBtn.setAttribute(
                "aria-label",
                "Reproducir música"
            );

            playing = false;

        }

    }
);


/* =========================================================
   SCROLL SUAVE
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    target.scrollIntoView({

                        behavior:
                            "smooth",

                        block:
                            "start"

                    });

                }

            }
        );

    });


/* =========================================================
   REVELAR SECCIONES
========================================================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.10
        }
    );


document
    .querySelectorAll("section")
    .forEach(section => {

        observer.observe(section);

    });


/* =========================================================
   PARALLAX DEL HERO
========================================================= */

let ticking =
    false;


window.addEventListener(
    "scroll",
    () => {

        if (!ticking) {

            window.requestAnimationFrame(
                () => {

                    const hero =
                        document.querySelector(
                            ".hero-image"
                        );

                    if (hero) {

                        const offset =
                            window.pageYOffset;

                        /*
                           Limitamos el efecto para evitar
                           movimientos excesivos.
                        */

                        const movement =
                            Math.min(
                                offset * 0.20,
                                180
                            );

                        hero.style.transform =
                            `translateY(${movement}px) scale(1.05)`;

                    }

                    ticking =
                        false;

                }
            );

            ticking =
                true;

        }

    }
);


/* =========================================================
   EFECTO DE BOTONES
========================================================= */

const buttons =
    document.querySelectorAll(
        ".btn, .whatsapp, .card a"
    );


buttons.forEach(
    btn => {

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
                    "translateY(0) scale(1)";

            }
        );

    }
);


/* =========================================================
   ANIMACIÓN DE ENTRADA
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);


/* =========================================================
   ELEMENTOS FLOTANTES
========================================================= */

function createFloatingElements() {

    const amount =
        window.innerWidth <= 600
            ? 10
            : 18;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const bubble =
            document.createElement(
                "div"
            );


        bubble.classList.add(
            "floating-flower"
        );


        bubble.style.left =
            Math.random() * 100 + "%";


        const size =
            8 +
            Math.random() * 18;


        bubble.style.width =
            size + "px";


        bubble.style.height =
            size + "px";


        bubble.style.animationDuration =
            (
                8 +
                Math.random() * 10
            ) + "s";


        bubble.style.animationDelay =
            Math.random() * 8 + "s";


        document.body.appendChild(
            bubble
        );

    }

}


createFloatingElements();


/* =========================================================
   GALERÍA
========================================================= */

const galleryImages =
    document.querySelectorAll(
        ".gallery-grid img"
    );


galleryImages.forEach(
    img => {

        img.addEventListener(
            "click",
            () => {

                img.classList.toggle(
                    "active-photo"
                );

            }
        );

    }
);


/* =========================================================
   PAUSAR ANIMACIONES SI EL USUARIO
   PREFIERE MENOS MOVIMIENTO
========================================================= */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (
    prefersReducedMotion.matches
) {

    document.documentElement.style
        .scrollBehavior = "auto";

}


/* =========================================================
   MENSAJE DE CONSOLA
========================================================= */

console.log(
    "✨ Invitación XV Nelly Guadalupe Portado Castro cargada correctamente ✨"
);