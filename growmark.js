document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".default-carousel", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-custom-right",
            prevEl: ".swiper-custom-left",
        },
    });
});