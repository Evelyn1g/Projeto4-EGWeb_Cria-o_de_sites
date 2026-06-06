/* MENU MOBILE */
// MENU MOBILE
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// ANIMAÇÃO AO ROLAR (fade-in)
const elementos = document.querySelectorAll("section, .card, .step");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

elementos.forEach(el => observer.observe(el));


// FAQ ABRIR/FECHAR
const faqs = document.querySelectorAll('.faq-item');

faqs.forEach(faq => {
    const btn = faq.querySelector('.faq-question');

    btn.addEventListener('click', () => {

        // fecha outras (opcional estilo profissional)
        faqs.forEach(item => {
            if (item !== faq) item.classList.remove('active');
        });

        // abre clicada
        faq.classList.toggle('active');
    });
});



// SCROLL SUAVE (MENU)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// EFEITO BOTÃO (click glow)
const botoes = document.querySelectorAll(".btn");

botoes.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.boxShadow = "0 0 25px #7c4dff";
        setTimeout(() => {
            btn.style.boxShadow = "0 0 10px #7c4dff";
        }, 300);
    });
});


// HEADER MUDA AO SCROLL
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.9)";
        header.style.backdropFilter = "blur(10px)";
    } else {
        header.style.background = "#0d0d0d";
    }
});


/* CARROSSEL AVALIAÇÕES FUNCIONANDO */

const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;
const total = document.querySelectorAll('.card-avaliacao').length;

// botão direita
nextBtn.addEventListener('click', () => {
    index++;
    if (index >= total) index = 0;
    updateCarousel();
});

// botão esquerda
prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) index = total - 1;
    updateCarousel();
});

// atualização
function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

// automático
setInterval(() => {
    index++;
    if (index >= total) index = 0;
    updateCarousel();
}, 4000); // troca a cada 4s


/* ANIMAÇÃO SEÇÃO RESULTADOS */

const counters = document.querySelectorAll('.result-item h3');

counters.forEach(counter => {
    let target = counter.innerText.replace(/\D/g, '');
    let count = 0;

    let update = () => {
        let increment = target / 50;

        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count) + (counter.innerText.includes('%') ? '%' : '+');
            setTimeout(update, 30);
        } else {
            counter.innerText = target + (counter.innerText.includes('%') ? '%' : '+');
        }
    };

    update();
});

/* SEÇÃO ANTES X DEPOIS */
document.addEventListener("DOMContentLoaded", function () {

    const items = document.querySelectorAll('.item');

    if (items.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.3 });

        items.forEach(item => observer.observe(item));
    }

});
