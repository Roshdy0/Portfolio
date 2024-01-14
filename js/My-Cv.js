/* Start NavBar */
let NavBarOffSetTop = document.querySelector(".navbar");
var rootHeaderColor = document.querySelector(':root');
var Up = document.getElementById("Up");

window.onscroll = function () {
    if ( window.scrollY > NavBarOffSetTop.offsetTop + 50 ) {
        NavBarOffSetTop.style.setProperty ("--header-color", "#ea4020");
        rootHeaderColor.style.setProperty('--header-text-color', '#fff');
        rootHeaderColor.style.setProperty('--header-hight', '50px');
        rootHeaderColor.style.setProperty('--header-hight', '50px');
        Up.style.display = "block";
    }else{
        NavBarOffSetTop.style.setProperty ("--header-color", "#eeeeee5e");
        rootHeaderColor.style.setProperty('--header-text-color', '#000');
        rootHeaderColor.style.setProperty('--header-hight', '80px');
        Up.style.display = "none";
    }
}
/* Start About Owl */
var owl = $('.owl-box');
owl.owlCarousel({
    items:1,
    loop:true,    
    autoplay:true,
    dots:false,
});
var owl = $('.owl-box2');
owl.owlCarousel({
    items:3,
    loop:true,   
    margin: 0, 
    autoplay:true,
    dots:false,
});
var owl = $('.owl-box3');
owl.owlCarousel({
    items:5,
    loop:true,   
    margin: 0, 
    autoplay:true,
    dots:false,
});
/* End About Owl */
/* End NavBar */