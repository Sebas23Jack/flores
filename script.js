// ==========================================
// INICIO DE LA PÁGINA
// ==========================================

const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");

startBtn.addEventListener("click", () => {

    intro.classList.add("hidden");

    crearPetalos();

    // Si agregas música:
    /*
    const music = document.getElementById("music");

    music.play().catch(() => {
        console.log("El navegador bloqueó el autoplay");
    });
    */

});


// ==========================================
// BOTÓN TE AMO
// ==========================================

const loveButton = document.getElementById("loveButton");

loveButton.addEventListener("click", () => {

    crearCorazones();

});


// ==========================================
// MODAL
// ==========================================

const surpriseButton =
    document.getElementById("surpriseButton");

const loveModal =
    document.getElementById("loveModal");

const closeModal =
    document.getElementById("closeModal");


surpriseButton.addEventListener("click", () => {

    loveModal.classList.add("active");

    crearCorazones();

});


closeModal.addEventListener("click", () => {

    loveModal.classList.remove("active");

});


loveModal.addEventListener("click", (event) => {

    if (event.target === loveModal) {

        loveModal.classList.remove("active");

    }

});


// ==========================================
// PÉTALOS
// ==========================================

function crearPetalos() {

    setInterval(() => {

        const petal = document.createElement("div");

        petal.classList.add("petal");

        petal.innerHTML = "🌼";

        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.fontSize =
            (Math.random() * 15 + 12) + "px";

        petal.style.animationDuration =
            (Math.random() * 5 + 5) + "s";

        document.body.appendChild(petal);


        setTimeout(() => {

            petal.remove();

        }, 10000);

    }, 500);

}


// ==========================================
// CORAZONES
// ==========================================

function crearCorazones() {

    for (let i = 0; i < 20; i++) {

        const heart =
            document.createElement("div");

        heart.classList.add("petal");

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (Math.random() * 20 + 15) + "px";

        heart.style.animationDuration =
            (Math.random() * 3 + 3) + "s";

        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 7000);

    }

}


// ==========================================
// REVEAL AL HACER SCROLL
// ==========================================

const elements =
    document.querySelectorAll(
        ".reason, .timeline-item, .photo-card, .letter-container"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


elements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity .8s ease, transform .8s ease";

    observer.observe(element);

});