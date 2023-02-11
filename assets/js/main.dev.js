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
    if ($(window).scrollTop() > 0) {
      $('main').css('margin-top', parseInt($('header').css('height')));
    }

    if ($('.home-page-swiper').length) {
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
    }

    if ($('.books-swiper').length) {
      new Swiper('.books-swiper', {
        loop: true,
        navigation: {
          nextEl: '.book-prev',
          prevEl: '.book-next'
        },
        slidesPerView: 1,
        breakpoints: {
          768: {
            slidesPerView: 2
          },
          991: {
            slidesPerView: 3
          }
        }
      });
    }

    if ($('.voices-banner-slider').length) {
      new Swiper('.voices-banner-slider', {
        loop: true,
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        autoplay: {
          delay: 1000
        }
      });
    }

    if ($('.videos-swiper').length) {
      var thumbVideosSwiper = new Swiper(".thumb-videos-swiper", {
        spaceBetween: 10,
        freeMode: true,
        watchSlidesProgress: true,
        slidesPerView: 1.5,
        breakpoints: {
          768: {
            slidesPerView: 2.5
          },
          991: {
            slidesPerView: 3.5
          },
          1200: {
            slidesPerView: 4.5
          },
          1400: {
            slidesPerView: 5.5
          }
        }
      });
      var videosSwiper = new Swiper(".videos-swiper", {
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        thumbs: {
          swiper: thumbVideosSwiper
        }
      });
    }
  });
})(jQuery);