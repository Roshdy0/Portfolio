let setting = document.querySelector(".setting");
let gear = document.querySelector(".toggle .fa-gear");
//Animate Gear And Show Setting
gear.onclick = function() {
    this.classList.toggle("fa-spin");
    setting.classList.toggle("open");
    
};

// Handel Active State 
function handelActive(ev){
    //Remove Active Class From All Children
    ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
        element.classList.remove("active");
    });
    // Add Active Class On Self
    ev.target.classList.add("active");
    
}

let mainColors = localStorage.getItem("color_option");
const colorLi = document.querySelectorAll(".color-list li");
// Loop On All Spans To Change Color Span 
colorLi.forEach(li => {
    // Click On Every Span
    li.addEventListener("click", (e) =>{
        // Set Color On Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
            // Set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);
        
        // Function To Remove Class Active And Add To Element Click
        handelActive(e);              
    });
});
// Create Place In Storage To Refresh Page Stay Color selector
if(mainColors !== null){
    document.documentElement.style.setProperty('--main-color', mainColors);
    
    // Remove Active Class From All Colors List Item
    document.querySelectorAll(".color-list li").forEach(Element => {
        Element.classList.remove("active");
        // add active class on element with data-color === local storage item
        if(Element.classList.color === mainColors) {
            Element.classList.add("active")
        }
    });
    
}

let landing = document.querySelector(".landing");
let imgsArray = ["background1.jpg","background2.jpg", "background3.jpg", "background4.jpg", "background5.jpg"];
let backgroundOption = true;
let backgroundInterval;
const randomBackEl = document.querySelectorAll(".random-background span");
let BackgroundLocalItems = localStorage.getItem("background_option");
// Create Randomize Background Random ( Slide Show ) With setInterval 
// check if Random Background Local Is Not Empty
if (BackgroundLocalItems !== null){
    if (BackgroundLocalItems === 'true'){
        backgroundOption = true; 
    } else {
        backgroundOption = false;        
    }

    // Remove Active Class From All .random-background span
    document.querySelectorAll(".random-background  span").forEach(element =>{
        element.classList.remove("active");
    });

    if (BackgroundLocalItems === 'true' ){
        document.querySelector(".random-background .yes").classList.add("active");
    } else {
        document.querySelector(".random-background .no").classList.add("active");
    }
    
}
// Create Randomize Image
function randomizeImgs(){
    if (backgroundOption === true){
        backgroundInterval = setInterval(() => {
            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            // Change Background Image Url 
            landing.style.backgroundImage = 'url("../image/Home/' + imgsArray[randomNumber] + '")';
        }, 1000);
    }
}
randomizeImgs() ;

// Switch Random Background Option
//.for each => To Create Loop 
randomBackEl.forEach(span => {
    span.addEventListener("click", (e) =>{
        handelActive(e);
            
        if(e.target.dataset.background === 'yes') {
            backgroundOption = true;
            randomizeImgs () ;
            localStorage.setItem("background_option", true);
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option", false);
        }
    });
});

/* Start Animation When Arrive To Section [ Our Skills] */
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
    // Skills Offset Top
    let skillOffsetTop = ourSkills.offsetTop;

    //Skills Outer Height
    let skillOuterHeight = ourSkills.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    //Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillOffsetTop + skillOuterHeight - windowHeight)) {        
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;            
        });
    }
};
/* End Animation When Arrive To Section [ Our Skills] */

