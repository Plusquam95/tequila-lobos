const validar = document.getElementById("validate");
const year = document.getElementById("year");
const acceder = document.getElementById("acceder");
const aviso = document.getElementById("alert");
function avisoBienvenida() {
  if (localStorage.getItem("NoMostrar")) {
    localStorage.setItem("NoMostrar", "no");
  } else {
    setTimeout(() => {
      validar.classList.add("animation-aviso");
    }, 2000);
  }
}

window.addEventListener("load", avisoBienvenida);

function cerrarBienvenida() {
  localStorage.setItem("NoMostrar", "no");
  setTimeout(() => {
    if (year.value >= 18) {
      validar.classList.remove("animation-aviso");
    } else {
      aviso.style.display = "block";
    }
  }, 2000);
}

acceder.addEventListener("click", cerrarBienvenida);
