
document.addEventListener("DOMContentLoaded", function () {

    // ==================================
    // 1. MENU PARA CELULARES
    // ==================================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("activo");

        const abierto = navLinks.classList.contains("activo");

        menuToggle.setAttribute("aria-expanded", abierto);

        menuToggle.textContent = abierto ? "✕" : "☰";

    });


    // Cerrar menu al seleccionar una opcion

    document.querySelectorAll(".nav-links a").forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            navLinks.classList.remove("activo");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });


    // ==================================
    // 2. ANIMACIONES AL BAJAR
    // ==================================

    const elementos = document.querySelectorAll(".revelar");

    const observador = new IntersectionObserver(function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

                observador.unobserve(entrada.target);

            }

        });

    }, {
        threshold: 0.15
    });


    elementos.forEach(function (elemento) {

        observador.observe(elemento);

    });


    // ==================================
    // 3. CONTADORES ANIMADOS
    // ==================================

    const contadores = document.querySelectorAll(".contador");

    const observadorContadores = new IntersectionObserver(function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                const contador = entrada.target;

                const meta = Number(contador.dataset.meta);

                let numero = 0;

                const incremento = Math.max(1, Math.ceil(meta / 50));

                const intervalo = setInterval(function () {

                    numero += incremento;

                    if (numero >= meta) {

                        numero = meta;

                        clearInterval(intervalo);

                    }

                    contador.textContent = numero;

                }, 35);

                observadorContadores.unobserve(contador);

            }

        });

    }, {
        threshold: 0.5
    });


    contadores.forEach(function (contador) {

        observadorContadores.observe(contador);

    });


    // ==================================
    // 4. BARRA DE PROGRESO
    // ==================================

    const barra = document.getElementById("barraProgreso");

    function actualizarProgreso() {

        const desplazamiento = window.scrollY;

        const altura = document.documentElement.scrollHeight
            - window.innerHeight;

        const progreso = altura > 0
            ? (desplazamiento / altura) * 100
            : 0;

        barra.style.width = progreso + "%";

    }

    window.addEventListener("scroll", actualizarProgreso);

    actualizarProgreso();


    // ==================================
    // 5. BOTON VOLVER ARRIBA
    // ==================================

    const volverArriba = document.getElementById("volverArriba");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            volverArriba.classList.add("visible");

        } else {

            volverArriba.classList.remove("visible");

        }

    });


    volverArriba.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });


    // ==================================
    // 6. AÑO AUTOMATICO
    // ==================================

    document.getElementById("anio").textContent =
        new Date().getFullYear();


    // ==================================
    // 7. MENSAJE DE BIENVENIDA
    // ==================================

    console.log("Bienvenido a Descubre Chachapoyas");

});
