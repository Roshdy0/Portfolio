/* Start Setting */
let setting = document.querySelector(".setting");
let gear = document.querySelector(".toggle .fa-gear");
//Animate Gear And Show Setting
gear.onclick = function() {
    this.classList.toggle("fa-spin");
    setting.classList.toggle("open");
    
};

let mainColors = localStorage.getItem("color_option");
const colorLi = document.querySelectorAll(".color-list li");
colorLi.forEach(li => {
    li.addEventListener("click", (e) =>{
        document.documentElement.style.setProperty('--hover-color', e.target.dataset.color);
        //localStorage.setItem("color_option", e.target.dataset.color);            
    });
});
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
var owl = $('.landing-owl');
owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
});
/* Start Deal */
var owl = $('.offer-owl');
owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    nav: true,
});
let countDownDate = new Date("Feb 20, 2023 23:59:59").getTime();
let counterTimer = setInterval(() => {
    let dateNow = new Date().getTime();
    let difference =  countDownDate - dateNow ;
    let days = Math.floor(difference /(1000 * 60 * 60 * 24) );
    let hours =  Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes =  Math.floor((difference % (1000 * 60 * 60 ) )/ (1000 * 60 ));
    let seconds =  Math.floor((difference % (1000 * 60 ))/ (1000));

    document.querySelector(".offer .timer .countdown-box  .days").innerHTML = days < 10? `0${days}` : days;
    document.querySelector(".offer .timer .countdown-box .hours").innerHTML = hours < 10? `0${hours}` : hours;
    document.querySelector(".offer .timer .countdown-box .minutes").innerHTML = minutes < 10? `0${minutes}` : minutes;
    document.querySelector(".offer .timer .countdown-box .seconds").innerHTML = seconds < 10? `0${seconds}` : seconds;
    if(difference < 0 ){
        clearInterval(counterTimer);
    }
}, 1000);
/* End Deal */
/* Start Featured */
var owl = $('.featured-owl');
owl.owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    margin: 5,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1024: {
            items: 4
        }
    }
});
/* End Featured */

var owl = $('.opinion-owl');
owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    margin: 5,
});

/* Start Scroll To Top */
let spanScrollTop = document.querySelector(".back-to-top");
window.onscroll = function () { 
    //this.scrollY >= 500 ? spanScrollTop.classList.add("show"): spanScrollTop.classList.remove("show");
    if (this.scrollY >= 500) {
        spanScrollTop.style.transform = "scale(1)"
    }else {
        spanScrollTop.style.transform = "scale(0)"
    }
};
spanScrollTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
/* End Scroll To Top */