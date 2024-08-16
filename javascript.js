// const sideMenu = document.getElementById("menu-tequila");
// const nav = document.getElementById("nav");
// const abrirMenu = document.getElementById("animated");
// abrirMenu.addEventListener("click", () => {
//   sideMenu.classList.toggle("mostrar");
//   nav.classList.add("nav-scrolled");
// });

// pausa al video
const iconPlay = document.getElementById("icon-play");
const video = document.getElementById("videoThll");
const IconPlus = document.getElementById("icon-plus");
iconPlay.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    IconPlus.classList.remove("bx-play-circle");
    IconPlus.classList.add("bx-pause-circle");
  } else {
    video.pause();
    IconPlus.classList.add("bx-play-circle");
    IconPlus.classList.remove("bx-pause-circle");
  }
});

video.addEventListener("ended", () => {
  video.currentTime = 0;
  video.pause();
  IconPlus.classList.add("bx-play-circle");
  IconPlus.classList.remove("bx-pause-circle");
});

// ANIMATION DE IMÁGENES EN GRAL
const imgObserver = document.querySelectorAll(".animate-img");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});
imgObserver.forEach((imgObserver) => {
  observer.observe(imgObserver);
});

// ANIMATION ANEJO Y BLANCO

const imgBefore = document.querySelectorAll(".animate-img-2");

const observerbefore = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show-before", entry.isIntersecting);
  });
});
imgBefore.forEach((imgBefore) => {
  observerbefore.observe(imgBefore);
});

const tituloAnimado = document.querySelectorAll(".animated-titulo");
const observando = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("titulos-animados", entry.isIntersecting);
  });
});
tituloAnimado.forEach((tituloAnimado) => {
  observando.observe(tituloAnimado);
});

const parrafoAnimado = document.querySelectorAll(".animated-parrafo");
const observandoParrafos = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("animando-parrafos", entry.isIntersecting);
  });
});
parrafoAnimado.forEach((parrafoAnimado) => {
  observandoParrafos.observe(parrafoAnimado);
});

// ANIMANDO LAS IMÁGENES DE PROCESO FAN EXPERIENCE E HISTORIA

// ANIMATION DE IMÁGENES EN GRAL

const imgObserverTres = document.querySelectorAll(".animate-img-3");

const observerTres = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("animate-1", entry.isIntersecting);
  });
});
imgObserverTres.forEach((imgObserverTres) => {
  observerTres.observe(imgObserverTres);
});

// animation nav scroll
const body = document.querySelector("body");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    const nav = document.getElementById("nav");
    nav.classList.add("nav-scrolled");
    const logoNav = document.getElementById("logo-nav");
    logoNav.style.filter = "invert(1)";
    const galleryTitle = document.getElementById("animated");
    galleryTitle.style.filter = "invert(1)";
  } else {
    nav.classList.remove("nav-scrolled");
    const logoNav = document.getElementById("logo-nav");
    logoNav.style.filter = "invert(0)";
    const galleryTitle = document.getElementById("animated");
    galleryTitle.style.filter = "invert(0)";
  }
});

//Parrallax
// Efecto de crecimiento en la imagen
window.addEventListener("scroll", function () {
  let scrolled = window.scrollY;
  let image = document.getElementById("parallax");

  // Calcular el factor de escala
  let scaleFactor = 1 + scrolled / 1000;

  // Calcular el desplazamiento hacia la derecha
  let translateX = -scrolled / 1; // Ajusta este valor según la velocidad deseada

  // Limitar el factor de escala a un máximo de 2x
  if (scaleFactor > 2) scaleFactor = 2;

  // Aplicar la transformación
  image.style.transform = `scale(${scaleFactor}) translateY(${translateX}px)`;
});

