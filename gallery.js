window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    const nav = document.getElementById("nav");
    nav.classList.add("nav-scrolled");

    const galleryTitle = document.getElementById("animated");
    galleryTitle.style.filter = "invert(1)";
  } else {
    nav.classList.remove("nav-scrolled");
    const galleryTitle = document.getElementById("animated");
    galleryTitle.style.filter = "invert(0)";
    // const logoNav = document.getElementById("logo-nav");
    // logoNav.style.filter = "invert(0)";
  }
});

setTimeout(() => {
  const gallery = document.getElementById("gallery");
  gallery.classList.add("show-gallery");
}, 1000);
