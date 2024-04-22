/* Start Nav Bar */
let NavBarOffSetTop = document.querySelector(".header");
let NavBarLogoFirst = document.querySelector(".header .logo img:first-child");
let NavBarLogoSecond = document.querySelector(".header .logo img:last-child");
let NavBarLinks = document.querySelectorAll(".header .menu a");
let NavBarIcons = document.querySelectorAll(".header .icons i");

let menuPhone = document.querySelector(".header .menu-phone");
let menuPhoneIcon = document.querySelector(".header .menu-phone i");
let dropdown = document.querySelector(".header .menu-phone-dropdown");

menuPhone.onclick = function() {
    dropdown.classList.toggle("open");
}


window.onscroll = function () {
    if ( window.scrollY > NavBarOffSetTop.offsetTop + 200 ) {
        
        NavBarOffSetTop.style.backgroundColor = "#fff";
        NavBarLogoFirst.style.display = "none";
        NavBarLogoSecond.style.display = "block";
        menuPhoneIcon.style.color = "#000";

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
        menuPhoneIcon.style.color = "#FFF";
        
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

let CategoriesOwl = $('.categories-owl');
CategoriesOwl.owlCarousel({
    items: 5,
    loop: true,
    dots: false,
    margin: 10,
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
        }
    }
});

/* Start CountDown To Section Trending */
let countDownDate = new Date("Feb 20, 2025 23:59:59").getTime();
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