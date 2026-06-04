/* =========================
   MENU RESPONSIVE
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }else{
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }

});

/* =========================
   CERRAR MENU MOVIL
========================= */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

/* =========================
   SCROLL SUAVE
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    });

});

/* =========================
   HEADER SCROLL
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "#ffffff";
        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.08)";

    }else{

        header.style.background = "#ffffff";
        header.style.boxShadow = "none";

    }

});

/* =========================
   ANIMACIONES AL SCROLL
========================= */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
".service-card,.benefit-card,.course-card,.mexico-box,.contact-form"
).forEach(el=>{

    el.classList.add("hidden");
    observer.observe(el);

});

/* =========================
   CONTADORES ANIMADOS
========================= */

const counters = document.querySelectorAll(".hero-stats h3");

const startCounter = (counter) => {

    const target =
    parseInt(counter.innerText.replace(/\D/g,''));

    let current = 0;

    const increment = target / 100;

    const updateCounter = () => {

        if(current < target){

            current += increment;

            counter.innerText =
            Math.ceil(current) + "+";

            requestAnimationFrame(updateCounter);

        }else{

            counter.innerText =
            target + "+";

        }

    };

    updateCounter();

};

const counterObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startCounter(entry.target);

            counterObserver.unobserve(
                entry.target
            );

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

/* =========================
   BOTON WHATSAPP EFECTO
========================= */

const whatsapp =
document.querySelector(".whatsapp-float");

setInterval(()=>{

    whatsapp.classList.add("pulse");

    setTimeout(()=>{

        whatsapp.classList.remove("pulse");

    },1000);

},4000);

/* =========================
   REVELAR HERO
========================= */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

/* =========================
   FOOTER AÑO AUTOMATICO
========================= */

const yearSpan =
document.querySelector(".year");

if(yearSpan){

    yearSpan.textContent =
    new Date().getFullYear();

}

/* =========================
   EFECTO PARALLAX HERO
========================= */

const heroImage =
document.querySelector(".hero-image img");

window.addEventListener("scroll",()=>{

    const scroll =
    window.pageYOffset;

    if(heroImage){

        heroImage.style.transform =
        `translateY(${scroll * 0.08}px)`;

    }

});

/* =========================
   FORMULARIO
========================= */

const form =
document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const button =
    form.querySelector("button");

    button.innerHTML =
    "Enviando...";

    setTimeout(()=>{

        button.innerHTML =
        "Solicitud Enviada ✓";

    },1500);

});

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let nombre = document.getElementById("nombre").value;
let correo = document.getElementById("correo").value;
let telefono = document.getElementById("telefono").value;
let mensaje = document.getElementById("mensaje").value;

let texto = `Hola, quiero solicitar una asesoría.%0A%0A
👤 Nombre: ${nombre}%0A
📧 Correo: ${correo}%0A
📱 Teléfono: ${telefono}%0A
📝 Proyecto: ${mensaje}`;

window.open(
`https://wa.me/527491040729?text=${texto}`,
'_blank'
);

});

}