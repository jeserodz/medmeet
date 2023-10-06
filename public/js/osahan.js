/*
Template Name: Movbok - Movies, Events, Sports Website HTML Template
Author: askbootstrap
Author URI: https://themeforest.net/user/askbootstrap
Version: 1.0
*/

(function ($) {
  'use strict'; // Start of use strict

  // Collections Slider
  $('.collections-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  });

  // Osahan Slider
  $('.osahan-slider').show();
  $('.osahan-slider').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Scroll to top button appear
  $(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this);
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top,
        },
        1000,
        'easeInOutExpo'
      );
    e.preventDefault();
  });
})(jQuery); // End of use strict
