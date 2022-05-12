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

document.querySelector('.catalog-item__link').addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector('.catalog-item__content').classList.remove("catalog-item__content_active");
    document.querySelector('.catalog-item__list').classList.add("catalog-item__list_active");
});

document.querySelector('.catalog-item__link-back').addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector('.catalog-item__content').classList.add("catalog-item__content_active");
    document.querySelector('.catalog-item__list').classList.remove("catalog-item__list_active");
});
