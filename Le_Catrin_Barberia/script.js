// LOADER

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 1200);

});

// ANIMACIONES DE ENTRADA

const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.1
});

sections.forEach((section) => {

    observer.observe(section);

});

// EFECTO SUAVE EN BOTONES

const buttons = document.querySelectorAll(".social-btn");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px) scale(1.01)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});

// SCROLL SUAVE AL CARGAR

window.addEventListener("load", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

function copyAccount(){

    const account =
    "4152314094258467";

    navigator.clipboard.writeText(account);

    const btn =
    document.querySelector(".copy-btn");

    btn.innerHTML =
    '<i class="fa-solid fa-check"></i> Copiado';

    btn.classList.add("copied");

    setTimeout(() => {

        btn.innerHTML =
        '<i class="fa-regular fa-copy"></i> Copiar';

        btn.classList.remove("copied");

    }, 2000);
}