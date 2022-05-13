// $(document).ready(function () {
//     $('.courusel__inner').slick({
//         speed: 600,
//         dots: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/chevron_left.png" alt="slide"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="img/slider/chevron_right.png" alt="slide"></button>',
//         // prevArrow: '<img class="slick-prev" src="../img/slider/chevron_left.png" alt="slide">',
//         // nextArrow: '<img class="slick-next" src="../img/slider/chevron_right.png" alt="slide">',
//         responsive: [
//             {
//                 breakpoint: 480,
//                 settings: {
//                     arrows: false,
//                     dots: true,
//                     slidesToShow: 1,
//                     autoplay: false

//                 }
//             }
//         ]
//     });
// });

const slider = tns({
    container: '.courusel__inner',
    controls: false,
    items: 1,
    slideBy: 'page',
    autoplay: false,
    speed: 600,
    navPosition: "bottom"

});

document.querySelector('.prev').addEventListener("click", function () {
    slider.goTo("prev");
});
document.querySelector('.next').addEventListener("click", function () {
    slider.goTo("next");
});

document.querySelectorAll('.catalog-item__link').forEach((item, i) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelectorAll('.catalog-item__content')[i].classList.remove("catalog-item__content_active");
        document.querySelectorAll('.catalog-item__list')[i].classList.add("catalog-item__list_active");
    });
});

document.querySelectorAll('.catalog-item__link-back').forEach((item, i) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelectorAll('.catalog-item__content')[i].classList.add("catalog-item__content_active");
        document.querySelectorAll('.catalog-item__list')[i].classList.remove("catalog-item__list_active");
    });
});

document.querySelectorAll('.catalog__tab').forEach((item, i) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelectorAll('.catalog__tab').forEach(content => {
            content.classList.remove("catalog__tab_active");
        });

        document.querySelectorAll('.catalog__content').forEach(content => {
            content.classList.remove("catalog__content_active");
        });

        document.querySelectorAll('.catalog__tab')[i].classList.add("catalog__tab_active");
        document.querySelectorAll('.catalog__content')[i].classList.add("catalog__content_active");

    });
});

