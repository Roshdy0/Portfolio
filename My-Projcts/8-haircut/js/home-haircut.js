let sliderOwl = $('.slider .owl-carousel');
sliderOwl.owlCarousel({
    items:1,
    margin:10,
    nav: true,
    loop:true,
    dots:false,
    autoplay:true,
});

let teamOwl = $('.team .owl-carousel');
teamOwl.owlCarousel({
    items:4,
    margin:10,
    loop:true,    
    autoplay:true,
    autoplayTimeout:10000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1024: {
            items: 4
        },
        1366: {
            items: 4
        }
    }
});

var testimonialOwl = $('.testimonial .owl-carousel');
testimonialOwl.owlCarousel({
    items:1,
    margin:10,
    loop:true,    
    autoplay:true,
    autoplayTimeout:10000
});