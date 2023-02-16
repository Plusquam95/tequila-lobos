const sideMenu  = document.getElementById('menu-tequila');
const abrirMenu = document.getElementById('animated');
abrirMenu.addEventListener('click',()=>{

    sideMenu.classList.toggle('mostrar');
})

// ANIMATION DE IMÁGENES EN GRAL

const imgObserver = document.querySelectorAll('.animate-img');

const observer = new IntersectionObserver( 
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
        })
    },
    {
    threshold:1,
    }
)
    imgObserver.forEach( imgObserver => {
        observer.observe(imgObserver);
    })


    // ANIMATION ANEJO Y BLANCO

    const imgBefore = document.querySelectorAll('.animate-img-2');
    
    const observerbefore = new IntersectionObserver( 
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show-before", entry.isIntersecting)
        })
    },
    {
    threshold:1,
    }
)
    imgBefore.forEach( imgBefore => {
        observerbefore.observe(imgBefore);
    })


    // Transparencia en blur del nav

    const sectionIntersected = document.getElementById('section-history');
    const nav = document.getElementById('nav');

    const sectionOneOptions = {};

    const sectionOneObserver = new IntersectionObserver(
    function (
       
        entries,
        sectionOneObserver
    ){
        entries.forEach(entry => {

           if(entry.isIntersecting){

            nav.classList.add('nav-scrolled')

           }else{
            nav.classList.remove('nav-scrolled')
           }
        })
    },
        sectionOneOptions);

sectionOneObserver.observe(sectionIntersected);
