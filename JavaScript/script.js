// ------------------- conteudos aparecendo fluidos ------------------------------------
window.sr = ScrollReveal({ reset: false });

// topo site
sr.reveal('.efeito-txt-topo', {
    duration: 2000,
    distance: '90px'
    
});
sr.reveal('.efeito-img-topo', {
    duration: 2000,
    distance: '90px',
    delay: 500

});



//beneficios
sr.reveal('.efeito-benef1', {
    duration: 2000,
    distance: '90px',
    delay: 400,
    // origin: 'left'
});
sr.reveal('.efeito-benef2', {
    duration: 2000,
    distance: '90px',
    delay: 600,
    // origin: 'left' 
});
sr.reveal('.efeito-benef3', {
    duration: 2000,
    distance: '90px',
    delay: 800,
    // origin: 'left'   
});
sr.reveal('.efeito-benef4', {
    duration: 2000,
    distance: '90px',
    delay: 1000
    // origin: 'left'
});



//catalogo
sr.reveal('.efeito-cata1', {
    duration: 2000,
    distance: '90px',
    delay: 300,
    origin: 'left'
});
sr.reveal('.efeito-cata2', {
    duration: 2000,
    distance: '90px',
    delay: 300,
    origin: 'right'
});

// -------------------------------------------------------------------------------------------







// -------------------- Produtos Carrossel -- ---------------------------------------------------
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        606: {
            slidesPerView: 2,
            spaceBetween: 7,
        },
        650: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        850: {
            slidesPerView: 2,
            spaceBetween: 27,
        },
        905: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        920: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        943: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        970: {
            slidesPerView: 3,
            spaceBetween: 6,
        },
        985: {
            slidesPerView: 3,
            spaceBetween: 7,
        },
        1030: {
            slidesPerView: 3,
            spaceBetween: 12,
        },
        1074: {
            spaceBetween: 20,

        },
        1106: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1179: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1336: {
            slidesPerView: 3,
            spaceBetween: 45
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 7,
        },
        
        
    },
  });

// ------------------------------------------------------------------------------




// -------------------- cabeçalho site --------------------------------------------


// window.addEventListener('scroll', function() {
//     let interf = document.querySelector('.interface');
//     interf.classList.toggle('rolagem', window.scrollY > 50) //'toggle' é um comando que adciona uma class se ela nao existe e remove se ela ja existir
    
// })

const myHeader = document.getElementById('header');

window.addEventListener('scroll', function() {
    let header = document.querySelector('.interface');
    if (window.scrollY > 100) {
        header.classList.add('rolagem');
        myHeader.style.backgroundColor = 'rgb(3, 3, 54, 0.9)';

    } else {
        header.classList.remove('rolagem');
        myHeader.style.backgroundColor = 'rgb(3, 3, 54)';
    }
});

// ------------------------------------------------------------------------------


// ---------------------------- mobile menu -------------------------------------------

let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay');

btnMenu.addEventListener('click', function() {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', function() {
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', function() {
    menu.classList.remove('abrir-menu')
})








// scroll suave
// const menuLinks = document.querySelectorAll('.menu-desktop a[href^="#"]');

// function scrollToSection(event) {
//     event.preventDefault();
//     const distanceFromTop = getDistanceFromTop(event.target) - 0;
//     nativeScroll(distanceFromTop);

//     // const element = event.target;
//     // const id = element.getAttribute("href");
//     // console.log(id);
//     // const section = document.querySelector(id);
//     // console.log(section);
// }
// function getDistanceFromTop(element) {
//     const id = element.getAttribute("href");
//     return document.querySelector(id).offsetTop;
// }

// function nativeScroll(distanceFromTop) {
//     window.scroll({
//         top: distanceFromTop,
//         behavior: "smooth",
//     })
// }


// menuLinks.forEach((link) => {
//     link.addEventListener("click", scrollToSection);
// });

