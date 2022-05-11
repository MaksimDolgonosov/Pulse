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
    nav: false,
    items: 1,
    slideBy: 'page',
    autoplay: false,
    speed: 600
});

document.querySelector('.prev').addEventListener("click", function () {
    slider.goTo("prev");
});
document.querySelector('.next').addEventListener("click", function () {
    slider.goTo("next");
});