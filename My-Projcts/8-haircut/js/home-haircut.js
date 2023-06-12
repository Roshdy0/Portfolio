var owl = $('.first-owl');
owl.owlCarousel({
    items:1,
    margin:10,
    loop:true,    
    autoplay:true,
    dots:false,
});

var teamOwl = $('.team-owl');
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

var testimonialOwl = $('.testimonial-owl');
testimonialOwl.owlCarousel({
    items:1,
    margin:10,
    loop:true,    
    autoplay:true,
    autoplayTimeout:10000,
});