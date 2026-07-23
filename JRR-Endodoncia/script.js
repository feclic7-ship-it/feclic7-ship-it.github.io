// ==============================
// EndoJimmy - script.js
// ==============================

// ---------- LOADER ----------
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hidden");

        setTimeout(() => {

            loader.remove();

        }, 700);

    }, 1200);

});


// ---------- ANIMACIONES AL HACER SCROLL ----------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".fade").forEach(section => {

    observer.observe(section);

});


// ---------- ANIMACIÓN ESCALONADA DE SERVICIOS ----------

const serviceObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const services = entry.target.querySelectorAll(".service");

            services.forEach((service, index) => {

                setTimeout(() => {

                    service.classList.add("show");

                }, index * 120);

            });

        }

    });

}, {

    threshold: 0.20

});

document.querySelectorAll(".services").forEach(section => {

    serviceObserver.observe(section);

});


// ---------- PARALLAX SUAVE DEL FONDO ----------

const glow1 = document.querySelector(".glow1");
const glow2 = document.querySelector(".glow2");

window.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    if (glow1) {

        glow1.style.transform =
            `translate(${x}px, ${y}px)`;

    }

    if (glow2) {

        glow2.style.transform =
            `translate(${-x}px, ${-y}px)`;

    }

});


// ---------- SCROLL SUAVE ----------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});


// ---------- EFECTO RIPPLE EN BOTONES ----------

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;

        circle.style.top = `${e.clientY - this.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});