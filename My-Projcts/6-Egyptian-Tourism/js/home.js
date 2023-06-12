/* global $, alert, console */
$(function () {
    'use strict';

    // trigger nice scroll
    $('html').niceScroll({
        cursorcolor:'#f7600e',
        cursorwidth: 10 ,
        cursorborderradius: 0 ,
        cursorborder: '1px solid #f7600e'
    });

    // change header hight
    $('.header').height($(window).height());

    // Chevron To Move To Features
    $('.header .arrow i').click(function () {
       $('html, body').animate({
           scrollTop: $('.features').offset().top
       }, 1000);
    });

    // Move To Our-Team
    $('.hire').click(function () {
        $('html, body').animate({
            scrollTop: $('.our-team').offset().top
        }, 1000);
    });

    // Chevron To Move Top
    let mychevrontop = document.getElementById("chevron-top") ;
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    function scrollFunction(){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            mychevrontop.style.display = "block";
        } else {
            mychevrontop.style.display = "none";
        }
    }
    // When the user clicks on the button, scroll to the top of the document
    $('.fa-chevron-up').click(function () {
        $('html, body').animate({
            scrollTop: $('.logo').offset().top
        }, 500);
    });

    // Show Hidden Items Form Work
    $('.show-more').click(function() {
        $('.civilization .hidden').fadeIn(1000);
    });
    
    // Check Elders 
    //Get Chevron
    var leftArrow = $('.elders .fa-chevron-left'),
        rightArrow = $('.elders .fa-chevron-right');         

    function checkClients () {
        /* Smart If Condition
        $('.client:first').hasClass('active') ? leftArrow.fadeOut() :leftArrow.fadeIn();
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() :rightArrow .fadeIn(); */

        if ($('.client:first').hasClass('active')) {
            leftArrow.fadeOut();
        } else {
            leftArrow.fadeIn();
        }
        if ($('.client:last').hasClass('active')) {
            rightArrow.fadeOut();
        } else {
            rightArrow.fadeIn();
        }
    }
    // Check Clint Active To Show Chevron
    checkClients ();
    $('.elders i').click(function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.elders .active').fadeOut(100, function() {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients ();
            });
        } else{
            $('.elders .active').fadeOut(100,function() {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients ();
            });
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

});