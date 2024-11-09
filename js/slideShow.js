var owl1 = $('.owl-box'),
owl2 = $('.owl-box2'),
owl3 = $('.owl-box3');
owl4 = $('.owl-portfolio');

let i,
currentIndex = 0,
firstBoxIcon = document.querySelectorAll(".about .partOne .container .firstBox .boxIcon");


function showSlide() {
    for ( i = 0; i < firstBoxIcon.length; i++) {
        firstBoxIcon[i].classList.add("willShow");
    }

    currentIndex++;

    if(currentIndex > firstBoxIcon.length){
        currentIndex = 1
    }

    firstBoxIcon[currentIndex-1].classList.remove("willShow");
    setTimeout(showSlide, 4000);
}
showSlide();

owl1.owlCarousel({
    items:1,
    loop:true,    
    autoplay:true,
    dots:false,
});

owl2.owlCarousel({
    items:3,
    loop:true,   
    margin: 0, 
    autoplay:true,
    dots:false,
});

owl3.owlCarousel({
    items:5,
    loop:true,   
    margin: 0, 
    autoplay:true,
    dots:false,
});

owl4.owlCarousel({
    items:1,
    nav:true,
    loop:true,   
    autoplay:true,
});