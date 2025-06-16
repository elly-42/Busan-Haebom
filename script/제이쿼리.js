var swiper2 = new Swiper(".fade", {
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1000,
});


$(function () {
    $(".nav>li").mouseenter(function () {
        $(".sub").stop().slideDown();
    });
    $(".nav").mouseleave(function () {
        $(".sub").stop().slideUp();
    });
});