/* =========================
   MENU RESPONSIVE
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuBtn.innerHTML = navMenu.classList.contains("active")
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';

    });

}

/* =========================
   CERRAR MENU MOVIL
========================= */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuBtn) {
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }

    });

});

/* =========================
   HEADER SCROLL
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    header.style.background = "#ffffff";

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow =
            "0 2px 20px rgba(0,0,0,.05)";

    }

});

/* =========================
   ANIMACIONES AL SCROLL
========================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".service-card,.benefit-card,.course-card,.mexico-box,.contact-form"
).forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});

/* =========================
   CONTADORES ANIMADOS
========================= */

const counters =
document.querySelectorAll(".hero-stats h3");

function startCounter(counter) {

    const target =
    parseInt(counter.textContent.replace(/\D/g, ""));

    if (isNaN(target)) return;

    let current = 0;

    const increment =
    Math.max(1, target / 100);

    function updateCounter() {

        if (current < target) {

            current += increment;

            counter.textContent = Math.min(
                Math.ceil(current),
                target
            );

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent = target;

        }

    }

    updateCounter();

}

const counterObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* =========================
   BOTON WHATSAPP EFECTO
========================= */

const whatsapp =
document.querySelector(".whatsapp-float");

if (whatsapp) {

    setInterval(() => {

        whatsapp.classList.add("pulse");

        setTimeout(() => {

            whatsapp.classList.remove("pulse");

        }, 1000);

    }, 4000);

}

/* =========================
   FORMULARIO -> WHATSAPP
========================= */

const form =
document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const button =
        form.querySelector("button");

        button.disabled = true;
        button.textContent = "Enviando...";

        const nombre =
        document.getElementById("nombre").value.trim();

        const correo =
        document.getElementById("correo").value.trim();

        const telefono =
        document.getElementById("telefono").value.trim();

        const mensaje =
        document.getElementById("mensaje").value.trim();

        const texto = `Hola FEX 👋

Me interesa recibir una asesoría gratuita.

👤 Nombre: ${nombre}

📧 Correo: ${correo}

📱 Teléfono: ${telefono}

📝 Proyecto:
${mensaje}`;

        const url =
        `https://wa.me/527491040729?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");

        setTimeout(() => {

            button.textContent =
            "Solicitud Enviada ✓";

        }, 1000);

        setTimeout(() => {

            button.textContent =
            "Enviar Solicitud";

            button.disabled = false;

            form.reset();

        }, 3000);

    });

}

/* =========================
   MENSAJE CONSOLA
========================= */

console.log("FEX Soluciones Empresariales ✓");
