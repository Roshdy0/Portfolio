/* Start Setting */
let setting = document.querySelector(".setting"),
gear = document.querySelector(".toggle .fa-gear");
//Start animate gear and show setting
gear.onclick = function() {
    this.classList.toggle("fa-spin");
    setting.classList.toggle("open");
    
};

// Should Make Short Code 
let changeCurrency = document.querySelector(".header .top .header-user .dropdown-toggle"),
    MenuCurrency = document.querySelector(".header .top .header-user .dropdown-menu"),
    changeCurrency2 = document.querySelector(".header .top .header-user .dropdown-toggle.two"),
    MenuCurrency2 = document.querySelector(".header .top .header-user .dropdown-menu.two");
changeCurrency.onclick = function() {
    MenuCurrency.classList.toggle("show");
}
changeCurrency2.onclick = function(){
    MenuCurrency2.classList.toggle("show");
}

// Start Landing 
let landingOwl = $('.landing .owl-carousel');
landingOwl.owlCarousel({
    items:1,
    nav: true,
    loop:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:10000,
});
// End Landing

// Start Deal
let dealOwl = $('.offer .slid .offer-owl');
dealOwl.owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
});

let countDownDate = new Date("Feb 20, 2026 23:59:59").getTime();
let counterTimer = setInterval(() => {
    let dateNow = new Date().getTime();
    let difference =  countDownDate - dateNow ;
    let days = Math.floor(difference /(1000 * 60 * 60 * 24) );
    let hours =  Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes =  Math.floor((difference % (1000 * 60 * 60 ) )/ (1000 * 60 ));
    let seconds =  Math.floor((difference % (1000 * 60 ))/ (1000));

    document.querySelector(".offer .timer .box  .days").innerHTML = days < 10? `0${days}` : days;
    document.querySelector(".offer .timer .box .hours").innerHTML = hours < 10? `0${hours}` : hours;
    document.querySelector(".offer .timer .box .minutes").innerHTML = minutes < 10? `0${minutes}` : minutes;
    document.querySelector(".offer .timer .box .seconds").innerHTML = seconds < 10? `0${seconds}` : seconds;
    if(difference < 0 ){
        clearInterval(counterTimer);
    }
}, 1000);
// End Deal

/* Start Featured */
let featuredOwl = $('.featured-owl');
featuredOwl.owlCarousel({
    items: 5,
    margin: 5,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1024: {
            items: 5
        },
    }
});
/* End Featured */

// Start Opinion
let owlOpinion = $('.opinion-owl');
owlOpinion.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
});
// End Opinion

// let mainColors = localStorage.getItem("color_option");
// const colorLi = document.querySelectorAll(".color-list li");
// colorLi.forEach(li => {
//     li.addEventListener("click", (e) =>{
//         document.documentElement.style.setProperty('--hover-color', e.target.dataset.color);
//         //localStorage.setItem("color_option", e.target.dataset.color);            
//     });
// });


/* 
// Create Place In Storage To Refresh Page Stay Color selector
if(mainColors !== null){
    document.documentElement.style.setProperty('--hover-color', mainColors);
    document.querySelectorAll(".color-list li").forEach(Element => {
        Element.classList.remove("active");
        if(Element.classList.color === mainColors) {
            Element.classList.add("active")
        }
    });
}
 */


/* End Setting */

/* Start Scroll To Top */
// let spanScrollTop = document.querySelector(".back-to-top");
// window.onscroll = function () { 
//     //this.scrollY >= 500 ? spanScrollTop.classList.add("show"): spanScrollTop.classList.remove("show");
//     if (this.scrollY >= 500) {
//         spanScrollTop.style.transform = "scale(1)"
//     }else {
//         spanScrollTop.style.transform = "scale(0)"
//     }
// };
// spanScrollTop.onclick = function () {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//     });
// };
/* End Scroll To Top */

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