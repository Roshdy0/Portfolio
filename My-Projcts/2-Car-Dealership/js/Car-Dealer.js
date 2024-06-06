//When click on menu bar will show menu list----------------------------------------------------
let gear = document.querySelector(".navbar .fa-bars"),
    dropDownPhone = document.querySelector(".navbar .navbar-dropdown"); 
gear.onclick = function() {
    this.classList.toggle("fa-bars-staggered");
    dropDownPhone.classList.toggle("powerDrop");
    dropDownPhone.classList.toggle("powerUp");
};


// Counter -------------------------------------------------------------------------------------
let counter = document.querySelector(".counter"),
    number = document.querySelectorAll(".counter .box .number"),
    started = false; // Function started ? No

function StartCount(count) {
    let num = count.dataset.count;
    let inter = setInterval(() =>{
        count.textContent++;
        if (count.textContent == num) {
            clearInterval(inter);
        }
    }, 10);
}


// onScroll ------------------------------------------------------------------------------------
let startNavMove = document.querySelector(".section1 .text"),
    navBar = document.querySelector(".navbar");

let slidCar = document.querySelector(".section2 .container .call"),
    slideCarLeft = document.querySelector(".section2 .car-left"),
    slideCarRight = document.querySelector(".section2 .car-right");

window.onscroll = function () {
    /* Change background navBar */
    if (window.scrollY >= startNavMove.offsetTop + 20) {
        navBar.style.backgroundColor = "var(--Header-color)";
    } else {
        navBar.style.backgroundColor = "transparent";
    }

    /* Start Counter */
    if ( window.scrollY >= counter.offsetTop - 300 ) {
        if (!started){
            number.forEach((num) => StartCount(num));
        }
        started = true
    }
    
    /* Start Animation Slide Car */
    if ( window.scrollY >= slidCar.offsetTop + 50) {
        slideCarLeft.style.animation = "side-car-left 3s";
        slideCarRight.style.animation = "side-car-right 3s";        
    }
}


// Slide show by owl courser -------------------------------------------------------------------
var owl = $('.feature .owl'),
    owl2 = $('.testimonial .owl');

owl.owlCarousel({
    items:4,
    margin:10,
    loop:true,
    dotsEach: true,
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

owl2.owlCarousel({
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
        },
    }
});

// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
document.addEventListener('contextmenu', (e) => e.preventDefault());
  function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
}; 