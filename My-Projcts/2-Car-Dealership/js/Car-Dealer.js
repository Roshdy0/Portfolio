//Animate Gear And Show Setting
let gear = document.querySelector(".navbar .fa-bars");
let dropDownPhone = document.querySelector(".navbar .navbar-dropdown"); 
gear.onclick = function() {
    this.classList.toggle("fa-bars-staggered");
    dropDownPhone.classList.toggle("show");
};

let startNavMove = document.querySelector(".section1 .text");
let navBar = document.querySelector(".navbar");
let logo = document.querySelector(".logo");
let menu = document.querySelector(".menu");
let menuPhone = document.querySelector(".menu-phone");

let counter = document.querySelector(".counter");
let number = document.querySelectorAll(".counter .box .number");
let started = false; // Function started ? No

let slidCar = document.querySelector(".section2 .container .call");
let slideCarLeft = document.querySelector(".section2 .car-left");
let slideCarRight = document.querySelector(".section2 .car-right");

function StartCount(count) {
    let num = count.dataset.count;
    let inter = setInterval(() =>{
        count.textContent++;
        if (count.textContent == num) {
            clearInterval(inter);
        }
    }, 10);
}
// 3 - Stop setInterval || Counter
window.onscroll = function () {
    /* Start Nav Bar */
    if (window.scrollY >= startNavMove.offsetTop - 80) {
        navBar.style.backgroundColor = "var(--Header-color)";
        logo.style.padding = "15px 0";
        menuPhone.style.padding = "10px 0";
        menu.style.padding = "20px 0 0 0";
    } else {
        navBar.style.backgroundColor = "transparent";
        logo.style.padding = "30px 0";
        menu.style.padding = "40px 0 0 0";
    }

    /* Start Counter */
    if ( window.scrollY >= counter.offsetTop ) {
        if (!started){
            number.forEach((num) => StartCount(num));
        }
        started = true
    }

    /* Start Animation Slide Car */
    if ( window.scrollY >= slidCar.offsetTop) {
        console.log("lab lab ;lan")
        slideCarLeft.style.animation = "side-car-left 3s";
        slideCarRight.style.animation = "side-car-right 3s";        
    } else {
        slideCarLeft.style.animation = "none";
        slideCarRight.style.animation = "none";  
    }
}
/* End Counter */

var owl = $('.feature .owl');
owl.owlCarousel({
    items:4,
    margin:10,
    loop:true,

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

var owl = $('.testimonial .owl');
owl.owlCarousel({
    items:3,
    margin:10,
    loop:true,    
    autoplay:true,
    dotsEach:true,  
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1024: {
            items: 4
        }
    }
});



