// To Display error 
/*global $, alert, console */
$(function (){
    
    'use strict'
    // Links add active class
    $('.navbar ul li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // Smooth scroll to div
    $('.navbar ul li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000)
    });
    
});