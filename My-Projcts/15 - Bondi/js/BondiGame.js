let landingOwl = $('.landing .owl-carousel');
landingOwl.owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    autoplay:true,
    autoplayTimeout: 70000,
});

let TeamOwl = $('.team .owl-carousel');
TeamOwl.owlCarousel({
    margin: 20,
    loop: true,
    autoplay:true,
    dotsEach: true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1024: {
            items: 4
        },
    }
});

let BlogOwl = $('.blog .owl-carousel');
BlogOwl.owlCarousel({
    margin: 20,
    loop: true,
    autoplay:true,
    dotsEach: true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1024: {
            items: 3
        },
    }
});