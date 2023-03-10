"use strict";

(function ($) {
  $(window).scroll(function () {
    var header = $('header');

    if ($(window).scrollTop() > 0) {
      header.addClass('fixed');
      $('main').css('margin-top', parseInt(header.css('height')));
    } else {
      header.removeClass('fixed');
      $('main').css('margin-top', parseInt(0));
    }
  });
  $(document).ready(function () {
    $('main').css('margin-top', parseInt($('header').css('height')));
    var homePageSwiper = new Swiper('.home-page-swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      }
    });
  });
})(jQuery);