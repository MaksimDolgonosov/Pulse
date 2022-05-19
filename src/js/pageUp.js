const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 700) {


            upElem.classList.add("animated", "fadeIn");
            upElem.classList.remove("fadeOut");
            upElem.style.display = "block";
        } else {


            upElem.classList.add("fadeOut");
            upElem.classList.remove("fadeIn");
            upElem.style.display = "none";
        }
    });
};
scrolling(".pageup");
// Scrolling with raf

let links = document.querySelectorAll('[href^="#"]');
let speed = 0.1;
// console.log(links);
links.forEach(link => {
    if (link.getAttribute("href") != "#") {

        link.addEventListener('click', function (event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop;
            let hash = this.hash;
            let toBlock = document.querySelector(hash).getBoundingClientRect().top; // метод, позволяющий получить количество пикселей до элемента(его верхней границы)
            let start = null;

            requestAnimationFrame(step);

            function step(time) { //time - время, прошедшее с момента начала загрузки страницы в милисекундах. Это callback функция requestAnimationFrame

                if (start === null) {
                    start = time;
                }

                let progress = time - start;

                let r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }

        });
    }
});