/* Start Popup */
// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery .img img");
ourGallery.forEach(img =>{
    img.addEventListener('click',(e) => {
        
        // Create Overlay Element
        let overlay = document.createElement("div");

        // Add Class To Overlay
        overlay.className = 'popup-overlay';

        // append Overlay To Th3e Body
        document.body.appendChild(overlay);

        //Create The Popup Box 
        let popupBox = document.createElement("div");

        //Add Class To The Popup Box
        popupBox.className = 'popup-box' ;

        // 2 - Create header
        if(img.alt !==  null){

            // Create Heading 
            let imgHeading = document.createElement("h3");

            // Create Text For Heading 
            let imgText = document.createTextNode(img.alt);

            // Append The Text to The Heading
            imgHeading.appendChild(imgText);

            // Append the heading to the popup box 
            popupBox.appendChild(imgHeading);
        }

        //Create The Image
        let popupImage = document.createElement("img");

        // Set Image Source
        popupImage.src = img.src;

        // Add Image To Popup
        popupBox.appendChild(popupImage);

        // Append The Popup Box To Body
        document.body.appendChild(popupBox);   
        
        //create the close span 
        let closeButton = document.createElement("span");

        //create the close button text
        let closeButtonText = document.createTextNode("x");

        // Append Text To Class Button
        closeButton.appendChild(closeButtonText);

        // Add Close To Close Button
        closeButton.className = 'close-button';

        // add close button to the popup box 
        popupBox.appendChild(closeButton)
    });
});
// Close Popup Box
    // (e) -> Event
document.addEventListener("click", function(e) {
    if (e.target.className == 'close-button'){

        // Remove THe Current Popup
        e.target.parentNode.remove();

        // Remove Overlay 
        document.querySelector(".popup-overlay").remove();
    }
});

// Click Any Where To Close Popup Box
/* document.addEventListener("click", (e) =>{
    if (e.target !== ourGallery){
        // Check If Element is Here Our No
        if(ourGallery.classList.contains("popup-overlay")){
            overlay.classList.toggle("popup-overlay");
        }
    }
}); */
/* End Popup */

/* Start Bullets */
const allBullets =  document.querySelectorAll(".nav-bulltes .bulltes");
const allLinks =  document.querySelectorAll(".header .links a");
function scrollToSomeWhere(elements){
    elements.forEach(ele => {
        ele.addEventListener("click", (e) =>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
scrollToSomeWhere (allBullets) ;
scrollToSomeWhere (allLinks) ;
// 2 - Start Option Bulltes 
let bulltesSpan = document.querySelectorAll(".bulltes-option span");
let bulltesContainer = document.querySelector(".nav-bulltes");
let bulltesLocalItem = localStorage.getItem("bulltes_option");
// 3 - bulltes Local Item To Do Refresh To Page 
if( bulltesLocalItem !== null){
    bulltesSpan.forEach(span =>{
        span.classList.remove("active");
    });

    if (bulltesLocalItem === 'block') {
        bulltesContainer.style.display = 'block';
        document.querySelector(".bulltes-option .yes").classList.add("active");
    } else {
        bulltesContainer.style.display = 'none';
        document.querySelector(".bulltes-option .no").classList.add("active");
    }
}
bulltesSpan.forEach(span => {
    span.addEventListener("click", (e) =>{
        if (span.dataset.display === 'show') {
            bulltesContainer.style.display = 'block';
            localStorage.setItem("bulltes_option", 'block');
        } else {
            bulltesContainer.style.display = 'none' ;
            localStorage.setItem("bulltes_option", 'none');
        }
        
        // 2- Remove Class Active From All Span And Add In Target
        handelActive(e);
    });
});
/* End Bulltes */
/* Reset Button */
    // localStorage.clear(); -> clear use to delete all local Storage
document.querySelector(".reset-option").onclick = function (){
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bulltes_option");
    window.location.reload();
};

/* Start Counter */
let counter = document.querySelector(".counter");
let number = document.querySelectorAll(".counter .box .number p");
let started = false; // Function started ? No

// 1 - Create setInterval Function To Increase Number
function StartCount(count) {
    let num = count.dataset.count;
    let inter = setInterval(() =>{
        count.textContent++;
        if (count.textContent == num) {
            clearInterval(inter);
        }
    }, 10);
}
// 2 - Create Loop To To Select All Numbers And Put In If Condition
// 3 - Stop setInterval || Counter
window.onscroll = function () {
    if ( window.scrollY >= counter.offsetTop ) {
        if (!started){
            number.forEach((num) => StartCount(num));
        }
        started = true
    }
}

/* End Counter */
