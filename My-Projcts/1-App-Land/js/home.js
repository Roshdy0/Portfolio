var typed = new Typed('.animate', {
    strings: [
      "your apps",
      "Your Device",
      "Mobile Apps",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });

    /* Change Header With Scroll Bar */
  window.onscroll = function() {
    headerFun()
};

function headerFun() {

    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.getElementById("header").style.padding = "10px";
      document.getElementById("header").classList.add("gradiant-background");

      document.getElementById("logo").style.display = "none";
      document.getElementById("logo2").style.display = "block";
    } 
    else {
        document.getElementById("header").classList.remove("gradiant-background");
        document.getElementById("header").style.padding = "30px 10px";
        

      document.getElementById("logo").style.display = "block";
      document.getElementById("logo2").style.display = "none";

    }   
}

/* Change Header With Media Query */
//Animate Gear And Show Setting
let gear = document.querySelector(".header .fa-bars");
let navbar = document.querySelector(".header .navbar-dropdown"); 
gear.onclick = function() {
    this.classList.toggle("fa-bars-staggered");
    navbar.classList.toggle("hidden");
    navbar.classList.toggle("show");
    
};

/* owl Slider Center Mode */
var owl = $('.screenshot .iphone .first-owl');
owl.owlCarousel({
  items:5,
  loop:true,
  margin:20,
  autoplay:true,
  autoplayTimeout:10000,
  dotsEach:true,
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

var owl = $('.second-owl');
owl.owlCarousel({
  items:2,
  loop:true,
  margin:20,
  autoplay:true,
  autoplayTimeout:8000,
  dotsEach:true,
  responsive: {
    0:{
      items: 1
    },
    600: {
        items: 2
    },
    1024: {
        items: 2
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