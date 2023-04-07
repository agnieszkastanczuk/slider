const carousel = document.querySelector(".slider__carousel");
const prevBtn = document.querySelector(".btn--prev");
const nextBtn = document.querySelector(".btn--next");

const images = ['pexels-aatommy-milanese-2704910.jpg', 'pexels-alex-montes-4001653.jpg', 'pexels-alfin-auzikri-11446176.jpg', 'pexels-andy-vu-3217911.jpg', 'pexels-element-digital-1051078.jpg', 'pexels-jalessio-cesario-1906879.jpg', 'pexels-janam-thapa-12171663.jpg', 'pexels-mitch-oram-15511578.jpg', 'pexels-paulo-marcelo-martins-2412606.jpg', 'pexels-timur-kozmenko-2474691.jpg', 'pexels-tranmautritam-119777.jpg', 'pexels-zmatt-hardy-2602545.jpg']

//number of slides
const numberOfSlides = images.length;

let indexFirstSlide = 0;

//previous slide
function prevSlide() {
    console.log(indexFirstSlide);
    indexFirstSlide--;
    console.log(indexFirstSlide);

    if (indexFirstSlide < 0) {
        indexFirstSlide = numberOfSlides - 1;
    }

    switch (indexFirstSlide) {
        case numberOfSlides - 2:
            document.getElementById("img-1").src = "/img/" + images[indexFirstSlide];
            document.getElementById("img-2").src = "/img/" + images[indexFirstSlide + 1];
            document.getElementById("img-3").src = "/img/" + images[numberOfSlides - indexFirstSlide - 2];
            break;
        case numberOfSlides - 1:
            document.getElementById("img-1").src = "/img/" + images[indexFirstSlide];
            document.getElementById("img-2").src = "/img/" + images[numberOfSlides - indexFirstSlide - 1];
            document.getElementById("img-3").src = "/img/" + images[numberOfSlides - indexFirstSlide];
            break;
        default:
            document.getElementById("img-1").src = "/img/" + images[indexFirstSlide];
            document.getElementById("img-2").src = "/img/" + images[indexFirstSlide + 1];
            document.getElementById("img-3").src = "/img/" + images[indexFirstSlide + 2];
    }
}

prevBtn.addEventListener('click', function () {
    prevSlide();
});

//next slide
function nextSlide() {
    indexFirstSlide++;

    if (indexFirstSlide >= numberOfSlides) {
        indexFirstSlide = 0;
    }

    switch (indexFirstSlide) {
        case numberOfSlides - 2:
            document.getElementById("img-1").src = "/img/" + images[indexFirstSlide];
            document.getElementById("img-2").src = "/img/" + images[indexFirstSlide + 1];
            document.getElementById("img-3").src = "/img/" + images[numberOfSlides - indexFirstSlide - 2];
            break;
        case numberOfSlides - 1:
            document.getElementById("img-1").src = "/img/" + images[indexFirstSlide];
            document.getElementById("img-2").src = "/img/" + images[numberOfSlides - indexFirstSlide - 1];
            document.getElementById("img-3").src = "/img/" + images[numberOfSlides - indexFirstSlide];
            break;
        default:
            document.getElementById("img-1").src = "/img/" + images[indexFirstSlide];
            document.getElementById("img-2").src = "/img/" + images[indexFirstSlide + 1];
            document.getElementById("img-3").src = "/img/" + images[indexFirstSlide + 2];
    }
}


nextBtn.addEventListener('click', function () {
    nextSlide();
});