//Parrallax
// Efecto de crecimiento en la imagen
window.addEventListener("scroll", function () {
  let scrolled = window.scrollY;
  let image = document.getElementById("fondo-header");

  // Calcular el factor de escala
  let scaleFactor = 1 + scrolled / 1000;

  // Calcular el desplazamiento hacia la derecha
  let translateX = scrolled / 5; // Ajusta este valor según la velocidad deseada

  // Limitar el factor de escala a un máximo de 2x
  if (scaleFactor > 2) scaleFactor = 2;

  // Aplicar la transformación
  image.style.transform = `scale(${scaleFactor}) translateY(${translateX}px)`;
});

//Parrallax
// Efecto de crecimiento en la imagen
window.addEventListener("scroll", function () {
  let scrolled = window.scrollY;
  let image = document.getElementById("nubes-parallax");

  // Calcular el desplazamiento hacia la derecha
  let translateX = scrolled / 2; // Ajusta este valor según la velocidad deseada

  // // Limitar el factor de escala a un máximo de 2x
  // if (scaleFactor > 2) scaleFactor = 2;

  // Aplicar la transformación
  image.style.transform = `translateX(${translateX}px)`;
});

fetch("https://ipapi.co/json/")
  .then(function (response) {
    response.json().then((jsonData) => {
      // console.log(jsonData);
      const { city, country_name, timezone } = jsonData;
      // console.log(city, country_name, timezone);
      let DateTime = luxon.DateTime;
      let timeZone = DateTime.local();
      let setZONA = timeZone.setZone(timezone);
      // console.log(setZONA);
      let horaActual = setZONA.c.hour;
      // console.log(horaActual);

      // definimos las imágenes de fondo que se van a intercambiar por hora
      const imagenesDeFondo = {
        amanecer: "url('src/5am.png')",
        manana: "url('src/amanecer.png')",
        tarde: "url('src/atardecer.png')",
        noche: "url('src/background-header-2.png')",
        default: "url('src/background-header-2.png')", // Imagen predeterminada
      };
      function dia() {
        luna.style.opacity = "0.5";
        luna.style.width = "675px";
        luna.style.top = "300px";
        luna.style.right = "0px";
        luna.style.opacity = "0";
        manana2.style.opacity = "1";
      }
      function tarde() {
        luna.style.opacity = "0.2";
        luna.style.width = "375px";
        luna.style.top = "0px";
        luna.style.right = "0px";
        luna.style.opacity = "0.5";
        manana2.style.opacity = "1";
        nubes.style.opacity = "1";
      }
      function imgAtardecer() {
        luna.style.opacity = "0.5";
        luna.style.width = "675px";
        luna.style.top = "300px";
        luna.style.right = "0px";
        nubes.style.opacity = "0";
      }
      // Paso 4: Determinar el momento del día y seleccionar la imagen adecuada
      let imagenFondo;
      const luna = document.getElementById("parallax");
      const manana2 = document.getElementById("manana-parrallax");
      const nubes = document.getElementById("nubes-parallax");
      if (horaActual >= 5 && horaActual < 8) {
        imagenFondo = imagenesDeFondo.amanecer;
        dia();
      } else if (horaActual >= 8 && horaActual < 18) {
        imagenFondo = imagenesDeFondo.manana;
        tarde();
      } else if (horaActual >= 18 && horaActual < 20) {
        imagenFondo = imagenesDeFondo.tarde;
        imgAtardecer();
      } else {
        imagenFondo = imagenesDeFondo.noche;
        manana2.style.opacity = "0";
      }
      // Si la hora no se puede determinar correctamente, usar una imagen predeterminada
      if (!imagenFondo) {
        imagenFondo = imagenesDeFondo.default;
      }
      document.getElementById("section-header").style.backgroundImage =
        imagenFondo;
    });
  })
  .catch(function (error) {
    console.log(error);
  });

// const imgContent = document.querySelectorAll(".img-content-hover");
// function showImgContent(e) {
//   for (var i = 0; i < imgContent.length; i++) {
//     x = e.pageX;
//     y = e.pageY;
//     imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
//   }
// }

// document.addEventListener("mousemove", showImgContent);
