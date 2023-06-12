/* Start Nav Bar */
let NavBarOffSetTop = document.querySelector(".header");
let NavBarLogoFirst = document.querySelector(".header .logo img:first-child");
let NavBarLogoSecond = document.querySelector(".header .logo img:last-child");
let NavBarLinks = document.querySelectorAll(".header .menu a");
let NavBarIcons = document.querySelectorAll(".header .icons i");

window.onscroll = function () {
    if ( window.scrollY > NavBarOffSetTop.offsetTop + 200 ) {
        NavBarOffSetTop.style.backgroundColor = "#fff";
        NavBarLogoFirst.style.display = "none";
        NavBarLogoSecond.style.display = "block";
        NavBarLinks.forEach((link) => {
            link.style.color = "#000";
        });
        NavBarIcons.forEach((icon => {
            icon.style.color = "#000";
        }))
    }else{
        NavBarLogoFirst.style.display = "block";
        NavBarLogoSecond.style.display = "none";
        NavBarOffSetTop.style.backgroundColor = "transparent";
        NavBarLinks.forEach((link) => {
            link.style.color = "#fff";
        });
        NavBarIcons.forEach((icon => {
            icon.style.color = "#fff";
        }));
    }
}
/* End Nav Bar */

var owl = $('.landing-owl');
owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
});
var owl = $('.categories-owl');
owl.owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1024: {
            items: 5
        }
    }
});

/* Start CountDown To Section Trending */
let countDownDate = new Date("Feb 20, 2023 23:59:59").getTime();
let counterTimer = setInterval(() => {
    let dateNow = new Date().getTime();
    let difference =  countDownDate - dateNow ;
    let days = Math.floor(difference /(1000 * 60 * 60 * 24) );
    let hours =  Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes =  Math.floor((difference % (1000 * 60 * 60 ) )/ (1000 * 60 ));
    let seconds =  Math.floor((difference % (1000 * 60 ))/ (1000));

    let eventDays = document.querySelectorAll(".trending .days");
    let eventHours  = document.querySelectorAll(".trending .hours");
    let eventMinutes = document.querySelectorAll(".trending .minutes");
    let evenSeconds = document.querySelectorAll(".trending .seconds");

    eventDays.forEach((day) =>{
        day.innerHTML = days < 10? `0${days}` : days;
    });
    eventHours.forEach((hour) =>{
        hour.innerHTML = hours < 10? `0${hours}` : hours;
    });
    eventMinutes.forEach((minute) =>{
        minute.innerHTML = minutes < 10? `0${minutes}` : minutes;
    });
    evenSeconds.forEach((second) =>{
        second.innerHTML = seconds < 10? `0${seconds}` : seconds;
    });
    if(difference < 0 ){
        clearInterval(counterTimer);
    }
}, 1000);
/* End CountDawn To Section trending */