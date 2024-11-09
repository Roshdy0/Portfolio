/* All Variable */
let rootHeaderColor = document.querySelector(':root');
let NavBarOffSetTop = document.querySelector(".navbar");
let Up = document.getElementById("Up");

// To Animation 

let AboutSection = document.querySelector(".about");

window.onscroll = function () {
    if (window.scrollY > NavBarOffSetTop.offsetTop + 100) {
        // AboutSection.style.animation("infinite");
        AboutSection.classList.add("DownToTop");
        AboutSection.classList.remove("Down");
    }
    else if ( window.scrollY > NavBarOffSetTop.offsetTop + 50 ) {
        NavBarOffSetTop.style.setProperty ("--header-color", "#ea4020");
        rootHeaderColor.style.setProperty ('--header-text-color', '#fff');
        rootHeaderColor.style.setProperty ('--header-hight', '50px');
        Up.style.display = "block";
    }
    else{
        NavBarOffSetTop.style.setProperty ("--header-color", "#eeeeee5e");
        rootHeaderColor.style.setProperty ('--header-text-color', '#000');
        rootHeaderColor.style.setProperty ('--header-hight', '80px');
        Up.style.display = "none";
    }
}